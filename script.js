import { formatear, calcular } from "./lib/calculadora.js";

(function () {
  const pantalla = document.getElementById("pantalla");
  const indicadorMemoria = document.getElementById("indicadorMemoria");

  let display = "0";
  let valorPrevio = null;
  let operador = null;
  let esperandoOperando = false;
  let memoria = 0;
  let hayMemoria = false;

  function parsearDisplay() {
    const t = display.replace(",", ".");
    const v = parseFloat(t);
    return Number.isFinite(v) ? v : 0;
  }

  function actualizarPantalla() {
    pantalla.textContent = display;
  }

  function actualizarMemoria() {
    if (hayMemoria) {
      indicadorMemoria.textContent = "M = " + formatear(memoria);
      indicadorMemoria.classList.add("visible");
    } else {
      indicadorMemoria.textContent = "";
      indicadorMemoria.classList.remove("visible");
    }
  }

  function aplicarBinario() {
    const input = parsearDisplay();
    if (valorPrevio === null) {
      valorPrevio = input;
    } else if (operador) {
      const r = calcular(valorPrevio, input, operador);
      display = formatear(r);
      valorPrevio = Number.isFinite(r) ? r : null;
    }
    esperandoOperando = true;
  }

  function digito(d) {
    if (esperandoOperando) {
      display = d;
      esperandoOperando = false;
    } else {
      if (display === "0" && d !== "0") display = d;
      else if (display === "0" && d === "0") return;
      else if (display === "-0" && d === "0") display = "-0";
      else if (display === "-0" && d !== "0") display = "-" + d;
      else display += d;
    }
    actualizarPantalla();
  }

  function punto() {
    const parte = display.replace("-", "");
    if (esperandoOperando) {
      display = "0,";
      esperandoOperando = false;
      actualizarPantalla();
      return;
    }
    if (!parte.includes(",")) {
      display += ",";
      actualizarPantalla();
    }
  }

  function limpiar() {
    display = "0";
    valorPrevio = null;
    operador = null;
    esperandoOperando = false;
    actualizarPantalla();
  }

  function limpiarEntrada() {
    display = "0";
    actualizarPantalla();
  }

  function retroceso() {
    if (esperandoOperando) return;
    if (display.length <= 1 || (display.startsWith("-") && display.length === 2)) {
      display = "0";
    } else {
      display = display.slice(0, -1);
    }
    actualizarPantalla();
  }

  function operacion(op) {
    aplicarBinario();
    operador = op;
    actualizarPantalla();
  }

  function igual() {
    const input = parsearDisplay();
    if (operador && valorPrevio !== null) {
      const r = calcular(valorPrevio, input, operador);
      display = formatear(r);
      valorPrevio = null;
      operador = null;
    } else {
      valorPrevio = input;
    }
    esperandoOperando = true;
    actualizarPantalla();
  }

  function porcentaje() {
    const v = parsearDisplay() / 100;
    display = formatear(v);
    esperandoOperando = true;
    actualizarPantalla();
  }

  function raiz() {
    const v = parsearDisplay();
    const r = v < 0 ? NaN : Math.sqrt(v);
    display = formatear(r);
    esperandoOperando = true;
    valorPrevio = null;
    operador = null;
    actualizarPantalla();
  }

  function cuadrado() {
    const v = parsearDisplay();
    display = formatear(v * v);
    esperandoOperando = true;
    valorPrevio = null;
    operador = null;
    actualizarPantalla();
  }

  function inverso() {
    const v = parsearDisplay();
    const r = v === 0 ? NaN : 1 / v;
    display = formatear(r);
    esperandoOperando = true;
    valorPrevio = null;
    operador = null;
    actualizarPantalla();
  }

  function mc() {
    memoria = 0;
    hayMemoria = false;
    actualizarMemoria();
  }

  function mr() {
    if (!hayMemoria) return;
    display = formatear(memoria);
    esperandoOperando = true;
    actualizarPantalla();
  }

  function mMas() {
    memoria += parsearDisplay();
    hayMemoria = true;
    actualizarMemoria();
  }

  function mMenos() {
    memoria -= parsearDisplay();
    hayMemoria = true;
    actualizarMemoria();
  }

  document.querySelector(".teclas").addEventListener("click", function (e) {
    const btn = e.target.closest("button");
    if (!btn) return;

    const d = btn.dataset.digito;
    if (d !== undefined) {
      digito(d);
      return;
    }

    const op = btn.dataset.op;
    if (op !== undefined) {
      operacion(op);
      return;
    }

    const acc = btn.dataset.accion;
    if (!acc) return;

    const acciones = {
      limpiar: limpiar,
      limpiarEntrada: limpiarEntrada,
      retroceso: retroceso,
      punto: punto,
      igual: igual,
      porcentaje: porcentaje,
      raiz: raiz,
      cuadrado: cuadrado,
      inverso: inverso,
      mc: mc,
      mr: mr,
      mMas: mMas,
      mMenos: mMenos,
    };

    const fn = acciones[acc];
    if (fn) fn();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key >= "0" && e.key <= "9") {
      e.preventDefault();
      digito(e.key);
      return;
    }
    if (e.key === "." || e.key === ",") {
      e.preventDefault();
      punto();
      return;
    }
    if (e.key === "Enter" || e.key === "=") {
      e.preventDefault();
      igual();
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      limpiar();
      return;
    }
    if (e.key === "Backspace") {
      e.preventDefault();
      retroceso();
      return;
    }
    const ops = { "+": "+", "-": "-", "*": "*", "/": "/" };
    if (ops[e.key]) {
      e.preventDefault();
      operacion(ops[e.key]);
    }
  });

  actualizarPantalla();
  actualizarMemoria();
})();
