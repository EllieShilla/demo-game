export default class sceneMenu extends Phaser.Scene {
    constructor() {
        super('menu-scene')
        this.NewGame;
        this.Controls;
        this.key;
    }
    preload() {                                                                                                
        this.load.image('tiles', 'assets/map/Serene_Village_16x16-extruded.png');
        this.load.image('tiles2', 'assets/map/tilesetPlains-extruded.png');
        this.load.image('tiles3', 'assets/map/TX_Props-extruded.png');
        this.load.image('tiles4', 'assets/map/0x72_16x16DungeonTileset.v4-extruded.png');
    
        this.load.tilemapTiledJSON('cart2', 'assets/map/cart2.json');
    
        this.load.atlas('girl', 'assets/character/spritesheet.png', 'assets/character/spritesheet.json'); 
        this.load.atlas('treasure', 'assets/treasure/treasure.png', 'assets/treasure/treasure.json');
    
        this.load.image('knife', 'assets/weapon/knife.png');
        this.load.image('KnifeTextSize', 'assets/weapon/KnifeTextSize.png');
    
        this.load.atlas('enemies', 'assets/enemies/dino.png', 'assets/enemies/dino.json');
    
        this.load.image('fullH', 'assets/character/fullHeart2.png');
        this.load.image('emptyH', 'assets/character/emptyHeart2.png');

        this.load.image('Molly', 'assets/npc/f1.png');
        this.load.image('Rebecca', 'assets/npc/f2.png');
        this.load.image('Granny', 'assets/npc/f3.png');

        this.load.image('Victor', 'assets/npc/m1.png');
        this.load.image('Mr.Rogers', 'assets/npc/m2.png');
        this.load.image('Joe', 'assets/npc/m3.png');

    
        this.load.audio('backgroundMusic', 'assets/audio/background/POL-water-drops-short.mp3');
        this.load.audio('damagePlayer', 'assets/audio/damage/damage_4_karen.mp3');
        this.load.audio('deathPlayer', 'assets/audio/damage/death_2_karen.mp3');
        this.load.audio('throwKnife', 'assets/audio/throwKnife/mixkit-fast-sword-whoosh.mp3');
        this.load.audio('walk', 'assets/audio/walk/mixkit-footsteps-in-the-forest-ground-1230.mp3');
        this.load.audio('treasure', 'assets/audio/treasure/mixkit-video-game-treasure-2066.mp3');
        this.load.audio('viktoryMusic', 'assets/audio/win/mixkit-video-game-win-2016.mp3');

        this.load.audio('VictorSound', 'assets/audio/dialogue/greeting_7_sean.mp3');
        this.load.audio('MollySound', 'assets/audio/dialogue/greeting_2_meghan.mp3');
        this.load.audio('JoeSound', 'assets/audio/dialogue/greeting_10_karen.mp3');
        this.load.audio('GrannySound', 'assets/audio/dialogue/greeting_6_meghan.mp3');
        this.load.audio('Mr.RogersSound', 'assets/audio/dialogue/greeting_5_alex.mp3');
        this.load.audio('RebeccaSound', 'assets/audio/dialogue/greeting_1_karen.mp3');

        this.load.image('controls', 'assets/controls.png');

    }

    create() {
        this.key = this.input.keyboard.addKeys('ESC');                                          //построение сцены

        let menu_background = this.add.rectangle(0, 0, 800 * 2, 520 * 2, 0xab892c);
        this.NewGame = this.add.text(240, 200, 'New Game', { fontSize: '35px' }).setInteractive();
        // this.Continue = this.add.text(240, 260, 'Continue', { fontSize: '35px' }).setInteractive();
        this.Controls = this.add.text(240, 260, 'Controls', { fontSize: '35px' }).setInteractive();
        this.NewGame.setPadding(64, 16);
        // this.Continue.setPadding(64, 16);
        this.Controls.setPadding(64, 16);

    }

    update() {


        this.NewGame.on('pointerover', () => {                                        //события связаные с кнопками
            this.NewGame.setBackgroundColor('#EECC74E3');
            this.NewGame.setPadding(64, 16);
        });
        this.NewGame.on('pointerout', () => {
            this.NewGame.setBackgroundColor('#EECC7400');
        });

        this.Controls.on('pointerover', () => {
            this.Controls.setBackgroundColor('#EECC74E3');
            this.Controls.setPadding(64, 16);
        });
        this.Controls.on('pointerout', () => {
            this.Controls.setBackgroundColor('#EECC7400');
        });

        this.Controls.on('pointerdown', () => {
            this.scene.start('controls-scene');
            this.scene.stop('menu-scene');
        });

        this.NewGame.on('pointerdown', () => {
            this.scene.start('game-scene');
            this.scene.stop('menu-scene');
        });
    }
}


 
