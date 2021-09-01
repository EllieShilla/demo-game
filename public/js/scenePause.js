export default class scenePause extends Phaser.Scene {
    constructor() {
        super('pause-scene')
        this.key;
        this.text;
    }

    create() {
        this.key = this.input.keyboard.addKeys('P');
        this.text = this.add.text(0, 0, 'PAUSE', {
            // fontFamily: 'VT323',
            fontSize: '60px',
            color: '#fff',
            stroke: '#0C0C0C',
            strokeThickness: 2,
            backgroundColor: '#05050570'

        });
        this.text.setPadding({ left: 310, right: 310, top: 230, bottom: 240 })
    }


    update() {
        if (this.key['P'].isDown) {
            this.scene.resume('game-scene');
            this.scene.stop('pause-scene');
        }
    }
}

