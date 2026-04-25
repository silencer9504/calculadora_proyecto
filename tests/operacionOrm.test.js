import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { Operacion, OperacionORM } from "../lib/operacionOrm.js";

describe("OperacionORM", () => {
  test("guarda y lista operaciones como objetos del dominio", async () => {
    const carpeta = await mkdtemp(join(tmpdir(), "calculadora-orm-"));
    const orm = new OperacionORM(join(carpeta, "operaciones.json"));

    try {
      const guardada = await orm.guardar({
        operandoA: 2,
        operandoB: 3,
        operador: "+",
        resultado: 5,
      });
      const operaciones = await orm.listar();

      assert.equal(guardada.id, 1);
      assert.equal(operaciones.length, 1);
      assert.ok(operaciones[0] instanceof Operacion);
      assert.equal(operaciones[0].resultado, 5);
    } finally {
      await rm(carpeta, { recursive: true, force: true });
    }
  });

  test("busca operaciones por id", async () => {
    const carpeta = await mkdtemp(join(tmpdir(), "calculadora-orm-"));
    const orm = new OperacionORM(join(carpeta, "operaciones.json"));

    try {
      await orm.guardar({ operandoA: 8, operandoB: 2, operador: "/", resultado: 4 });
      await orm.guardar({ operandoA: 5, operandoB: 2, operador: "*", resultado: 10 });

      const encontrada = await orm.buscarPorId(2);
      const inexistente = await orm.buscarPorId(99);

      assert.equal(encontrada.resultado, 10);
      assert.equal(inexistente, null);
    } finally {
      await rm(carpeta, { recursive: true, force: true });
    }
  });
});
