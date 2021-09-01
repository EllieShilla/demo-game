import sceneGame from './sceneGame.js';
import scenePause from './scenePause.js';
import sceneDeath from './sceneDeath.js';
import sceneMenu from './sceneMenu.js';
import sceneSecondMenu from './sceneSecondMenu.js';
import sceneControls from './sceneControls.js';
import sceneControls2 from './sceneControls2.js';
import sceneVictory from './sceneVictory.js';

var game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 520,
  dom: {
    createContainer: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      // debug: true,
      gravity: { y: 0 }
    }
  },
  audio: {
      disableWebAudio: true
  },
  scene: [sceneMenu, sceneControls,sceneGame,sceneSecondMenu,sceneControls2,scenePause, sceneDeath,sceneVictory]

});