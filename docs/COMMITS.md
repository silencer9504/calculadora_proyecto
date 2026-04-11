# Convención de mensajes de commit

Se adopta un estilo cercano a [Conventional Commits](https://www.conventionalcommits.org/) en español para el cuerpo del mensaje cuando haga falta contexto adicional.

## Formato

```
<tipo>(<ámbito opcional>): <descripción breve en imperativo>

[cuerpo opcional]

[referencias a issues opcionales]
```

La primera línea no debe superar **72 caracteres** de ser posible.

## Tipos habituales

| Tipo | Cuándo usarlo |
|------|----------------|
| `feat` | Nueva funcionalidad visible para el usuario. |
| `fix` | Corrección de un error. |
| `docs` | Solo documentación (README, guías, comentarios de ayuda en repo). |
| `style` | Formato, comillas, espacios (sin cambiar lógica). |
| `refactor` | Cambio interno sin nuevo comportamiento ni corrección explícita. |
| `test` | Añadir o corregir pruebas automatizadas. |
| `ci` | Pipelines, workflows, hooks de integración. |
| `chore` | Mantenimiento (dependencias, tareas de build no clasificables arriba). |

## Ejemplos

- `feat(ui): añadir tecla de cambio de signo`
- `fix: corregir división por cero en pantalla`
- `docs: ampliar sección de GitFlow`
- `test: cubrir potencia en calculadora`
- `ci: ejecutar pruebas en pull request a develop`

## Buenas prácticas

- Commits **frecuentes** y **atómicos**: un cambio lógico por commit cuando sea razonable.
- Describir **qué** y **por qué**, no solo el diff literal.
- En ramas de equipo, enlazar issues o tareas en el cuerpo del mensaje si existen.
