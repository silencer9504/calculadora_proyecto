# Guía de contribución

## Antes de programar

1. Abre o consulta la tarea (issue o tablero) para alinear alcance.
2. Crea una rama desde `develop` siguiendo [docs/GITFLOW.md](docs/GITFLOW.md).
3. Asegúrate de tener Node.js 18+ si vas a ejecutar `npm test`.

## Pull requests

1. Actualiza tu rama con `develop` (`git fetch` y `git merge origin/develop` o `git rebase` según acuerdo del equipo).
2. Ejecuta **pruebas locales**: `npm test`.
3. Abre el PR hacia `develop` (salvo `release`/`hotfix` según el caso).
4. Completa la plantilla del PR y solicita al menos una **revisión** cuando el cambio no sea trivial.
5. Resuelve los comentarios o marca conversaciones atendidas antes de fusionar.

## Revisión de código

Los revisores comprobarán:

- Claridad y mantenibilidad del cambio.
- Coherencia con la convención de commits en la rama.
- Que las pruebas y el CI reflejen el comportamiento esperado.

## Resolución de conflictos

Los conflictos suelen aparecer al fusionar `develop` en tu rama de feature o al integrar un PR.

1. Trae los últimos cambios de la rama base (`develop` o la indicada en el PR).
2. Fusiona o reintegra en tu rama de trabajo.
3. Abre los archivos marcados por Git y **elige o combina** las versiones conservando el comportamiento acordado.
4. Vuelve a ejecutar `npm test` y, si aplica, prueba la aplicación en el navegador.
5. Completa la fusión y sube los commits de resolución con un mensaje claro, por ejemplo: `fix: resolver conflicto con develop en script.js`.
6. En el PR, describe brevemente cómo se resolvió el conflicto para facilitar la segunda revisión.

Evita fusionar el PR hasta que el CI esté en verde y, si hubo conflictos serios, un segundo par de ojos haya validado la solución.

## Comunicación

Si el conflicto implica decisiones de producto, alinea con el equipo **antes** de imponer una resolución unilateral en el código.
