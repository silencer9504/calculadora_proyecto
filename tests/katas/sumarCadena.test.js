import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { sumarCadena } from "../../lib/katas/sumarCadena.js";

describe("kata sumarCadena", () => {
  test("cadena vacia devuelve cero", () => {
    assert.equal(sumarCadena(""), 0);
  });

  test("suma uno o dos numeros separados por coma", () => {
    assert.equal(sumarCadena("4"), 4);
    assert.equal(sumarCadena("4,6"), 10);
  });

  test("permite saltos de linea como separador", () => {
    assert.equal(sumarCadena("1\n2,3"), 6);
  });

  test("rechaza numeros negativos", () => {
    assert.throws(() => sumarCadena("2,-4,5,-1"), /No se permiten negativos: -4, -1/);
  });
});
