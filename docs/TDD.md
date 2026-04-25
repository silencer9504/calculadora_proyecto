# TDD en el proyecto

Este proyecto aplica TDD de forma simple con el ciclo Red-Green-Refactor:

1. Red: escribir una prueba que describe el comportamiento esperado.
2. Green: implementar el codigo minimo para que la prueba pase.
3. Refactor: mejorar nombres, estructura o duplicacion sin cambiar el comportamiento.

## Pruebas unitarias

Las pruebas se ejecutan con:

```bash
npm test
```

Hay pruebas para:

- Operaciones de la calculadora.
- Validaciones de entradas invalidas.
- Kata `sumarCadena`.
- Persistencia sencilla con `OperacionORM`.

## Kata TDD

La kata `sumarCadena` se implemento en iteraciones:

1. Cadena vacia devuelve `0`.
2. Un numero devuelve su valor.
3. Dos o mas numeros separados por coma se suman.
4. Tambien se aceptan saltos de linea como separador.
5. Los negativos se rechazan con un mensaje claro.

## ORM

`OperacionORM` es un ORM educativo y liviano. Mapea registros guardados en un archivo JSON a objetos `Operacion`, permitiendo guardar, listar y buscar operaciones por id sin agregar dependencias externas.
