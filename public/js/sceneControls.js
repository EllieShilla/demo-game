export default class sceneControls extends Phaser.Scene {
    constructor() {
        super('controls-scene')
        this.toMenu;
        this.key;
    }

    create() {
        this.add.image(400, 260, 'controls');
        this.key = this.input.keyboard.addKeys('ESC');
        this.toMenu = this.add.text(650, 20, 'Back', { fontSize: '35px',color:'black' }).setInteractive();
        this.toMenu.setPadding(30, 16);
    }

    update() {

        this.toMenu.on('pointerover', () => {
            this.toMenu.setBackgroundColor('#EECC74E3');
            this.toMenu.setPadding(30, 16);
        });

        this.toMenu.on('pointerout', () => {
            this.toMenu.setBackgroundColor('#EECC7400');
        });

        this.toMenu.on('pointerdown', () => {
            this.scene.start('menu-scene');
            this.scene.stop('controls-scene');
        });
    }
}