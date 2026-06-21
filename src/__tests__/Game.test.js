import { describe, it, expect, vi, beforeEach } from 'vitest';
import Game from '../scenes/Game.js';
import { CARDS } from '../cards.js';

const COLORS = {
  accent: 0xe74c3c,
  accentDark: 0xc0392b,
  gold: 0xf39c12,
  goldDark: 0xd68910,
  purple: 0x8e44ad,
  purpleDark: 0x7d3c98,
  green: 0x27ae60,
  greenLight: 0x2ecc71,
};

describe('Game Scene', () => {
  let scene;

  beforeEach(() => {
    scene = new Game();
    scene.create();
  });

  describe('create - initial state', () => {
    it('debe inicializar el estado del juego', () => {
      expect(scene.isRunning).toBe(false);
      expect(scene.isPaused).toBe(false);
      expect(scene.currentIndex).toBe(0);
      expect(scene.drawnCards).toEqual([]);
      expect(scene.deck).toEqual([]);
    });

    it('debe crear el título', () => {
      expect(scene.title.text).toBe('Lotería Mexicana');
    });

    it('debe crear la carta', () => {
      expect(scene.card).toBeDefined();
    });

    it('debe crear el nombre de la carta', () => {
      expect(scene.cardName).toBeDefined();
    });

    it('debe crear botones', () => {
      expect(scene.startBg).toBeDefined();
      expect(scene.pauseBg).toBeDefined();
      expect(scene.finishBg).toBeDefined();
    });

    it('debe ocultar botones pause y finish por defecto', () => {
      expect(scene.pauseBg._visible).toBe(false);
      expect(scene.finishBg._visible).toBe(false);
    });

    it('debe crear el panel de historial', () => {
      expect(scene.panelBg).toBeDefined();
      expect(scene.historyContainer).toBeDefined();
    });

    it('debe configurar layout 60/40', () => {
      expect(scene.gameAreaW).toBe(480);
      expect(scene.panelW).toBe(320);
      expect(scene.gameCx).toBe(240);
    });

    it('debe crear barra de progreso', () => {
      expect(scene.progressBarBg).toBeDefined();
      expect(scene.progressBarFill).toBeDefined();
      expect(scene.counterText).toBeDefined();
    });

    it('debe crear borde y sombra de carta', () => {
      expect(scene.cardBorder).toBeDefined();
      expect(scene.cardShadow).toBeDefined();
    });

    it('debe crear título del panel', () => {
      expect(scene.panelTitle).toBeDefined();
      expect(scene.panelTitle.text).toBe('Historial');
    });

    it('debe crear separador', () => {
      expect(scene.separator).toBeDefined();
    });

    it('debe crear línea decorativa bajo el título', () => {
      expect(scene.titleLine).toBeDefined();
    });

    it('debe inicializar cardInterval en 2', () => {
      expect(scene.cardInterval).toBe(2);
    });

    it('debe crear 4 botones de intervalo', () => {
      expect(scene.intervalBtns).toHaveLength(4);
      expect(scene.intervalBtnTexts).toHaveLength(4);
    });

    it('debe crear CardLoader', () => {
      expect(scene.cardLoader).toBeDefined();
    });

    it('debe crear loadingText oculto', () => {
      expect(scene.loadingText).toBeDefined();
      expect(scene.loadingText._visible).toBe(false);
    });
  });

  describe('shuffleDeck', () => {
    it('debe retornar un array del mismo tamaño', () => {
      const deck = [...CARDS];
      const shuffled = scene.shuffleDeck(deck);
      expect(shuffled).toHaveLength(54);
    });

    it('debe contener todas las cartas originales', () => {
      const deck = [...CARDS];
      const shuffled = scene.shuffleDeck(deck);
      const ids = shuffled.map((c) => c.id).sort();
      const originalIds = CARDS.map((c) => c.id).sort();
      expect(ids).toEqual(originalIds);
    });

    it('debe contener todas las cartas del deck barajado', () => {
      scene.startGame();
      const gameIds = scene.deck.map((c) => c.id).sort();
      const originalIds = CARDS.map((c) => c.id).sort();
      expect(gameIds).toEqual(originalIds);
      expect(scene.deck).not.toBe(CARDS);
    });

    it('debe funcionar con deck de un solo elemento', () => {
      const deck = [CARDS[0]];
      const shuffled = scene.shuffleDeck(deck);
      expect(shuffled).toHaveLength(1);
      expect(shuffled[0].id).toBe('gallo');
    });
  });

  describe('speak', () => {
    it('debe usar speechSynthesis si está disponible', () => {
      scene.speak('El Gallo');
      expect(globalThis.speechSynthesis.cancel).toHaveBeenCalled();
      expect(globalThis.speechSynthesis.speak).toHaveBeenCalled();
    });

    it('debe configurar idioma es-MX', () => {
      globalThis.speechSynthesis.speak.mockClear();
      scene.speak('El Gallo');
      const utter = globalThis.speechSynthesis.speak.mock.calls[0][0];
      expect(utter.lang).toBe('es-MX');
      expect(utter.rate).toBe(0.9);
    });

    it('debe seleccionar voz es-MX si está disponible', () => {
      globalThis.speechSynthesis.speak.mockClear();
      scene.speak('El Gallo');
      const utter = globalThis.speechSynthesis.speak.mock.calls[0][0];
      expect(utter.voice.lang).toBe('es-MX');
    });

    it('debe obtener las voces con getVoices', () => {
      scene.speak('El Gallo');
      expect(globalThis.speechSynthesis.getVoices).toHaveBeenCalled();
    });

    it('no debe fallar si speechSynthesis no existe', () => {
      const original = globalThis.speechSynthesis;
      delete globalThis.speechSynthesis;
      expect(() => scene.speak('test')).not.toThrow();
      globalThis.speechSynthesis = original;
    });
  });

  describe('shuffleCard', () => {
    it('debe mostrar un nombre de carta válido', () => {
      scene.shuffleCard();
      const text = scene.cardName.text;
      const validNames = CARDS.map((c) => c.name);
      expect(validNames).toContain(text);
    });

    it('no debe llamar a speak', () => {
      const spy = vi.spyOn(scene, 'speak');
      scene.shuffleCard();
      expect(spy).not.toHaveBeenCalled();
    });

    it('debe usar textura fallback', () => {
      scene.shuffleCard();
      expect(scene.card._textureKey).toBe('card');
    });
  });

  describe('showCurrentCard', () => {
    it('debe mostrar la carta del deck en currentIndex', () => {
      scene.deck = [...CARDS];
      scene.currentIndex = 0;
      scene.showCurrentCard();
      expect(scene.cardName.text).toBe(CARDS[0].name);
    });

    it('debe llamar speak con el nombre de la carta', () => {
      scene.deck = [...CARDS];
      scene.currentIndex = 5;
      const spy = vi.spyOn(scene, 'speak');
      scene.showCurrentCard();
      expect(spy).toHaveBeenCalledWith(CARDS[5].name);
    });

    it('no debe fallar si currentIndex fuera de rango', () => {
      scene.deck = [];
      scene.currentIndex = 0;
      expect(() => scene.showCurrentCard()).not.toThrow();
    });

    it('no debe fallar si currentIndex es igual al largo del deck', () => {
      scene.deck = [CARDS[0]];
      scene.currentIndex = 1;
      expect(() => scene.showCurrentCard()).not.toThrow();
    });

    it('debe cargar textura SVG si no existe en cache', () => {
      scene.textures.exists = vi.fn(() => false);
      scene.deck = [...CARDS];
      scene.currentIndex = 0;
      scene.showCurrentCard();
      expect(scene.card._textureKey).toBe('card');
    });

    it('debe cambiar textura cuando carga SVG completa', () => {
      scene.textures.exists = vi.fn(() => false);
      scene.deck = [...CARDS];
      scene.currentIndex = 0;
      vi.spyOn(scene.cardLoader, 'loadCard');
      scene.showCurrentCard();

      const loadCall = scene.cardLoader.loadCard.mock.calls[0];
      const callback = loadCall[1];
      callback('card_gallo');

      expect(scene.card._textureKey).toBe('card_gallo');
      expect(scene.loadingText._visible).toBe(false);
    });

    it('no debe cambiar textura si el índice cambió durante la carga', () => {
      scene.textures.exists = vi.fn(() => false);
      scene.deck = [...CARDS];
      scene.currentIndex = 0;
      vi.spyOn(scene.cardLoader, 'loadCard');
      scene.showCurrentCard();

      scene.currentIndex = 5;
      const loadCall = scene.cardLoader.loadCard.mock.calls[0];
      const callback = loadCall[1];
      callback('card_gallo');

      expect(scene.card._textureKey).toBe('card');
    });

    it('debe usar textura cacheada si existe', () => {
      scene.textures.exists = vi.fn(() => true);
      scene.deck = [...CARDS];
      scene.currentIndex = 0;
      vi.spyOn(scene.cardLoader, 'loadCard');
      scene.showCurrentCard();
      expect(scene.cardLoader.loadCard).not.toHaveBeenCalled();
      expect(scene.card._textureKey).toBe('card_gallo');
    });

    it('debe mostrar loadingText cuando SVG no está cargado', () => {
      scene.textures.exists = vi.fn(() => false);
      scene.deck = [...CARDS];
      scene.currentIndex = 0;
      scene.showCurrentCard();
      expect(scene.loadingText._visible).toBe(true);
      expect(scene.card._textureKey).toBe('card');
    });
  });

  describe('animateCardChange', () => {
    it('no debe fallar al ejecutar', () => {
      expect(() => scene.animateCardChange()).not.toThrow();
    });
  });

  describe('updateProgress', () => {
    it('debe mostrar texto vacío cuando no está corriendo', () => {
      scene.isRunning = false;
      scene.updateProgress();
      expect(scene.counterText.text).toBe('');
    });

    it('debe mostrar progreso cuando está corriendo', () => {
      scene.isRunning = true;
      scene.currentIndex = 27;
      scene.updateProgress();
      expect(scene.counterText.text).toBe('27 / 54');
    });
  });

  describe('startGame', () => {
    it('debe barajar el deck y establecer isRunning', () => {
      scene.startGame();
      expect(scene.isRunning).toBe(true);
      expect(scene.deck).toHaveLength(54);
      expect(scene.currentIndex).toBe(0);
    });

    it('debe deshabilitar el botón comenzar', () => {
      scene.startGame();
      expect(scene.startBg._interactive).toBe(false);
    });

    it('debe mostrar botones pause y finish', () => {
      scene.startGame();
      expect(scene.pauseBg._visible).toBe(true);
      expect(scene.finishBg._visible).toBe(true);
    });

    it('debe limpiar el historial', () => {
      scene.historyContainer.add({ destroy: vi.fn() });
      scene.startGame();
      expect(scene.historyContainer.list).toHaveLength(0);
    });

    it('debe resetear drawnCards', () => {
      scene.drawnCards = [CARDS[0], CARDS[1]];
      scene.startGame();
      expect(scene.drawnCards).toEqual([]);
    });
  });

  describe('shuffleAnimation', () => {
    it('debe ejecutar callback después de la animación', () => {
      const callback = vi.fn();
      scene.shuffleAnimation(callback);
      for (let i = 0; i < 20; i++) {
        scene.time._events.forEach((e) => {
          if (e._config && e._config.callback) {
            e._config.callback();
          }
        });
      }
      expect(callback).toHaveBeenCalled();
    });

    it('debe cambiar el nombre de la carta durante la animación', () => {
      scene.shuffleAnimation(() => {});
      const lastEvent = scene.time._events[scene.time._events.length - 1];
      lastEvent._config.callback();
      const validNames = CARDS.map((c) => c.name);
      expect(validNames).toContain(scene.cardName.text);
    });
  });

  describe('togglePause', () => {
    it('no debe pausar si el juego no está corriendo', () => {
      scene.isRunning = false;
      scene.togglePause();
      expect(scene.isPaused).toBe(false);
    });

    it('debe pausar el juego', () => {
      scene.startGame();
      scene.timer = { paused: false, remove: vi.fn() };
      scene.togglePause();
      expect(scene.isPaused).toBe(true);
      expect(scene.pauseText.text).toBe('Reanudar');
    });

    it('debe reanudar el juego', () => {
      scene.startGame();
      scene.timer = { paused: true, remove: vi.fn() };
      scene.isPaused = true;
      scene.togglePause();
      expect(scene.isPaused).toBe(false);
      expect(scene.pauseText.text).toBe('Detener');
    });

    it('debe cambiar color del botón al pausar', () => {
      scene.startGame();
      scene.timer = { paused: false, remove: vi.fn() };
      scene.togglePause();
      expect(scene.pauseBg._fillStyle).toBe(COLORS.greenLight);
    });

    it('debe cambiar color del botón al reanudar', () => {
      scene.startGame();
      scene.timer = { paused: true, remove: vi.fn() };
      scene.isPaused = true;
      scene.togglePause();
      expect(scene.pauseBg._fillStyle).toBe(COLORS.gold);
    });
  });

  describe('selectInterval', () => {
    it('debe actualizar cardInterval al seleccionar', () => {
      scene.selectInterval(5);
      expect(scene.cardInterval).toBe(5);
    });

    it('debe seleccionar 1 como intervalo', () => {
      scene.selectInterval(1);
      expect(scene.cardInterval).toBe(1);
    });

    it('debe actualizar el timer si el juego está corriendo', () => {
      scene.isRunning = true;
      scene.timer = { delay: 2000, remove: vi.fn() };
      scene.selectInterval(3);
      expect(scene.timer.delay).toBe(3000);
    });

    it('no debe actualizar timer si el juego no está corriendo', () => {
      scene.isRunning = false;
      scene.timer = { delay: 2000, remove: vi.fn() };
      scene.selectInterval(5);
      expect(scene.timer.delay).toBe(2000);
    });

    it('no debe fallar si timer es null', () => {
      scene.isRunning = true;
      scene.timer = null;
      expect(() => scene.selectInterval(1)).not.toThrow();
    });

    it('debe responder a pointerdown en botones de intervalo', () => {
      const firstBtn = scene.intervalBtns[0];
      const spy = vi.spyOn(scene, 'selectInterval');
      firstBtn.emit('pointerdown');
      expect(spy).toHaveBeenCalledWith(1);
    });
  });

  describe('nextCard', () => {
    it('debe avanzar el índice y agregar al historial', () => {
      scene.deck = [...CARDS];
      scene.currentIndex = 0;
      scene.drawnCards = [];
      scene.nextCard();
      expect(scene.currentIndex).toBe(1);
      expect(scene.drawnCards).toHaveLength(1);
    });

    it('debe agregar la carta correcta al historial', () => {
      scene.deck = [...CARDS];
      scene.currentIndex = 3;
      scene.drawnCards = [];
      scene.nextCard();
      expect(scene.drawnCards[0].id).toBe(CARDS[3].id);
    });

    it('debe llamar showCurrentCard si no es la última carta', () => {
      scene.deck = [...CARDS];
      scene.currentIndex = 0;
      scene.drawnCards = [];
      const spy = vi.spyOn(scene, 'showCurrentCard');
      scene.nextCard();
      expect(spy).toHaveBeenCalled();
    });

    it('debe llamar stopGame al llegar al final del deck', () => {
      scene.deck = [CARDS[0]];
      scene.currentIndex = 0;
      scene.drawnCards = [];
      scene.nextCard();
      expect(scene.isRunning).toBe(false);
    });

    it('no debe fallar si el deck está vacío', () => {
      scene.deck = [];
      scene.currentIndex = 0;
      scene.drawnCards = [];
      expect(() => scene.nextCard()).not.toThrow();
    });

    it('debe llamar stopGame si currentIndex >= deck.length', () => {
      scene.deck = [CARDS[0]];
      scene.currentIndex = 1;
      scene.drawnCards = [];
      expect(() => scene.nextCard()).not.toThrow();
      expect(scene.isRunning).toBe(false);
    });
  });

  describe('stopGame', () => {
    it('debe detener el juego y limpiar timer', () => {
      scene.startGame();
      const mockRemove = vi.fn();
      scene.timer = { paused: false, remove: mockRemove };
      scene.stopGame();
      expect(scene.isRunning).toBe(false);
      expect(scene.isPaused).toBe(false);
      expect(mockRemove).toHaveBeenCalled();
      expect(scene.timer).toBeNull();
    });

    it('debe ocultar botones pause y finish', () => {
      scene.startGame();
      scene.stopGame();
      expect(scene.pauseBg._visible).toBe(false);
      expect(scene.finishBg._visible).toBe(false);
    });

    it('debe re-habilitar el botón comenzar', () => {
      scene.startGame();
      scene.stopGame();
      expect(scene.startBg._interactive).toBe(true);
    });

    it('no debe fallar si timer es null', () => {
      scene.timer = null;
      expect(() => scene.stopGame()).not.toThrow();
    });

    it('debe reiniciar la escena', () => {
      scene.stopGame();
      expect(scene.scene.restart).toHaveBeenCalled();
    });
  });

  describe('addHistoryItem', () => {
    it('debe agregar un item al historial', () => {
      scene.addHistoryItem(CARDS[0], 1);
      expect(scene.historyContainer.list).toHaveLength(1);
    });

    it('debe agregar múltiples items', () => {
      scene.addHistoryItem(CARDS[0], 1);
      scene.addHistoryItem(CARDS[1], 2);
      scene.addHistoryItem(CARDS[2], 3);
      expect(scene.historyContainer.list).toHaveLength(3);
    });

    it('debe configurar el texto con índice', () => {
      scene.addHistoryItem(CARDS[5], 6);
      const label = scene.historyContainer.list[0];
      expect(label.text).toContain('6.');
      expect(label.text).toContain(CARDS[5].name);
    });

    it('debe recortar texto si es muy largo', () => {
      const longCard = { id: 'test', name: 'A'.repeat(100), image: 'card' };
      scene.addHistoryItem(longCard, 1);
      const label = scene.historyContainer.list[0];
      expect(label).toBeDefined();
    });

    it('debe recortar con setCrop si excede ancho máximo', () => {
      const longName = 'X'.repeat(200);
      const longCard = { id: 'long', name: longName, image: 'card' };
      scene.panelW = 200;
      scene.addHistoryItem(longCard, 1);
      const label = scene.historyContainer.list[0];
      const panelContentW = scene.panelW - 40;
      const labelMaxW = panelContentW - 20;
      expect(label.width).toBeGreaterThan(labelMaxW);
    });
  });

  describe('clampScroll', () => {
    it('debe contener el scroll dentro de los límites', () => {
      scene.historyContainer.y = -9999;
      scene.clampScroll();
      expect(scene.historyContainer.y).toBeGreaterThanOrEqual(scene.panelY + scene.panelPadding + 20 - 1000);
    });

    it('debe posicionar al inicio si hay pocos items', () => {
      scene.addHistoryItem(CARDS[0], 1);
      scene.clampScroll();
      expect(scene.historyContainer.y).toBe(scene.panelY + scene.panelPadding + 20);
    });

    it('debe limitar scroll hacia abajo', () => {
      scene.historyContainer.y = 99999;
      scene.clampScroll();
      expect(scene.historyContainer.y).toBeLessThanOrEqual(scene.panelY + scene.panelPadding + 20);
    });
  });

  describe('updatePanelMask', () => {
    it('debe actualizar la máscara del panel', () => {
      expect(() => scene.updatePanelMask()).not.toThrow();
    });
  });

  describe('relayoutHistory', () => {
    it('debe reposicionar items del historial', () => {
      scene.addHistoryItem(CARDS[0], 1);
      scene.addHistoryItem(CARDS[1], 2);
      scene.relayoutHistory();
      expect(scene.historyContainer.list[0].x).toBeDefined();
    });

    it('relayoutHistory no debe fallar con children null', () => {
      scene.historyContainer.list = [null, null, { setPosition: vi.fn() }];
      expect(() => scene.relayoutHistory()).not.toThrow();
    });
  });

  describe('toggleFullscreen', () => {
    it('debe alternar fullscreen', () => {
      expect(scene.scale.isFullscreen).toBe(false);
      scene.toggleFullscreen();
      expect(scene.scale.isFullscreen).toBe(true);
      scene.toggleFullscreen();
      expect(scene.scale.isFullscreen).toBe(false);
    });
  });

  describe('resize handler', () => {
    it('debe actualizar posiciones al redimensionar', () => {
      const resizeHandler = scene.scale._listeners['resize'][0];
      resizeHandler({ width: 1200, height: 800 });
      expect(scene.gameAreaW).toBe(720);
      expect(scene.panelW).toBe(480);
    });

    it('debe reposicionar loadingText al redimensionar', () => {
      const resizeHandler = scene.scale._listeners['resize'][0];
      resizeHandler({ width: 1200, height: 800 });
      expect(scene.loadingText.x).toBe(scene.gameCx);
    });
  });

  describe('event handlers', () => {
    it('pointerover startBg debe cambiar color', () => {
      scene.startBg.emit('pointerover');
      expect(scene.startBg._fillStyle).toBe(COLORS.accentDark);
    });

    it('pointerout startBg debe restaurar color', () => {
      scene.startBg.emit('pointerout');
      expect(scene.startBg._fillStyle).toBe(COLORS.accent);
    });

    it('pointerover startBg no debe cambiar si isRunning', () => {
      scene.isRunning = true;
      const before = scene.startBg._fillStyle;
      scene.startBg.emit('pointerover');
      expect(scene.startBg._fillStyle).toBe(before);
    });

    it('pointerout startBg no debe cambiar si isRunning', () => {
      scene.isRunning = true;
      const before = scene.startBg._fillStyle;
      scene.startBg.emit('pointerout');
      expect(scene.startBg._fillStyle).toBe(before);
    });

    it('pointerdown startBg debe iniciar juego', () => {
      scene.startBg.emit('pointerdown');
      expect(scene.isRunning).toBe(true);
    });

    it('pointerdown startBg no debe iniciar si ya corriendo', () => {
      scene.isRunning = true;
      scene.startBg.emit('pointerdown');
      expect(scene.deck).toHaveLength(0);
    });

    it('pointerover pauseBg debe cambiar color cuando no paused', () => {
      scene.isRunning = true;
      scene.isPaused = false;
      scene.pauseBg.emit('pointerover');
      expect(scene.pauseBg._fillStyle).toBe(COLORS.goldDark);
    });

    it('pointerover pauseBg debe cambiar color cuando paused', () => {
      scene.isRunning = true;
      scene.isPaused = true;
      scene.pauseBg.emit('pointerover');
      expect(scene.pauseBg._fillStyle).toBe(COLORS.green);
    });

    it('pointerout pauseBg debe restaurar color cuando no paused', () => {
      scene.isRunning = true;
      scene.isPaused = false;
      scene.pauseBg.emit('pointerout');
      expect(scene.pauseBg._fillStyle).toBe(COLORS.gold);
    });

    it('pointerout pauseBg debe restaurar color cuando paused', () => {
      scene.isRunning = true;
      scene.isPaused = true;
      scene.pauseBg.emit('pointerout');
      expect(scene.pauseBg._fillStyle).toBe(COLORS.greenLight);
    });

    it('pointerdown pauseBg debe togglePause', () => {
      scene.startGame();
      scene.timer = { paused: false, remove: vi.fn() };
      scene.pauseBg.emit('pointerdown');
      expect(scene.isPaused).toBe(true);
    });

    it('pointerover finishBg debe cambiar color', () => {
      scene.isRunning = true;
      scene.finishBg.emit('pointerover');
      expect(scene.finishBg._fillStyle).toBe(COLORS.purpleDark);
    });

    it('pointerover finishBg no debe cambiar si no isRunning', () => {
      scene.isRunning = false;
      const before = scene.finishBg._fillStyle;
      scene.finishBg.emit('pointerover');
      expect(scene.finishBg._fillStyle).toBe(before);
    });

    it('pointerout finishBg debe restaurar color', () => {
      scene.isRunning = true;
      scene.finishBg.emit('pointerout');
      expect(scene.finishBg._fillStyle).toBe(COLORS.purple);
    });

    it('pointerout finishBg no debe cambiar si no isRunning', () => {
      scene.isRunning = false;
      const before = scene.finishBg._fillStyle;
      scene.finishBg.emit('pointerout');
      expect(scene.finishBg._fillStyle).toBe(before);
    });

    it('pointerdown finishBg debe stopGame', () => {
      scene.startGame();
      scene.finishBg.emit('pointerdown');
      expect(scene.isRunning).toBe(false);
    });

    it('wheel sobre panel debe hacer scroll', () => {
      for (let i = 0; i < 20; i++) scene.addHistoryItem(CARDS[i], i + 1);
      scene.historyContainer.y = scene.panelY + scene.panelPadding + 20;
      const initialY = scene.historyContainer.y;
      const wheelHandler = scene.input._listeners['wheel'][0];
      wheelHandler({ x: scene.panelX }, [], 0, 100);
      expect(scene.historyContainer.y).toBeLessThan(initialY);
    });

    it('wheel fuera del panel no debe hacer scroll', () => {
      const initialY = scene.historyContainer.y;
      const wheelHandler = scene.input._listeners['wheel'][0];
      wheelHandler({ x: 0 }, [], 0, 100);
      expect(scene.historyContainer.y).toBe(initialY);
    });

    it('pointerdown en panel debe iniciar drag', () => {
      const pointerdownHandler = scene.input._listeners['pointerdown'][0];
      pointerdownHandler({ x: scene.panelX, y: 100 });
      expect(scene.isDragging).toBe(true);
    });

    it('pointerdown fuera del panel no debe iniciar drag', () => {
      const pointerdownHandler = scene.input._listeners['pointerdown'][0];
      pointerdownHandler({ x: 0, y: 100 });
      expect(scene.isDragging).toBe(false);
    });

    it('pointermove con drag debe actualizar scroll', () => {
      for (let i = 0; i < 20; i++) scene.addHistoryItem(CARDS[i], i + 1);
      scene.isDragging = true;
      scene.dragStartY = 100;
      scene.containerStartY = scene.panelY + scene.panelPadding + 20;
      const pointermoveHandler = scene.input._listeners['pointermove'][0];
      pointermoveHandler({ y: 50, isDown: true });
      expect(scene.historyContainer.y).toBe(scene.containerStartY - 50);
    });

    it('pointermove sin drag no debe hacer nada', () => {
      scene.isDragging = false;
      const initialY = scene.historyContainer.y;
      const pointermoveHandler = scene.input._listeners['pointermove'][0];
      pointermoveHandler({ y: 150, isDown: true });
      expect(scene.historyContainer.y).toBe(initialY);
    });

    it('pointermove sin isDown no debe hacer nada', () => {
      scene.isDragging = true;
      const initialY = scene.historyContainer.y;
      const pointermoveHandler = scene.input._listeners['pointermove'][0];
      pointermoveHandler({ y: 150, isDown: false });
      expect(scene.historyContainer.y).toBe(initialY);
    });

    it('pointerup debe detener drag', () => {
      scene.isDragging = true;
      const pointerupHandler = scene.input._listeners['pointerup'][0];
      pointerupHandler();
      expect(scene.isDragging).toBe(false);
    });

    it('keyboard F debe toggle fullscreen', () => {
      const keyHandler = scene.input.keyboard._listeners['keydown-F'][0];
      keyHandler();
      expect(scene.scale.isFullscreen).toBe(true);
    });

    it('doble tap debe toggle fullscreen', () => {
      const doubleTapHandler = scene.input._listeners['pointerdown'][1];
      doubleTapHandler();
      expect(scene.lastTapTime).toBeGreaterThan(0);
      doubleTapHandler();
      expect(scene.scale.isFullscreen).toBe(true);
    });

    it('shuffleAnimation callback debe iniciar timer del juego', () => {
      scene.startGame();
      const events = scene.time._events;
      const shuffleEvent = events.find(e => e._config && e._config.delay === 100);
      for (let i = 0; i < 20; i++) {
        shuffleEvent._config.callback();
      }
      expect(scene.currentIndex).toBe(0);
      const gameEvent = events.find(e => e._config && e._config.delay === scene.cardInterval * 1000);
      expect(gameEvent).toBeDefined();
    });
  });
});
