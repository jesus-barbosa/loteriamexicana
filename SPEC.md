# SPEC: Juego Web con Phaser.js

## Descripción

Cascarrón base para un juego web individual utilizando Phaser 3. Incluye la estructura mínima para comenzar a desarrollar: escena principal, carga de assets, manejo de input, sonido y loop del juego. Soporte para escritorio y dispositivos móviles con pantalla completa.

## Stack Tecnológico

- **Motor**: Phaser 3
- **Lenguaje**: JavaScript (ES6+)
- **Empaquetado**: Vite
- **Gestión de dependencias**: npm

## Estructura del Proyecto

```
/
├── public/
│   └── assets/
│       ├── cards/       # Cartas de lotería
│       └── sounds/      # Sonidos
├── src/
│   ├── main.js          # Punto de entrada, configuración de Phaser
│   ├── cards.js         # 54 cartas de lotería mexicana
│   ├── scenes/
│   │   └── Boot.js      # Escena de carga de assets
│   │   └── Game.js      # Escena principal del juego
│   └── config.js        # Configuración del juego (dimensiones, física)
├── index.html
├── package.json
├── vite.config.js
└── SPEC.md
```

## Configuración del Juego

| Parámetro        | Valor         |
|------------------|---------------|
| Ancho            | 800px         |
| Alto             | 600px         |
| Fondo            | `#3498db`     |
| Física           | Arcade        |
| Escena inicial   | Boot          |
| Touch            | Multitouch (2 puntos) |

## Funcionalidades del Cascarrón

1. **Boot Scene**: carga de imágenes y sonidos con barra de progreso
2. **Game Scene**: título "Lotería Mexicana", carta centrada y botón Comenzar
3. **Escalado**: pantalla completa con modo RESIZE (escritorio y móvil)
4. **Touch**: soporte táctil para móviles (multitouch)
5. **Audio**: sonidos de efectos (clic, movimiento) con Phaser Sound Manager
6. **Carta de lotería**: carta de lotería mexicana centrada en pantalla con nombre
7. **Auto-barajeo**: al comenzar, baraja visualmente las cartas durante 2 segundos antes de iniciar el ciclo
8. **Comenzar**: baraja las 54 cartas y las muestra en ciclos (Fisher-Yates mejorado)
9. **Intervalo de tiempo**: selector entre 1s, 2s, 3s y 5s para el ciclo de cartas, cambiable durante la partida
10. **Detener/Reanudar**: pausa/reanuda el ciclo de cartas (aparece al iniciar, desaparece al terminar)
11. **Finalizar**: detiene el juego en cualquier momento y reinicia sin efecto de victoria (rojo, junto a Detener/Reanudar)
12. **Historial**: panel lateral derecho deslizable con nombre de cada carta, scroll con mouse wheel y touch drag
13. **Voz**: pronuncia el nombre de cada carta al mostrarla (Web Speech API, es-MX)

## Comandos

```bash
npm install            # Instalar dependencias
npm run dev            # Servidor de desarrollo con hot reload
npm run build          # Build de producción
npm run preview        # Previsualizar build
npm run test           # Ejecutar pruebas unitarias
npm run test:coverage  # Pruebas con coverage (≥90%)
npm run test:watch     # Pruebas en modo watch
npm run lint           # Verificar código con ESLint
npm run lint:fix       # Auto-corregir errores de lint
npm run security       # Verificar vulnerabilidades y lockfile
```

## Pasos Siguientes (Post-Cascarrón)

- [ ] Agregar sistema de puntuación
- [ ] Crear enemigos y colisiones
- [ ] Añadir música de fondo
- [ ] Implementar menú principal
- [ ] Agregar pantalla de game over
- [ ] Optimizar assets (spritesheets, audio compression)
- [x] Algoritmo de barajeo mejorado (Fisher-Yates con crypto.getRandomValues)
- [x] Nombres de cartas corregidos (54 cartas oficiales Don Clemente)
- [x] Pruebas unitarias con coverage ≥90% (Vitest, 101 tests, 100% coverage)
- [x] Lint (ESLint flat config con reglas recommended)
- [x] Verificación de seguridad (npm audit + lockfile-lint)
- [ ] Diseñar controles táctiles responsivos
- [ ] Agregar botón de pantalla completa
