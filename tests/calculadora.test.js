import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { calcular, formatear } from "../lib/calculadora.js";

describe("calcular", () => {
  test("suma y resta", () => {
    assert.equal(calcular(2, 3, "+"), 5);
    assert.equal(calcular(10, 4, "-"), 6);
  });
  test("multiplicación y división", () => {
    assert.equal(calcular(3, 4, "*"), 12);
    assert.equal(calcular(8, 2, "/"), 4);
  });
  test("división por cero devuelve NaN", () => {
    assert.ok(Number.isNaN(calcular(1, 0, "/")));
  });
  test("potencia", () => {
    assert.equal(calcular(2, 8, "^"), 256);
  });
  test("rechaza operandos invalidos", () => {
    assert.throws(() => calcular(Number.POSITIVE_INFINITY, 2, "+"), TypeError);
  });
  test("rechaza operaciones no soportadas", () => {
    assert.throws(() => calcular(2, 3, "%"), /Operacion no soportada/);
  });
});

describe("formatear", () => {
  test("usa coma decimal", () => {
    assert.equal(formatear(1.5), "1,5");
  });
  test("error para no finitos", () => {
    assert.equal(formatear(NaN), "Error");
  });
});
