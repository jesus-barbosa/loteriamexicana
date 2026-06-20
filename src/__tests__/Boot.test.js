import { describe, it, expect, beforeEach } from 'vitest';
import Boot from '../scenes/Boot.js';

describe('Boot Scene', () => {
  let scene;

  beforeEach(() => {
    scene = new Boot();
  });

  it('debe tener nombre Boot', () => {
    expect(scene.constructor.name).toBe('Boot');
  });

  it('preload debe cargar image y audio assets', () => {
    scene.preload();
    expect(scene.load.image).toHaveBeenCalledWith('player', expect.any(String));
    expect(scene.load.image).toHaveBeenCalledWith('card', 'assets/cards/card.png');
    expect(scene.load.audio).toHaveBeenCalledWith('click', 'assets/sounds/click.wav');
    expect(scene.load.audio).toHaveBeenCalledWith('move', 'assets/sounds/move.wav');
  });

  it('create debe iniciar escena Game', () => {
    scene.create();
    expect(scene.scene.start).toHaveBeenCalledWith('Game');
  });

  it('preload progress callback debe ejecutarse', () => {
    scene.preload();
    const progressCall = scene.load.on.mock.calls.find(c => c[0] === 'progress');
    expect(progressCall).toBeDefined();
    const callback = progressCall[1];
    expect(typeof callback).toBe('function');
    callback(0.5);
  });

  it('preload complete callback debe ejecutarse', () => {
    scene.preload();
    const completeCall = scene.load.on.mock.calls.find(c => c[0] === 'complete');
    expect(completeCall).toBeDefined();
    const callback = completeCall[1];
    expect(typeof callback).toBe('function');
    callback();
  });
});
