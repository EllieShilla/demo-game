class Menu {
    constructor(scene, key) {
        this.scene = scene;
        this.key = key;
    }

    ToMainMenu() {
        if (Phaser.Input.Keyboard.JustDown(this.key['ESC'])) {

            this.scene.launch('second_menu-scene');
            this.scene.pause('game-scene');
        }
    }

}
