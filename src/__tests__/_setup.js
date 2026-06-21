import { vi } from 'vitest';

class MockGraphics {
  fillStyle() { return this; }
  fillRect() { return this; }
  fillCircle() { return this; }
  lineStyle() { return this; }
  lineBetween() { return this; }
  clear() { return this; }
  destroy() { return this; }
  setDepth() { return this; }
  createGeometryMask() { return { destroy: () => {} }; }
}

class MockText {
  constructor(x, y, text, _style) {
    this.x = x || 0;
    this.y = y || 0;
    this.text = text || '';
    this.width = (text || '').length * 8;
    this.height = 20;
    this._alpha = 1;
    this._scaleX = 1;
    this._scaleY = 1;
    this._strokeStyle = null;
    this._visible = true;
  }
  setOrigin() { return this; }
  setFontSize() { return this; }
  setPosition(x, y) { this.x = x; this.y = y; return this; }
  setText(t) { this.text = t; this.width = t.length * 8; return this; }
  setVisible(v) { this._visible = v; return this; }
  setCrop() { return this; }
  setFillStyle() { return this; }
  setAlpha(a) { this._alpha = a; return this; }
  setScale(sx, sy) { this._scaleX = sx; this._scaleY = sy ?? sx; return this; }
  setStrokeStyle() { return this; }
  setDepth() { return this; }
  destroy() { return this; }
}

class MockImage {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this._alpha = 1;
    this._textureKey = '';
  }
  setScale(s) { this.scaleX = s; this.scaleY = s; return this; }
  setPosition(x, y) { this.x = x; this.y = y; return this; }
  setSize() { return this; }
  setAlpha(a) { this._alpha = a; return this; }
  setDepth() { return this; }
  setTexture(key) { this._textureKey = key; return this; }
  destroy() { return this; }
}

class MockRectangle {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 100;
    this.height = 40;
    this._interactive = false;
    this._fillStyle = 0;
    this._strokeStyle = 0;
    this._visible = true;
    this._alpha = 1;
    this._depth = 0;
    this._originX = 0.5;
    this._originY = 0.5;
    this._listeners = {};
  }
  setStrokeStyle(color) { this._strokeStyle = color; return this; }
  setInteractive() { this._interactive = true; return this; }
  disableInteractive() { this._interactive = false; return this; }
  setFillStyle(color) { this._fillStyle = color; return this; }
  setVisible(v) { this._visible = v; return this; }
  setPosition(x, y) { this.x = x; this.y = y; return this; }
  setSize(w, h) { this.width = w; this.height = h; return this; }
  setOrigin(ox, oy) { this._originX = ox; this._originY = oy ?? ox; return this; }
  setAlpha(a) { this._alpha = a; return this; }
  setDepth(d) { this._depth = d; return this; }
  on(event, fn) {
    if (!this._listeners[event]) this._listeners[event] = [];
    this._listeners[event].push(fn);
    return this;
  }
  emit(event, ...args) {
    (this._listeners[event] || []).forEach(fn => fn(...args));
  }
  destroy() { return this; }
}

class MockContainer {
  constructor(x, y) {
    this.list = [];
    this.x = x || 0;
    this.y = y || 0;
  }
  add(child) { this.list.push(child); return this; }
  removeAll(destroy) {
    if (destroy) this.list.forEach(c => c.destroy?.());
    this.list = [];
    return this;
  }
  setMask() { return this; }
  setDepth() { return this; }
  setPosition(x, y) { this.x = x; this.y = y; return this; }
  destroy() { return this; }
}

class MockCamera {
  constructor() {
    this.centerX = 400;
    this.centerY = 300;
    this.width = 800;
    this.height = 600;
  }
}

class MockInput {
  constructor() {
    this._listeners = {};
  }
  on(event, fn) {
    if (!this._listeners[event]) this._listeners[event] = [];
    this._listeners[event].push(fn);
    return this;
  }
  emit(event, ...args) {
    (this._listeners[event] || []).forEach(fn => fn(...args));
  }
  off() { return this; }
}

class MockKeyboard {
  constructor() {
    this._listeners = {};
  }
  on(event, fn) {
    if (!this._listeners[event]) this._listeners[event] = [];
    this._listeners[event].push(fn);
    return this;
  }
}

class MockScale {
  constructor() {
    this.isFullscreen = false;
    this._listeners = {};
  }
  on(event, fn) {
    if (!this._listeners[event]) this._listeners[event] = [];
    this._listeners[event].push(fn);
  }
  startFullscreen() { this.isFullscreen = true; }
  stopFullscreen() { this.isFullscreen = false; }
}

class MockTime {
  constructor() {
    this._events = [];
  }
  addEvent(config) {
    const event = {
      paused: false,
      remove: vi.fn(),
      _config: config,
    };
    this._events.push(event);
    return event;
  }
}

class MockTweenManager {
  add() { return { onComplete: () => {} }; }
}

class MockScene {
  constructor() {
    this.cameras = { main: new MockCamera() };
    this.add = {
      text: (...a) => new MockText(...a),
      image: (...a) => new MockImage(...a),
      rectangle: (...a) => new MockRectangle(...a),
      container: (...a) => new MockContainer(...a),
      graphics: () => new MockGraphics(),
    };
    this.make = {
      graphics: () => new MockGraphics(),
    };
    this.tweens = new MockTweenManager();
    this.input = new MockInput();
    this.input.keyboard = new MockKeyboard();
    this.scale = new MockScale();
    this.time = new MockTime();
    this.load = {
      image: vi.fn(),
      audio: vi.fn(),
      on: vi.fn(),
      svg: vi.fn(),
      once: vi.fn(),
      start: vi.fn(),
    };
    this.scene = {
      start: vi.fn(),
      restart: vi.fn(),
    };
    this.textures = {
      exists: vi.fn(() => false),
    };
  }
}

globalThis.Phaser = {
  Scene: MockScene,
  Scale: {
    RESIZE: 'RESIZE',
    CENTER_BOTH: 'CENTER_BOTH',
  },
  Math: {
    Between: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    Clamp: (val, min, max) => Math.max(min, Math.min(max, val)),
  },
  Utils: {
    Array: {
      GetRandom: (arr) => arr[Math.floor(Math.random() * arr.length)],
    },
  },
};

globalThis.speechSynthesis = {
  cancel: vi.fn(),
  speak: vi.fn(),
  getVoices: vi.fn(() => [
    { lang: 'es-MX', name: 'Spanish (Mexico)' },
    { lang: 'en-US', name: 'English (United States)' },
  ]),
};
globalThis.SpeechSynthesisUtterance = class {
  constructor(text) { this.text = text; }
};

if (!globalThis.crypto) {
  globalThis.crypto = {
    getRandomValues: (arr) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 4294967296);
      }
      return arr;
    },
  };
}
