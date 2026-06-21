const LOAD_TIMEOUT = 5000;

export class CardLoader {
  constructor(scene) {
    this.scene = scene;
    this.loading = new Set();
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

    const file = cardData.file;
    if (!file) {
      clearTimeout(timeoutId);
      this.loading.delete(cardData.id);
      onComplete('card');
      return;
    }

    try {
      const imagePath = `assets/cards/${file}`;

      this.scene.load.image(key, imagePath);

      this.scene.load.once(`filecomplete-image-${key}`, () => {
        clearTimeout(timeoutId);
        finish(key);
      });

      this.scene.load.once('loaderror', (errFile) => {
        if (errFile && errFile.key === key) {
          clearTimeout(timeoutId);
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
