import { describe, it, expect } from 'vitest';
import config from '../config.js';

describe('config - Configuración de Phaser', () => {
  it('debe tener dimensiones por defecto', () => {
    expect(config.width).toBe(800);
    expect(config.height).toBe(600);
  });

  it('debe tener color de fondo', () => {
    expect(config.backgroundColor).toBe('#3498db');
  });

  it('debe tener física arcade configurada', () => {
    expect(config.physics.default).toBe('arcade');
    expect(config.physics.arcade.gravity.y).toBe(300);
    expect(config.physics.arcade.debug).toBe(false);
  });

  it('debe tener modo RESIZE y autoCenter', () => {
    expect(config.scale.mode).toBe('RESIZE');
    expect(config.scale.autoCenter).toBe('CENTER_BOTH');
  });

  it('debe soportar multitouch (2 pointers)', () => {
    expect(config.input.activePointers).toBe(2);
  });
});
