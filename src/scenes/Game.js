import { CARDS } from '../cards.js';
import { CardLoader } from '../cardLoader.js';

const AudioCtx = window.AudioContext || window.webkitAudioContext;

const COLORS = {
  bgDark: 0x1a0a2e,
  bgPanel: 0x12071f,
  accent: 0xe74c3c,
  accentDark: 0xc0392b,
  gold: 0xf39c12,
  goldText: '#f39c12',
  goldDark: 0xd68910,
  purple: 0x8e44ad,
  purpleDark: 0x7d3c98,
  cream: 0xf5e6ca,
  textLight: '#f5e6ca',
  textWhite: '#ffffff',
  textMuted: '#b8a9c9',
  green: 0x27ae60,
  greenLight: 0x2ecc71,
  separator: 0x4a2d6e,
};

export default class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.beepCtx = null;

    const w = window.innerWidth;
    const h = window.innerHeight;
    const cy = h / 2;

    this.gameAreaW = w * 0.6;
    this.panelW = w * 0.4;
    this.gameCx = this.gameAreaW / 2;

    const titleSize = Math.min(96, Math.floor(this.gameAreaW / 4));
    const btnTextSize = Math.min(20, Math.floor(this.gameAreaW / 32));
    const btnWidth = Math.min(180, Math.floor(this.gameAreaW / 3.5));
    const btnHeight = Math.min(48, Math.floor(this.gameAreaW / 14));
    const spacing = btnWidth + 16;
    const counterSize = Math.min(16, Math.floor(this.gameAreaW / 30));

    this.deck = [];
    this.currentIndex = 0;
    this.drawnCards = [];
    this.isRunning = false;
    this.isPaused = false;
    this.timer = null;
    this.cardInterval = this.registry.get('cardInterval') || 2;
    this.intervalBtns = [];
    this.intervalBtnTexts = [];
    this.cardLoader = new CardLoader(this);
    this.loadingCard = false;

    this.drawDefaultCard();

    // Fondo decorativo con gradiente
    this.bgGraphics = this.add.graphics();
    this.drawBackground(w, h);

    // Título con estilo festivo
    this.title = this.add.text(this.gameCx, 35, 'Lotería Mexicana', {
      font: `bold ${titleSize}px Georgia, "Times New Roman", serif`,
      fill: COLORS.textLight,
      stroke: '#000000',
      strokeThickness: 2,
      shadow: { offsetX: 2, offsetY: 2, color: '#000', blur: 4, fill: true },
    });
    this.title.setOrigin(0.5);

    // Línea decorativa bajo el título
    this.titleLine = this.add.graphics();
    this.titleLine.lineStyle(2, COLORS.separator, 0.8);
    this.titleLine.lineBetween(this.gameCx - 100, 55, this.gameCx + 100, 55);

    // Contador de progreso
    this.counterText = this.add.text(this.gameCx, 68, '', {
      font: `${counterSize}px Arial, sans-serif`,
      fill: COLORS.textMuted,
    });
    this.counterText.setOrigin(0.5);

    // Barra de progreso
    this.progressBarBg = this.add.rectangle(this.gameCx, 88, this.gameAreaW * 0.5, 8, 0x2d1b4e);
    this.progressBarBg.setStrokeStyle(1, COLORS.separator);
    this.progressBarFill = this.add.rectangle(
      this.gameCx - this.gameAreaW * 0.25, 88, 0, 6, COLORS.gold
    );
    this.progressBarFill.setOrigin(0, 0.5);
    this.updateProgress();

    // Carta de lotería con borde decorativo
    this.cardBorder = this.add.rectangle(this.gameCx, cy - 30, 160, 240);
    this.cardBorder.setFillStyle(0x000000, 0);
    this.cardBorder.setStrokeStyle(3, COLORS.gold, 0.6);

    this.card = this.add.image(this.gameCx, cy - 30, 'loteria_default');
    this.card.setScale(2/3);

    // Sombra de la carta
    this.cardShadow = this.add.rectangle(this.gameCx + 4, cy - 26, 150, 230, 0x000000, 0.3);
    this.cardShadow.setDepth(-1);

    // Indicador de carga para SVG
    this.loadingText = this.add.text(this.gameCx, cy + 130, 'Cargando...', {
      font: `${Math.min(11, Math.floor(this.gameAreaW / 40))}px Arial, sans-serif`,
      fill: COLORS.goldText,
    });
    this.loadingText.setOrigin(0.5);
    this.loadingText.setVisible(false);

    // Selector de intervalo
    const intervalValues = [1, 2, 3, 5];
    const intervalBtnW = 50;
    const intervalBtnH = 24;
    const intervalGap = 8;
    const totalIntervalW = intervalValues.length * intervalBtnW + (intervalValues.length - 1) * intervalGap;
    const intervalStartX = this.gameCx - totalIntervalW / 2 + intervalBtnW / 2;
    const btnTextSizeInterval = Math.min(13, Math.floor(this.gameAreaW / 36));

    intervalValues.forEach((value, i) => {
      const x = intervalStartX + i * (intervalBtnW + intervalGap);
      const y = cy + 125;

      const bg = this.add.rectangle(x, y, intervalBtnW, intervalBtnH, value === this.cardInterval ? COLORS.gold : COLORS.separator);
      bg.setStrokeStyle(1, COLORS.gold, 0.3);
      bg.setInteractive({ useHandCursor: true });

      const text = this.add.text(x, y, `${value}s`, {
        font: `bold ${btnTextSizeInterval}px Arial, sans-serif`,
        fill: COLORS.textWhite,
      });
      text.setOrigin(0.5);

      bg.on('pointerdown', () => {
        this.selectInterval(value);
      });

      this.intervalBtns.push(bg);
      this.intervalBtnTexts.push(text);
    });

    this.selectInterval(this.cardInterval);

    // Botón "Comenzar"
    this.startBg = this.add.rectangle(this.gameCx, cy + 170, btnWidth, btnHeight, COLORS.accent);
    this.startBg.setStrokeStyle(2, COLORS.accentDark);
    this.startBg.setInteractive({ useHandCursor: true });

    this.startText = this.add.text(this.gameCx, cy + 170, 'Comenzar', {
      font: `bold ${btnTextSize}px Arial, sans-serif`,
      fill: COLORS.textWhite,
    });
    this.startText.setOrigin(0.5);

    this.startBg.on('pointerover', () => {
      if (!this.isRunning) {
        this.startBg.setFillStyle(COLORS.accentDark);
        this.tweens.add({ targets: this.startBg, scaleX: 1.05, scaleY: 1.05, duration: 100 });
      }
    });
    this.startBg.on('pointerout', () => {
      if (!this.isRunning) {
        this.startBg.setFillStyle(COLORS.accent);
        this.tweens.add({ targets: this.startBg, scaleX: 1, scaleY: 1, duration: 100 });
      }
    });
    this.startBg.on('pointerdown', () => {
      if (!this.isRunning) this.startGame();
    });

    // Botón "Detener/Reanudar"
    this.pauseBg = this.add.rectangle(this.gameCx - spacing / 2, cy + 230, btnWidth, btnHeight, COLORS.gold);
    this.pauseBg.setStrokeStyle(2, COLORS.goldDark);
    this.pauseBg.setVisible(false).disableInteractive();

    this.pauseText = this.add.text(this.gameCx - spacing / 2, cy + 230, 'Detener', {
      font: `bold ${btnTextSize}px Arial, sans-serif`,
      fill: COLORS.textWhite,
    });
    this.pauseText.setOrigin(0.5);
    this.pauseText.setVisible(false);

    this.pauseBg.on('pointerover', () => {
      if (this.isRunning) {
        this.pauseBg.setFillStyle(this.isPaused ? COLORS.green : COLORS.goldDark);
      }
    });
    this.pauseBg.on('pointerout', () => {
      if (this.isRunning) {
        this.pauseBg.setFillStyle(this.isPaused ? COLORS.greenLight : COLORS.gold);
      }
    });
    this.pauseBg.on('pointerdown', () => {
      this.togglePause();
    });

    // Botón "Finalizar"
    this.finishBg = this.add.rectangle(this.gameCx + spacing / 2, cy + 230, btnWidth, btnHeight, COLORS.purple);
    this.finishBg.setStrokeStyle(2, COLORS.purpleDark);
    this.finishBg.setVisible(false).disableInteractive();

    this.finishText = this.add.text(this.gameCx + spacing / 2, cy + 230, 'Finalizar', {
      font: `bold ${btnTextSize}px Arial, sans-serif`,
      fill: COLORS.textWhite,
    });
    this.finishText.setOrigin(0.5);
    this.finishText.setVisible(false);

    this.finishBg.on('pointerover', () => {
      if (this.isRunning) this.finishBg.setFillStyle(COLORS.purpleDark);
    });
    this.finishBg.on('pointerout', () => {
      if (this.isRunning) this.finishBg.setFillStyle(COLORS.purple);
    });
    this.finishBg.on('pointerdown', () => {
      this.stopGame();
    });

    // Panel del historial
    this.itemHeight = 28;
    this.panelPadding = 20;
    this.panelX = this.gameAreaW + this.panelW / 2;
    this.panelY = 40;
    this.panelH = h - 80;

    this.panelBg = this.add.rectangle(this.panelX, this.panelY + this.panelH / 2, this.panelW - 20, this.panelH, COLORS.bgPanel, 0.85);
    this.panelBg.setStrokeStyle(2, COLORS.separator, 0.5);
    this.panelBg.setDepth(1);

    // Título del panel
    this.panelTitle = this.add.text(this.panelX, this.panelY + 15, 'Historial', {
      font: `bold ${Math.min(16, Math.floor(this.panelW / 20))}px Georgia, serif`,
      fill: COLORS.textLight,
    });
    this.panelTitle.setOrigin(0.5);
    this.panelTitle.setDepth(2);

    this.historyContainer = this.add.container(this.panelX, this.panelY + this.panelPadding + 20);
    this.historyContainer.setDepth(3);

    this.maskGraphics = this.add.graphics();
    this.maskGraphics.setDepth(-100);
    this.updatePanelMask();
    this.historyContainer.setMask(this.maskGraphics.createGeometryMask());

    // Scroll
    this.input.on('wheel', (pointer, _gameObjects, _dx, dy) => {
      if (pointer.x >= this.panelX - this.panelW / 2 && pointer.x <= this.panelX + this.panelW / 2) {
        this.historyContainer.y -= dy * 0.5;
        this.clampScroll();
      }
    });

    this.dragStartY = 0;
    this.containerStartY = 0;
    this.isDragging = false;

    this.input.on('pointerdown', (pointer) => {
      if (pointer.x >= this.panelX - this.panelW / 2 && pointer.x <= this.panelX + this.panelW / 2) {
        this.dragStartY = pointer.y;
        this.containerStartY = this.historyContainer.y;
        this.isDragging = true;
      }
    });

    this.input.on('pointermove', (pointer) => {
      if (this.isDragging && pointer.isDown) {
        const delta = pointer.y - this.dragStartY;
        this.historyContainer.y = this.containerStartY + delta;
        this.clampScroll();
      }
    });

    this.input.on('pointerup', () => {
      this.isDragging = false;
    });

    // Separador
    this.separator = this.add.rectangle(this.gameAreaW, h / 2, 2, h, COLORS.separator, 0.4);

    // Mostrar primera carta con animación
    this.shuffleCard();
    this.tweens.add({
      targets: this.card,
      scaleX: { from: 0.3, to: 2/3 },
      scaleY: { from: 0.3, to: 2/3 },
      alpha: { from: 0, to: 1 },
      duration: 400,
      ease: 'Back.easeOut',
    });

    // Resize handler
    this.scale.on('resize', (gameSize) => this.handleResize(gameSize));

    // Fullscreen
    this.input.keyboard.on('keydown-F', () => this.toggleFullscreen());
    this.lastTapTime = 0;
    this.input.on('pointerdown', () => {
      const now = Date.now();
      if (now - this.lastTapTime < 300) this.toggleFullscreen();
      this.lastTapTime = now;
    });
  }

  drawDefaultCard() {
    if (this.textures.exists('loteria_default')) return;
    const w = 240;
    const h = 360;
    const g = this.add.graphics();
    g.fillStyle(0x8B0000, 1);
    g.fillRect(0, 0, w, h);
    g.lineStyle(4, 0xDAA520, 1);
    g.strokeRect(2, 2, w - 4, h - 4);
    g.lineStyle(2, 0xDAA520, 0.5);
    g.strokeRect(15, 15, w - 30, h - 30);
    g.fillStyle(0xDAA520, 0.3);
    g.fillTriangle(w / 2, h / 2 - 50, w / 2 - 45, h / 2, w / 2 + 45, h / 2);
    g.fillTriangle(w / 2, h / 2 + 50, w / 2 - 45, h / 2, w / 2 + 45, h / 2);
    g.fillStyle(0xDAA520, 0.15);
    g.fillRect(45, 30, w - 90, h - 60);
    g.lineStyle(1, 0xDAA520, 0.2);
    g.strokeRect(45, 30, w - 90, h - 60);
    g.generateTexture('loteria_default', w, h);
    g.destroy();
  }

  drawBackground(w, h) {
    this.bgGraphics.clear();
    for (let i = 0; i < h; i++) {
      const t = i / h;
      const r = Math.floor(0x1a + (0x12 - 0x1a) * t);
      const g = Math.floor(0x0a + (0x07 - 0x0a) * t);
      const b = Math.floor(0x2e + (0x1f - 0x2e) * t);
      const color = (r << 16) | (g << 8) | b;
      this.bgGraphics.fillStyle(color);
      this.bgGraphics.fillRect(0, i, w, 1);
    }
    this.bgGraphics.fillStyle(COLORS.separator, 0.08);
    for (let x = 0; x < w; x += 40) {
      for (let y = 0; y < h; y += 40) {
        this.bgGraphics.fillCircle(x, y, 2);
      }
    }
  }

  handleResize(gameSize) {
    const newW = gameSize.width;
    const newH = gameSize.height;

    this.gameAreaW = newW * 0.6;
    this.panelW = newW * 0.4;
    this.gameCx = this.gameAreaW / 2;

    const newTitleSize = Math.min(96, Math.floor(this.gameAreaW / 4));
    const newBtnTextSize = Math.min(20, Math.floor(this.gameAreaW / 32));
    const newBtnWidth = Math.min(180, Math.floor(this.gameAreaW / 3.5));
    const newBtnHeight = Math.min(48, Math.floor(this.gameAreaW / 14));
    const newSpacing = newBtnWidth + 16;
    const newCy = newH / 2;
    const newCounterSize = Math.min(16, Math.floor(this.gameAreaW / 30));

    this.drawBackground(newW, newH);

    this.title.setPosition(this.gameCx, 35);
    this.title.setFontSize(newTitleSize);
    this.titleLine.clear();
    this.titleLine.lineStyle(2, COLORS.separator, 0.8);
    this.titleLine.lineBetween(this.gameCx - 100, 55, this.gameCx + 100, 55);

    this.counterText.setPosition(this.gameCx, 68);
    this.counterText.setFontSize(newCounterSize);
    this.progressBarBg.setPosition(this.gameCx, 88);
    this.progressBarBg.setSize(this.gameAreaW * 0.5, 8);
    this.updateProgress();

    this.cardBorder.setPosition(this.gameCx, newCy - 30);
    this.card.setPosition(this.gameCx, newCy - 30);
    this.cardShadow.setPosition(this.gameCx + 4, newCy - 26);

    this.loadingText.setPosition(this.gameCx, newCy + 130);
    this.loadingText.setFontSize(Math.min(11, Math.floor(this.gameAreaW / 40)));

    const intervalValues = [1, 2, 3, 5];
    const intervalBtnW = 50;
    const intervalBtnH = 24;
    const intervalGap = 8;
    const totalIntervalW = intervalValues.length * intervalBtnW + (intervalValues.length - 1) * intervalGap;
    const intervalStartX = this.gameCx - totalIntervalW / 2 + intervalBtnW / 2;
    const btnTextSizeInterval = Math.min(13, Math.floor(this.gameAreaW / 36));

    this.intervalBtns.forEach((btn, i) => {
      const x = intervalStartX + i * (intervalBtnW + intervalGap);
      btn.setPosition(x, newCy + 125);
      btn.setSize(intervalBtnW, intervalBtnH);
    });
    this.intervalBtnTexts.forEach((text, i) => {
      const x = intervalStartX + i * (intervalBtnW + intervalGap);
      text.setPosition(x, newCy + 132);
      text.setFontSize(btnTextSizeInterval);
    });

    this.startBg.setPosition(this.gameCx, newCy + 170);
    this.startBg.setSize(newBtnWidth, newBtnHeight);
    this.startText.setPosition(this.gameCx, newCy + 170);
    this.startText.setFontSize(newBtnTextSize);

    this.pauseBg.setPosition(this.gameCx - newSpacing / 2, newCy + 230);
    this.pauseBg.setSize(newBtnWidth, newBtnHeight);
    this.pauseText.setPosition(this.gameCx - newSpacing / 2, newCy + 230);
    this.pauseText.setFontSize(newBtnTextSize);

    this.finishBg.setPosition(this.gameCx + newSpacing / 2, newCy + 230);
    this.finishBg.setSize(newBtnWidth, newBtnHeight);
    this.finishText.setPosition(this.gameCx + newSpacing / 2, newCy + 230);
    this.finishText.setFontSize(newBtnTextSize);

    this.panelX = this.gameAreaW + this.panelW / 2;
    this.panelH = newH - 80;
    this.panelBg.setPosition(this.panelX, this.panelY + this.panelH / 2);
    this.panelBg.setSize(this.panelW - 20, this.panelH);
    this.panelTitle.setPosition(this.panelX, this.panelY + 15);
    this.historyContainer.setPosition(this.panelX, this.panelY + this.panelPadding + 20);
    this.separator.setPosition(this.gameAreaW, newH / 2);
    this.separator.setSize(2, newH);
    this.updatePanelMask();
    this.relayoutHistory();
  }

  updateProgress() {
    if (this.isRunning) {
      const pct = this.currentIndex / 54;
      const maxW = this.gameAreaW * 0.5;
      this.progressBarFill.setSize(maxW * pct, 6);
      this.counterText.setText(`${this.currentIndex} / 54`);
    } else {
      this.progressBarFill.setSize(0, 6);
      this.counterText.setText('');
    }
  }

  shuffleCard() {
    this.card.setTexture('loteria_default');
  }

  animateCardChange() {
    this.tweens.add({
      targets: this.card,
      scaleX: { from: 2/3, to: 0.5 },
      duration: 100,
      yoyo: true,
      ease: 'Power2',
    });
  }

  resumeAudio() {
    if (!this.beepCtx && AudioCtx) {
      this.beepCtx = new AudioCtx();
    }
    if (this.beepCtx && this.beepCtx.state === 'suspended') {
      this.beepCtx.resume().then(() => {
        try {
          const buf = this.beepCtx.createBuffer(1, 1, 22050);
          const src = this.beepCtx.createBufferSource();
          src.buffer = buf;
          src.connect(this.beepCtx.destination);
          src.start(0);
        } catch (_) {}
      });
    }
  }

  playBeep() {
    if (!this.beepCtx) return;
    const fire = () => {
      try {
        const osc = this.beepCtx.createOscillator();
        const gain = this.beepCtx.createGain();
        osc.connect(gain);
        gain.connect(this.beepCtx.destination);
        osc.frequency.value = 660;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.15, this.beepCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.beepCtx.currentTime + 0.08);
        osc.start();
        osc.stop(this.beepCtx.currentTime + 0.08);
      } catch (_) {}
    };
    if (this.beepCtx.state === 'suspended') {
      this.beepCtx.resume().then(fire).catch(fire);
    } else {
      fire();
    }
  }

  speak(cardId) {
    if (!this.beepCtx) return;
    try {
      const cacheKey = `audio_${cardId}`;
      const buffer = this.cache.audio.get(cacheKey);
      if (!buffer) return;
      const source = this.beepCtx.createBufferSource();
      source.buffer = buffer;
      source.connect(this.beepCtx.destination);
      source.start(0);
    } catch (_) {}
  }

  shuffleDeck(deck) {
    const secureRandom = () => {
      const array = new Uint32Array(1);
      crypto.getRandomValues(array);
      return array[0] / 4294967296;
    };
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(secureRandom() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }

  startGame() {
    // iOS: calentar AudioContext con buffer vacío durante gesto
    this.resumeAudio();

    this.deck = this.shuffleDeck([...CARDS]);
    this.currentIndex = 0;
    this.drawnCards = [];
    this.isRunning = true;
    this.isPaused = false;

    this.historyContainer.removeAll(true);
    this.historyContainer.y = this.panelY + this.panelPadding + 20;

    this.startBg.setFillStyle(0x666666).disableInteractive();

    this.pauseBg.setVisible(true).setInteractive({ useHandCursor: true });
    this.pauseText.setVisible(true).setText('Detener');
    this.pauseBg.setFillStyle(COLORS.gold);

    this.finishBg.setVisible(true).setInteractive({ useHandCursor: true });
    this.finishText.setVisible(true);
    this.finishBg.setFillStyle(COLORS.purple);

    this.shuffleAnimation(() => {
      this.showCurrentCard();
      this.updateProgress();
      this.timer = this.time.addEvent({
        delay: this.cardInterval * 1000,
        callback: this.nextCard,
        callbackScope: this,
        loop: true,
      });
    });
  }

  shuffleAnimation(onComplete) {
    let count = 0;
    const total = 20;
    const interval = this.time.addEvent({
      delay: 100,
      callback: () => {
        count++;
        const index = Phaser.Math.Between(0, CARDS.length - 1);
        this.playBeep();

        // Efecto visual de barajeo
        this.tweens.add({
          targets: this.card,
          x: { from: this.gameCx - 5, to: this.gameCx + 5 },
          duration: 50,
          yoyo: true,
        });

        if (count >= total) {
          interval.remove();
          this.card.x = this.gameCx;
          onComplete();
        }
      },
      callbackScope: this,
      loop: true,
    });
  }

  togglePause() {
    if (!this.isRunning) return;

    if (this.isPaused) {
      this.timer.paused = false;
      this.pauseText.setText('Detener');
      this.pauseBg.setFillStyle(COLORS.gold);
      this.isPaused = false;
    } else {
      this.timer.paused = true;
      this.pauseText.setText('Reanudar');
      this.pauseBg.setFillStyle(COLORS.greenLight);
      this.isPaused = true;
    }
  }

  selectInterval(value) {
    this.cardInterval = value;
    this.registry.set('cardInterval', value);

    const intervalValues = [1, 2, 3, 5];
    this.intervalBtns.forEach((btn, i) => {
      btn.setFillStyle(intervalValues[i] === value ? COLORS.gold : COLORS.separator);
    });

    if (this.isRunning && this.timer) {
      this.timer.delay = value * 1000;
    }
  }

  showCurrentCard() {
    if (this.currentIndex < this.deck.length) {
      const card = this.deck[this.currentIndex];
      this.playBeep();
      this.speak(card.id);

      const textureKey = `card_${card.id}`;
      if (this.textures.exists(textureKey)) {
        this.card.setTexture(textureKey);
        this.loadingText.setVisible(false);
      } else {
        this.card.setTexture('loteria_default');
        this.loadingText.setVisible(true);
        this.cardLoader.loadCard(card, (loadedKey) => {
          if (this.currentIndex < this.deck.length && this.deck[this.currentIndex].id === card.id) {
            this.card.setTexture(loadedKey);
          }
          this.loadingText.setVisible(false);
        });
      }

      this.animateCardChange();
      this.updateProgress();
    }
  }

  nextCard() {
    if (this.currentIndex >= this.deck.length) {
      this.stopGame();
      return;
    }

    this.drawnCards.push(this.deck[this.currentIndex]);
    this.addHistoryItem(this.deck[this.currentIndex], this.drawnCards.length);
    this.currentIndex++;

    if (this.currentIndex >= this.deck.length) {
      this.stopGame();
    } else {
      this.showCurrentCard();
    }
  }

  addHistoryItem(cardData, index) {
    const itemY = (index - 1) * this.itemHeight;
    const listFontSize = Math.min(13, Math.floor(this.panelW / 14));
    const panelContentW = this.panelW - 40;
    const labelMaxW = panelContentW - 20;

    const label = this.add.text(-panelContentW / 2 + 10, itemY, `${index}. ${cardData.name}`, {
      font: `${listFontSize}px Arial, sans-serif`,
      fill: index === this.drawnCards.length ? COLORS.goldText : COLORS.textLight,
    });
    label.setOrigin(0, 0.5);

    if (label.width > labelMaxW) {
      label.setCrop(0, 0, labelMaxW, label.height + 10);
    }

    this.historyContainer.add(label);

    // Animación de entrada
    label.setAlpha(0);
    this.tweens.add({
      targets: label,
      alpha: 1,
      x: { from: -panelContentW / 2 + 30, to: -panelContentW / 2 + 10 },
      duration: 200,
      ease: 'Power2',
    });

    this.clampScroll();
  }

  clampScroll() {
    const totalItems = this.historyContainer.list.length;
    const totalHeight = totalItems * this.itemHeight + this.panelPadding;
    const maxVisibleH = this.panelH - this.panelPadding * 2;

    if (totalHeight <= maxVisibleH) {
      this.historyContainer.y = this.panelY + this.panelPadding + 20;
    } else {
      const minY = this.panelY + this.panelPadding + 20 - (totalHeight - maxVisibleH);
      const maxY = this.panelY + this.panelPadding + 20;
      this.historyContainer.y = Phaser.Math.Clamp(this.historyContainer.y, minY, maxY);
    }
  }

  updatePanelMask() {
    this.maskGraphics.clear();
    this.maskGraphics.fillStyle(0xffffff);
    this.maskGraphics.fillRect(this.panelX - (this.panelW - 20) / 2, this.panelY + 30, this.panelW - 20, this.panelH - 40);
  }

  relayoutHistory() {
    const children = this.historyContainer.list;
    const panelContentW = this.panelW - 40;

    for (let i = 0; i < children.length; i++) {
      const itemY = i * this.itemHeight;
      if (children[i]) children[i].setPosition(-panelContentW / 2 + 10, itemY);
    }
  }

  stopGame() {
    this.isRunning = false;
    this.isPaused = false;
    if (this.timer) {
      this.timer.remove();
    this.timer = null;
    }

    this.startBg.setFillStyle(COLORS.accent).setInteractive({ useHandCursor: true });

    this.pauseBg.setVisible(false).disableInteractive();
    this.pauseText.setVisible(false);

    this.finishBg.setVisible(false).disableInteractive();
    this.finishText.setVisible(false);

    this.updateProgress();
    this.scene.restart();
  }

  toggleFullscreen() {
    if (this.scale.isFullscreen) {
      this.scale.stopFullscreen();
    } else {
      this.scale.startFullscreen();
    }
  }
}
