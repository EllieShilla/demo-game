export default class sceneVictory extends Phaser.Scene {                     //сцена, которая включается при победе
    constructor() {
        super('victory-scene')
        this.key;
        this.text;
    }

    create() {
        this.pointer = this.input.activePointer;
        this.text = this.add.text(0, 0, '   YOU WIN!\nCLICK TO RESTART', {
            fontSize: '60px',
            color: '#fff',
            stroke: '#0C0C0C',
            strokeThickness: 2, 
            backgroundColor: '#05050570'
        });
        this.text.setPadding({ left: 130, right: 158, top: 190, bottom: 220 })

        this.viktoryMusic = this.sound.add('viktoryMusic', {        
            volume: 0.5,
            loop: true,
            detune: 25
          });
          this.viktoryMusic.play();
    }

    update() {
        if (this.pointer.leftButtonDown()) {
            this.viktoryMusic.stop();
            this.scene.start('game-scene');
            this.scene.stop('victory-scene');
        }

    }
}
