import { generateCardSvg } from './cardSvgGenerator.js';

const LOAD_TIMEOUT = 3000;

export class CardLoader {
  constructor(scene) {
    this.scene = scene;
    this.loading = new Set();
    this.isHighDPI = typeof window !== 'undefined' && window.devicePixelRatio > 1;
    this.isMobile = typeof navigator !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent);
  }

  getCardSize() {
    if (this.isHighDPI && !this.isMobile) {
      return { width: 480, height: 720 };
    }
    return { width: 240, height: 360 };
  }

  loadCard(cardData, onComplete) {
    const key = `card_${cardData.id}`;

    if (this.scene.textures.exists(key)) {
      onComplete(key);
      return;
    }

    if (this.loading.has(cardData.id)) {
      return;
    }

    this.loading.add(cardData.id);
    let loaded = false;

    const finish = (textureKey) => {
      if (!loaded) {
        loaded = true;
        this.loading.delete(cardData.id);
        onComplete(textureKey);
      }
    };

    const timeoutId = setTimeout(() => {
      finish('card');
    }, LOAD_TIMEOUT);

    try {
      const svgString = generateCardSvg(cardData);
      const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const { width, height } = this.getCardSize();

      this.scene.load.svg(key, url, { width, height });

      this.scene.load.once(`filecomplete-svg-${key}`, () => {
        clearTimeout(timeoutId);
        URL.revokeObjectURL(url);
        finish(key);
      });

      this.scene.load.once('loaderror', (file) => {
        if (file && file.key === key) {
          clearTimeout(timeoutId);
          URL.revokeObjectURL(url);
          finish('card');
        }
      });

      this.scene.load.start();
    } catch (_) {
      clearTimeout(timeoutId);
      this.loading.delete(cardData.id);
      onComplete('card');
    }
  }
}
