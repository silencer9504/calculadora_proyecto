export function sumarCadena(texto) {
  if (texto === "") return 0;

  const numeros = texto
    .split(/[,\n]/)
    .map((valor) => Number(valor));

  if (numeros.some((numero) => !Number.isFinite(numero))) {
    throw new Error("La cadena contiene valores invalidos");
  }

  const negativos = numeros.filter((numero) => numero < 0);
  if (negativos.length > 0) {
    throw new Error("No se permiten negativos: " + negativos.join(", "));
  }

  return numeros.reduce((total, numero) => total + numero, 0);
}
