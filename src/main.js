import Phaser from 'phaser';
import config from './config.js';
import Boot from './scenes/Boot.js';
import Game from './scenes/Game.js';

config.scene = [Boot, Game];

new Phaser.Game(config);
