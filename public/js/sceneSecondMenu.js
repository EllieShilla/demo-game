export default class sceneSecondMenu extends Phaser.Scene {
    constructor() {
        super('second_menu-scene')
        this.NewGame;
        this.Controls;
        this.key;
    }

    create() {
        this.key = this.input.keyboard.addKeys('ESC');

        let menu_background = this.add.rectangle(0, 0, 800 * 2, 520 * 2, 0xab892c);
        this.NewGame = this.add.text(240, 200, 'New Game', { fontSize: '35px' }).setInteractive();
         this.ResumeGame = this.add.text(240, 260, 'Resume Game', { fontSize: '35px' }).setInteractive();
        this.Controls = this.add.text(240, 320, 'Controls', { fontSize: '35px' }).setInteractive();
        this.NewGame.setPadding(64, 16);
         this.ResumeGame.setPadding(64, 16);
        this.Controls.setPadding(64, 16);

    }

    update() {


        this.NewGame.on('pointerover', () => {
            this.NewGame.setBackgroundColor('#EECC74E3');
            this.NewGame.setPadding(64, 16);
        });
        this.NewGame.on('pointerout', () => {
            this.NewGame.setBackgroundColor('#EECC7400');
        });

        this.ResumeGame.on('pointerover', () => {
            this.ResumeGame.setBackgroundColor('#EECC74E3');
            this.ResumeGame.setPadding(64, 16);
        });
        this.ResumeGame.on('pointerout', () => {
            this.ResumeGame.setBackgroundColor('#EECC7400');
        });

        this.Controls.on('pointerover', () => {
            this.Controls.setBackgroundColor('#EECC74E3');
            this.Controls.setPadding(64, 16);
        });
        this.Controls.on('pointerout', () => {
            this.Controls.setBackgroundColor('#EECC7400');
        });        


        this.NewGame.on('pointerdown', () => {
            this.scene.start('game-scene');
            this.scene.stop('second_menu-scene');
        });

        this.ResumeGame.on('pointerdown', () => {
            this.scene.resume('game-scene');
            this.scene.stop('second_menu-scene');
        });

        if (this.key['ESC'].isDown) {
            this.scene.resume('game-scene');
            this.scene.stop('second_menu-scene');
        }

        this.Controls.on('pointerdown', () => {
            this.scene.start('controls2-scene');
            this.scene.stop('second_menu-scene');
        });
    }
}