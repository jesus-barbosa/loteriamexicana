import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { CardLoader } from '../cardLoader.js';
import { CARDS } from '../cards.js';

function createMockScene() {
  return {
    textures: { exists: vi.fn(() => false) },
    load: {
      image: vi.fn(),
      once: vi.fn(),
      start: vi.fn(),
    },
  };
}

describe('CardLoader', () => {
  let scene;
  let loader;

  beforeEach(() => {
    vi.stubGlobal('window', { devicePixelRatio: 1 });
    vi.stubGlobal('navigator', { userAgent: 'Mozilla/5.0' });
    scene = createMockScene();
    loader = new CardLoader(scene);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('debe usar 240x360 en resolución normal', () => {
    const size = loader.getCardSize();
    expect(size.width).toBe(240);
    expect(size.height).toBe(360);
  });

  it('debe llamar onComplete inmediatamente si la textura existe', () => {
    scene.textures.exists = vi.fn(() => true);
    const onComplete = vi.fn();
    loader.loadCard(CARDS[0], onComplete);
    expect(onComplete).toHaveBeenCalledWith('card_gallo');
  });

  it('no debe cargar si ya está en proceso', () => {
    loader.loading.add('gallo');
    const onComplete = vi.fn();
    loader.loadCard(CARDS[0], onComplete);
    expect(onComplete).not.toHaveBeenCalled();
  });

  it('debe iniciar carga de imagen si no está en caché', () => {
    const onComplete = vi.fn();
    loader.loadCard(CARDS[0], onComplete);
    expect(scene.load.image).toHaveBeenCalled();
    expect(scene.load.start).toHaveBeenCalled();
  });

  it('debe cargar con la key correcta', () => {
    const onComplete = vi.fn();
    loader.loadCard(CARDS[0], onComplete);
    expect(scene.load.image.mock.calls[0][0]).toBe('card_gallo');
  });

  it('debe cargar la imagen correcta del archivo', () => {
    const onComplete = vi.fn();
    loader.loadCard(CARDS[0], onComplete);
    expect(scene.load.image.mock.calls[0][1]).toBe('assets/cards/gallo.jpg');
  });

  it('debe manejar carga exitosa', () => {
    const onComplete = vi.fn();
    loader.loadCard(CARDS[0], onComplete);

    const fileCompleteFn = scene.load.once.mock.calls.find(
      ([event]) => event === 'filecomplete-image-card_gallo'
    );
    expect(fileCompleteFn).toBeDefined();
    fileCompleteFn[1]();

    expect(onComplete).toHaveBeenCalledWith('card_gallo');
    expect(loader.loading.has('gallo')).toBe(false);
  });

  it('debe manejar error de carga con fallback', () => {
    const onComplete = vi.fn();
    loader.loadCard(CARDS[0], onComplete);

    const loadErrorCb = scene.load.once.mock.calls.find(
      ([event]) => event === 'loaderror'
    );
    expect(loadErrorCb).toBeDefined();
    loadErrorCb[1]({ key: 'card_gallo' });

    expect(onComplete).toHaveBeenCalledWith('card');
  });

  it('no debe fallar si loaderror tiene key diferente', () => {
    const onComplete = vi.fn();
    loader.loadCard(CARDS[0], onComplete);

    const loadErrorCb = scene.load.once.mock.calls.find(
      ([event]) => event === 'loaderror'
    );
    loadErrorCb[1]({ key: 'card_other' });

    expect(onComplete).not.toHaveBeenCalled();
  });

  it('debe usar 480x720 en high DPI desktop', () => {
    globalThis.window.devicePixelRatio = 2;
    const hdLoader = new CardLoader(scene);
    const size = hdLoader.getCardSize();
    expect(size.width).toBe(480);
    expect(size.height).toBe(720);
  });

  it('debe usar 240x360 en high DPI mobile', () => {
    globalThis.window.devicePixelRatio = 2;
    vi.stubGlobal('navigator', { userAgent: 'Mobi/Android' });
    const mobileLoader = new CardLoader(scene);
    const size = mobileLoader.getCardSize();
    expect(size.width).toBe(240);
    expect(size.height).toBe(360);
  });
});
