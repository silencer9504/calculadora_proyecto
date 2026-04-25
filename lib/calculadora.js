export function formatear(n) {
  if (!Number.isFinite(n)) return "Error";
  const s = String(n);
  if (s.length > 14) {
    const exp = n.toExponential(6);
    return exp.length > 14 ? n.toExponential(4) : exp;
  }
  return s.replace(".", ",");
}

export function calcular(a, b, op) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError("Los operandos deben ser numeros finitos");
  }

  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? NaN : a / b;
    case "^":
      return Math.pow(a, b);
    default:
      throw new Error("Operacion no soportada");
  }
}
