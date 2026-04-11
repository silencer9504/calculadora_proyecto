# Calculadora proyecto

Aplicación web estática (HTML, CSS y JavaScript) con calculadora de varias funciones, pruebas automatizadas y entrega continua hacia GitHub Pages.

## Estructura del repositorio

| Ruta | Descripción |
|------|-------------|
| `index.html` | Punto de entrada de la aplicación |
| `styles.css` | Estilos de la interfaz |
| `script.js` | Lógica de interfaz y eventos (módulo ES) |
| `lib/calculadora.js` | Núcleo reutilizable (formato y operaciones binarias) |
| `tests/` | Pruebas con el ejecutor de pruebas de Node.js |
| `.github/workflows/` | Pipelines de CI/CD |
| `docs/` | Guías de flujo de trabajo y convenciones |

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior (solo para ejecutar pruebas en local).

## Pruebas en local

```bash
npm test
```

## Desarrollo

Abre `index.html` mediante un servidor HTTP local (por ejemplo `npx serve .`) para que los módulos ES carguen correctamente, o usa el sitio publicado en GitHub Pages tras configurar el origen en el repositorio.

## Flujo de trabajo Git

Este proyecto sigue **GitFlow** (ramas `main`, `develop`, `feature/*`, `release/*`, `hotfix/*`). Los detalles y diagramas están en [docs/GITFLOW.md](docs/GITFLOW.md).

Los mensajes de commit siguen una convención basada en [Conventional Commits](docs/COMMITS.md).

Las integraciones se hacen con **pull requests** hacia `develop` (funcionalidad) o según la tabla de la guía para `release` y `hotfix`. Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para revisiones, pruebas y **resolución de conflictos**.

## CI/CD

- **Integración continua:** al hacer push o abrir PR hacia `main` o `develop`, se ejecutan las pruebas (`npm test`) y comprobaciones básicas de archivos.
- **Entrega continua:** cada push a `main` despliega el sitio estático a **GitHub Pages** (activa Pages en el repositorio: *Settings → Pages → GitHub Actions*).

## Licencia

Uso educativo o del equipo según acuerdo interno.
