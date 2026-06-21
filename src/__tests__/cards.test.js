import { describe, it, expect } from 'vitest';
import { CARDS } from '../cards.js';

describe('CARDS - Lotería Mexicana', () => {
  it('debe exportar un array de 54 cartas', () => {
    expect(Array.isArray(CARDS)).toBe(true);
    expect(CARDS).toHaveLength(54);
  });

  it('cada carta debe tener id, name, number y file', () => {
    CARDS.forEach((card) => {
      expect(card).toHaveProperty('id');
      expect(card).toHaveProperty('name');
      expect(card).toHaveProperty('number');
      expect(card).toHaveProperty('file');
      expect(typeof card.id).toBe('string');
      expect(typeof card.name).toBe('string');
      expect(typeof card.number).toBe('number');
      expect(typeof card.file).toBe('string');
    });
  });

  it('todos los IDs deben ser únicos', () => {
    const ids = CARDS.map((c) => c.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('ningún nombre de carta debe estar vacío', () => {
    CARDS.forEach((card) => {
      expect(card.name.trim().length).toBeGreaterThan(0);
    });
  });

  it('todas las cartas deben tener file con extensión jpg', () => {
    CARDS.forEach((card) => {
      expect(card.file).toMatch(/\.jpg$/);
    });
  });

  it('los números deben ser secuenciales del 1 al 54', () => {
    const numbers = CARDS.map((c) => c.number).sort((a, b) => a - b);
    expect(numbers).toEqual(Array.from({ length: 54 }, (_, i) => i + 1));
  });

  it('debe incluir cartas tradicionales', () => {
    const ids = CARDS.map((c) => c.id);
    expect(ids).toContain('gallo');
    expect(ids).toContain('diablo');
    expect(ids).toContain('sol');
    expect(ids).toContain('luna');
    expect(ids).toContain('corazon');
    expect(ids).toContain('estrella');
    expect(ids).toContain('muerte');
  });
});
