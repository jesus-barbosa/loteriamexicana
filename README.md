<p align="center">
  <img src="public/assets/cards/card.png" alt="Lotería Mexicana" width="120">
</p>

<h1 align="center">🎴 Lotería Mexicana</h1>

<p align="center">
  Juego web de la tradicional Lotería Mexicana — 54 cartas auténticas Don Clemente Gallo con ilustraciones SVG, pronunciación por voz y diseño responsivo.
</p>

<p align="center">
  <a href="https://jesus-barbosa.github.io/loteriamexicana/"><img src="https://img.shields.io/badge/demo-github_pages-2ea44f?style=flat" alt="Demo"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=flat" alt="License"></a>
  <img src="https://img.shields.io/badge/Phaser_3-3.80+-e74430?style=flat" alt="Phaser 3">
  <img src="https://img.shields.io/badge/Vite-5.4+-646cff?style=flat" alt="Vite">
  <img src="https://img.shields.io/badge/tests-136_passing-27ae60?style=flat" alt="Tests">
  <img src="https://img.shields.io/badge/coverage-≥90%25-27ae60?style=flat" alt="Coverage">
</p>

---

## ✨ Funcionalidades

| # | Funcionalidad | Descripción |
|---|---------------|-------------|
| 1 | **54 cartas reales** | Baraja completa Don Clemente Gallo con nombres auténticos |
| 2 | **Ilustraciones SVG** | Cada carta tiene su propia ilustración detallada estilo Don Clemente |
| 3 | **Carga bajo demanda** | Las ilustraciones SVG se cargan al mostrarse, con indicador de carga y fallback |
| 4 | **Resolución adaptable** | 480×720 en desktop HiDPI, 240×360 en móvil |
| 5 | **Barajeo criptográfico** | Fisher-Yates con `crypto.getRandomValues` |
| 6 | **Animación de barajeo** | 20 ciclos visuales antes de empezar |
| 7 | **Selector de intervalo** | 1s, 2s, 3s o 5s entre cartas, cambiable durante la partida |
| 8 | **Pausa / Reanudar** | Control total del ciclo de cartas |
| 9 | **Historial** | Panel lateral con scroll (rueda + touch) de todas las cartas mostradas |
| 10 | **Voz** | Pronunciación del nombre en español (`es-MX`) vía Web Speech API |
| 11 | **Pantalla completa** | Tecla F en escritorio, doble tap en móvil |
| 12 | **Responsivo** | Layout 60/40 que se adapta a cualquier tamaño de pantalla |
| 13 | **Finalizar** | Reinicia el juego en cualquier momento sin efecto de victoria |

## 🚀 Quick Start

```bash
git clone https://github.com/jesus-barbosa/loteriamexicana.git
cd loteriamexicana
npm install
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

## 🎮 Cómo Jugar

1. Selecciona el intervalo entre cartas (1s, 2s, 3s, 5s)
2. Presiona **Comenzar** — las 54 cartas se barajan con animación
3. El juego muestra una carta cada N segundos
4. Usa **Detener/Reanudar** para pausar el ciclo
5. Revisa el **Historial** en el panel derecho
6. Presiona **Finalizar** para terminar y reiniciar

## 🏗️ Tech Stack

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| [Phaser 3](https://phaser.io/) | ^3.80.0 | Motor de juego |
| [Vite](https://vitejs.dev/) | ^5.4.0 | Empaquetado y dev server |
| [Vitest](https://vitest.dev/) | ^3.1.0 | Pruebas unitarias |
| [ESLint](https://eslint.org/) | ^9.0.0 | Linter |
| [GitHub Actions](https://github.com/features/actions) | — | CI/CD a GitHub Pages |

## 📁 Estructura del Proyecto

```
/
├── .github/workflows/deploy.yml   # CI/CD a GitHub Pages
├── public/assets/
│   ├── cards/                     # Imagen fallback de carta
│   └── sounds/                    # Efectos de sonido
├── src/
│   ├── scenes/
│   │   ├── Boot.js                # Escena de carga
│   │   └── Game.js                # Escena principal del juego
│   ├── __tests__/                 # Pruebas unitarias
│   ├── cardIllustrations.js       # 54 ilustraciones SVG
│   ├── cardLoader.js              # Carga bajo demanda de SVGs
│   ├── cardSvgGenerator.js        # Generador de SVG template
│   ├── cards.js                   # Datos de las 54 cartas
│   ├── config.js                  # Configuración de Phaser
│   └── main.js                    # Punto de entrada
├── index.html
├── package.json
├── vite.config.js
└── vitest.config.js
```

## 🧪 Testing & Quality

```bash
npm run test           # Ejecutar pruebas
npm run test:coverage  # Pruebas con reporte de cobertura (≥90%)
npm run lint           # Verificar código
npm run security       # Auditoría de seguridad + lockfile
npm run build          # Build de producción
```

## 🗺️ Roadmap

- [x] Barajeo Fisher-Yates con `crypto.getRandomValues`
- [x] 54 cartas oficiales Don Clemente Gallo
- [x] Pruebas unitarias con cobertura ≥90%
- [x] ESLint + verificación de seguridad
- [x] Ilustraciones SVG estilo Don Clemente
- [x] Carga bajo demanda con fallback
- [x] Resolución adaptable (HiDPI / móvil)
- [x] Despliegue a GitHub Pages con Actions
- [ ] Sistema de puntuación
- [ ] Música de fondo
- [ ] Menú principal
- [ ] Controles táctiles avanzados
- [ ] Botón de pantalla completa en UI

## 🤝 Contribuir

1. Haz fork del repo
2. Crea una rama: `git checkout -b feature/mi-feature`
3. Haz tus cambios y corre las pruebas: `npm run test && npm run lint`
4. Haz commit: `git commit -m "feat: descripción"`
5. Push: `git push origin feature/mi-feature`
6. Abre un Pull Request

## 📄 Licencia

Distribuido bajo licencia MIT. Ver `LICENSE` para más información.
