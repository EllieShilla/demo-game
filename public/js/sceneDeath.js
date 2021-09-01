export default class sceneDeath extends Phaser.Scene {
    constructor() {
        super('death-scene')
        this.pointer;
        this.text;
    }

    create() {
        this.pointer = this.input.activePointer;
        this.text = this.add.text(0, 0, '   GAME OVER\nCLICK TO RESTART', {
            fontSize: '60px',
            color: '#fff',
            stroke: '#0C0C0C',
            strokeThickness: 2, 
            backgroundColor: '#05050570'
        });
        this.text.setPadding({ left: 130, right: 158, top: 190, bottom: 220 })
    }

    update() {
        if (this.pointer.leftButtonDown()) {
            this.scene.start('game-scene');
            this.scene.stop('death-scene');
        }

    }
}