export default class Boot extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Fondo oscuro temático
    const bg = this.add.graphics();
    bg.fillStyle(0x1a0a2e);
    bg.fillRect(0, 0, width, height);

    // Patrón decorativo sutil
    bg.fillStyle(0x4a2d6e, 0.08);
    for (let x = 0; x < width; x += 40) {
      for (let y = 0; y < height; y += 40) {
        bg.fillCircle(x, y, 2);
      }
    }

    // Título
    const titleText = this.add.text(width / 2, height / 2 - 80, 'Lotería Mexicana', {
      font: 'bold 36px Georgia, "Times New Roman", serif',
      fill: '#f5e6ca',
      stroke: '#000000',
      strokeThickness: 2,
    });
    titleText.setOrigin(0.5);

    // Barra de progreso
    const progressBarBg = this.add.rectangle(width / 2, height / 2, 280, 12, 0x2d1b4e);
    progressBarBg.setStrokeStyle(1, 0x4a2d6e);

    const progressBar = this.add.graphics();

    const loadingText = this.add.text(width / 2, height / 2 + 40, 'Cargando...', {
      font: '16px Arial, sans-serif',
      fill: '#b8a9c9',
    });
    loadingText.setOrigin(0.5);

    this.load.on('progress', (value) => {
      progressBar.clear();
      progressBar.fillStyle(0xf39c12, 1);
      progressBar.fillRect(width / 2 - 138, height / 2 - 5, 276 * value, 10);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBarBg.destroy();
      loadingText.destroy();
      titleText.destroy();
      bg.destroy();
    });

    // Cargar assets
    this.load.image('player', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABYSURBVFhH7c6xDQAgDASwkP3XZoE1oIL0kE4kODKZTCaTyWQymUwmk8lkMplMJpPJZDKZTCaTyWQymUwmk8lkMplMJpPJZDKZTCaTyWQymUwmk8lkMpnMFheLGwqOC/GgYgAAAABJRU5ErkJggg==');
    this.load.image('card', 'assets/cards/card.png');
    this.load.audio('click', 'assets/sounds/click.wav');
    this.load.audio('move', 'assets/sounds/move.wav');
  }

  create() {
    this.scene.start('Game');
  }
}
