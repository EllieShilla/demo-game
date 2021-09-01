class Pause {
    constructor(scene, key) {
        this.scene = scene;
        this.key = key;
    }

    PauseGame() {
        if (Phaser.Input.Keyboard.JustDown(this.key['P'])) {
            this.scene.launch('pause-scene')
            this.scene.pause('game-scene');
        }
    }
}

