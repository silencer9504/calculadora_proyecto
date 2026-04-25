import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

export class Operacion {
  constructor({ id, operandoA, operandoB, operador, resultado, creadaEn } = {}) {
    this.id = id;
    this.operandoA = operandoA;
    this.operandoB = operandoB;
    this.operador = operador;
    this.resultado = resultado;
    this.creadaEn = creadaEn ?? new Date().toISOString();
  }
}

export class OperacionORM {
  constructor(rutaBaseDatos) {
    this.rutaBaseDatos = rutaBaseDatos;
  }

  async guardar(datos) {
    const operaciones = await this.listar();
    const siguienteId = operaciones.length === 0
      ? 1
      : Math.max(...operaciones.map((operacion) => operacion.id)) + 1;

    const operacion = new Operacion({
      id: siguienteId,
      ...datos,
    });

    operaciones.push(operacion);
    await this.#persistir(operaciones);
    return operacion;
  }

  async listar() {
    try {
      const contenido = await readFile(this.rutaBaseDatos, "utf8");
      const registros = JSON.parse(contenido);
      return registros.map((registro) => new Operacion(registro));
    } catch (error) {
      if (error.code === "ENOENT") return [];
      throw error;
    }
  }

  async buscarPorId(id) {
    const operaciones = await this.listar();
    return operaciones.find((operacion) => operacion.id === id) ?? null;
  }

  async #persistir(operaciones) {
    await mkdir(dirname(this.rutaBaseDatos), { recursive: true });
    await writeFile(this.rutaBaseDatos, JSON.stringify(operaciones, null, 2));
  }
}
