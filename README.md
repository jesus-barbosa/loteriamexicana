<p align="center">
  <img src="public/assets/cards/card.png" alt="Lotería Mexicana" width="120">
</p>

<h1 align="center"> Lotería Mexicana</h1>

<p align="center">
  Juego web de la tradicional Lotería Mexicana — 54 cartas auténticas Don Clemente Gallo con imágenes reales, pronunciación por voz y diseño responsivo.
</p>

<p align="center">
  <a href="https://jesus-barbosa.github.io/loteriamexicana/"><img src="https://img.shields.io/badge/demo-github_pages-2ea44f?style=flat" alt="Demo"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=flat" alt="License"></a>
  <img src="https://img.shields.io/badge/Phaser_3-3.80+-e74430?style=flat" alt="Phaser 3">
  <img src="https://img.shields.io/badge/Vite-5.4+-646cff?style=flat" alt="Vite">
  <img src="https://img.shields.io/badge/Node.js-≥18-339933?style=flat" alt="Node.js">
  <img src="https://img.shields.io/badge/tests-131_passing-27ae60?style=flat" alt="Tests">
  <img src="https://img.shields.io/badge/coverage-≥90%25-27ae60?style=flat" alt="Coverage">
</p>

---

##  Funcionalidades

| # | Funcionalidad | Descripción |
|---|---------------|-------------|
| 1 | **54 cartas reales** | Baraja completa Don Clemente Gallo con nombres auténticos |
| 2 | **Imágenes auténticas** | Cada carta tiene su propia imagen JPG de la baraja original |
| 3 | **Resolución adaptable** | 800x600 en desktop, se adapta a cualquier tamaño de pantalla |
| 4 | **Barajeo criptográfico** | Fisher-Yates con `crypto.getRandomValues` |
| 5 | **Animación de barajeo** | Ciclos visuales antes de empezar |
| 6 | **Selector de intervalo** | 1s, 2s, 3s o 5s entre cartas, cambiable durante la partida |
| 7 | **Pausa / Reanudar** | Control total del ciclo de cartas |
| 8 | **Historial** | Panel lateral con scroll de todas las cartas mostradas |
| 9 | **Voz** | Pronunciación del nombre en español (`es-MX`) vía Web Speech API |
| 10 | **Pantalla completa** | Tecla F en escritorio, doble tap en móvil |
| 11 | **Responsivo** | Layout que se adapta a cualquier tamaño de pantalla |
| 12 | **Finalizar** | Reinicia el juego en cualquier momento |

##  Prerequisitos

- **Node.js** >= 18.x
- **npm** >= 9.x

##  Quick Start

```bash
git clone https://github.com/jesus-barbosa/loteriamexicana.git
cd loteriamexicana
npm install
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

##  Cómo Jugar

1. Selecciona el intervalo entre cartas (1s, 2s, 3s, 5s)
2. Presiona **Comenzar** — las 54 cartas se barajan con animación
3. El juego muestra una carta cada N segundos
4. Usa **Detener/Reanudar** para pausar el ciclo
5. Revisa el **Historial** en el panel derecho
6. Presiona **Finalizar** para terminar y reiniciar

##  Scripts disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| `dev` | `npm run dev` | Inicia el servidor de desarrollo de Vite |
| `build` | `npm run build` | Genera el build de producción en `dist/` |
| `preview` | `npm run preview` | Vista previa del build de producción |
| `test` | `npm run test` | Ejecuta todas las pruebas unitarias |
| `test:watch` | `npm run test:watch` | Ejecuta pruebas en modo watch (re-ejecuta al guardar) |
| `test:coverage` | `npm run test:coverage` | Pruebas con reporte de cobertura (≥90%) |
| `lint` | `npm run lint` | Verifica el código con ESLint |
| `lint:fix` | `npm run lint:fix` | Auto-correge errores de linting |
| `security` | `npm run security` | Auditoría de seguridad + verificación de lockfile |

##  Tech Stack

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| [Phaser 3](https://phaser.io/) | ^3.80.0 | Motor de juego |
| [Vite](https://vitejs.dev/) | ^5.4.0 | Empaquetado y dev server |
| [Vitest](https://vitest.dev/) | ^4.1.0 | Pruebas unitarias |
| [ESLint](https://eslint.org/) | ^10.0.0 | Linter (flat config) |
| [GitHub Actions](https://github.com/features/actions) | — | CI/CD a GitHub Pages |

##  Estructura del Proyecto

```
/
├── .github/workflows/deploy.yml   # CI/CD a GitHub Pages
├── public/assets/
│   ├── cards/                     # 54 imágenes JPG + card.png fallback
│   └── sounds/                    # Efectos de sonido (click, move, 54 audios)
├── src/
│   ├── scenes/
│   │   ├── Boot.js                # Escena de carga de assets
│   │   └── Game.js                # Escena principal del juego
│   ├── __tests__/                 # Pruebas unitarias
│   │   ├── _setup.js              # Mocks de Phaser para tests
│   │   ├── Boot.test.js           # Tests de la escena Boot
│   │   ├── Game.test.js           # Tests de la escena Game (106 tests)
│   │   ├── cardLoader.test.js     # Tests del cargador de cartas
│   │   ├── cards.test.js          # Tests de datos de cartas
│   │   └── config.test.js         # Tests de configuración
│   ├── cardLoader.js              # Carga bajo demanda de imágenes
│   ├── cards.js                   # Datos de las 54 cartas
│   ├── config.js                  # Configuración de Phaser
│   └── main.js                    # Punto de entrada
├── eslint.config.js               # Configuración ESLint (flat config)
├── index.html                     # HTML de entrada
├── package.json
├── vite.config.js                 # Configuración de Vite
├── vitest.config.js               # Configuración de Vitest
└── README.md
```

##  Testing & Quality

```bash
npm run test           # Ejecutar pruebas (131 tests)
npm run test:coverage  # Pruebas con reporte de cobertura (≥90%)
npm run lint           # Verificar código con ESLint
npm run lint:fix       # Auto-corregir errores de linting
npm run security       # Auditoría de seguridad + lockfile
npm run build          # Build de producción
```

### Cobertura mínima

El proyecto mantiene ≥90% de cobertura en todas las métricas:

| Métrica | Umbral |
|---------|--------|
| Statements | ≥90% |
| Branches | ≥90% |
| Functions | ≥90% |
| Lines | ≥90% |

##  Roadmap

- [x] Barajeo Fisher-Yates con `crypto.getRandomValues`
- [x] 54 cartas oficiales Don Clemente Gallo
- [x] Pruebas unitarias con cobertura ≥90%
- [x] ESLint + verificación de seguridad
- [x] Imágenes auténticas de cartas
- [x] Carga bajo demanda con fallback
- [x] Resolución adaptable
- [x] Despliegue a GitHub Pages con Actions
- [x] Selector de intervalo configurable
- [x] Historial de cartas mostradas
- [x] Soporte de voz (Web Speech API)
- [ ] Sistema de puntuación
- [ ] Música de fondo
- [ ] Menú principal
- [ ] Controles táctiles avanzados
- [ ] Botón de pantalla completa en UI

##  Contribuir

### Requisitos previos

- Node.js >= 18.x
- npm >= 9.x

### Pasos

1. Haz fork del repo
2. Crea una rama: `git checkout -b feature/mi-feature`
3. Instala dependencias: `npm install`
4. Haz tus cambios y corre las pruebas:
   ```bash
   npm run test && npm run lint
   ```
5. Haz commit siguiendo [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   # Formato: <tipo>(<scope>): <descripción>
   # Tipos: feat, fix, docs, style, refactor, test, chore

   git commit -m "feat(game): agregar sistema de puntuación"
   git commit -m "fix(audio): corregir reproducción en Safari"
   git commit -m "test(cards): agregar tests para validación"
   ```
6. Push: `git push origin feature/mi-feature`
7. Abre un Pull Request

### Convenciones de commits

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| `feat` | Nueva funcionalidad | `feat(game): agregar modo dificultad` |
| `fix` | Corrección de bug | `fix(audio): corregir timeout en mobile` |
| `docs` | Documentación | `docs: actualizar README` |
| `test` | Pruebas | `test: agregar tests para cardLoader` |
| `refactor` | Refactorización | `refactor: extraer lógica de shuffle` |
| `chore` | Tareas de mantenimiento | `chore: actualizar dependencias` |

##  Troubleshooting

### El servidor de desarrollo no inicia

```bash
# Limpia la caché de node_modules
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Las pruebas fallan

```bash
# Verifica que no haya errores de lint primero
npm run lint
npm run test
```

### Build falla en CI/CD

- Verifica que `npm run build` funcione localmente
- Revisa los logs de GitHub Actions en la pestaña "Actions"
- Asegúrate de que el push sea a la rama `main`

### El juego no carga en Safari

- Verifica la consola del navegador para errores
- Web Speech API puede no estar disponible en todos los navegadores

##  Licencia

Distribuido bajo licencia MIT. Ver `LICENSE` para más información.
