
var data;
var gameScene;
var selectedNPC;
var IsDialog = false;
var Key_E;
var NpcCountPhrace;
class SelectionCursor {
    constructor(game, player, keys, npcs, NPC_Data) {
        this.game = game;
        this.player = player;
        this.keys = keys;
        this.npcs = npcs;
        this.NPC_Data = NPC_Data;
    }


    CreateRectangle() {
        let box = this.game.add.rectangle(this.player.x, this.player.y, 16, 16, 0x6666ff, 0);

        this.game.physics.add.existing(box);
        this.game.selector = box;
        // this.game.physics.add.collider(this.player, this.npcs);                     //физика столкновений

        // this.game.physics.add.collider(this.game.selector, this.npcs, this.handleOverlap, null, this.game);
        this.game.physics.add.overlap(this.game.selector, this.npcs, this.handleOverlap, null, this.game);

        data = this.NPC_Data;
        gameScene = this.game;
        Key_E = this.keys['E'];
    }

    createTextBox() {
        let dialogBox = this.game.add.rectangle(0, 0, 350, 50, 0x614c12);
        this.game.physics.add.existing(dialogBox);
        this.game.selector2 = dialogBox;
        let NameBox = this.game.add.rectangle(0, 0, 80, 18, 0x614c12);
        this.game.physics.add.existing(NameBox);
        this.game.selector3 = NameBox;

        let AnswerBox = this.game.add.rectangle(0, 0, 310, 18, 0x614c12);
        this.game.physics.add.existing(AnswerBox);
        this.game.selector4 = AnswerBox;
    }
    DialogChecker() {
        return IsDialog;
    }

    handleOverlap(obj, npc) {

        if (Key_E.isDown) {
            if (selectedNPC === npc && IsDialog === true)
                return;
            else {
                data.forEach(item => {
                    if (item.name === npc.texture.key) {

                        let nameNpcBox = gameScene.selector3.setPosition(gameScene.cameras.cameras[0].worldView.x + 90, gameScene.cameras.cameras[0].worldView.y + 175);
                        let dialogBox = gameScene.selector2.setPosition(gameScene.cameras.cameras[0].worldView.x + 200, gameScene.cameras.cameras[0].worldView.y + 208);
                        let answerBox = gameScene.selector4.setPosition(gameScene.cameras.cameras[0].worldView.x + 210, gameScene.cameras.cameras[0].worldView.y + 240);

                        nameNpcBox.setStrokeStyle(2, 0x403516);
                        nameNpcBox.visible = true;
                        dialogBox.setStrokeStyle(2, 0x403516);
                        dialogBox.visible = true;
                        answerBox.setStrokeStyle(2, 0x403516);
                        answerBox.visible = true;

                        let NPCTack = gameScene.sound.add(item.sound, {
                            volume: 0.5,
                            loop: false,
                            detune: 25
                        });
                        NPCTack.play();

                         NpcCountPhrace = 1;
                        let npcName = gameScene.add.text(gameScene.cameras.cameras[0].worldView.x + 60, gameScene.cameras.cameras[0].worldView.y + 168, item.name, { fontSize: '11px' });
                        let npcText = gameScene.add.text(gameScene.cameras.cameras[0].worldView.x + 40, gameScene.cameras.cameras[0].worldView.y + 185, item.phrace[0], { fontSize: '12px' }).setWordWrapWidth(dialogBox * 0, 7);
                        let okButton = gameScene.add.text(gameScene.cameras.cameras[0].worldView.x + 70, gameScene.cameras.cameras[0].worldView.y + 233, item.answer[0], {fontSize: '11px' }).setInteractive();
                        let CancelButton = gameScene.add.text(gameScene.cameras.cameras[0].worldView.x + 70, gameScene.cameras.cameras[0].worldView.y + 233, item.cancel[0], { fontSize: '11px' }).setInteractive();
                        IsDialog = true;

                        okButton.on('pointerdown', () => {
                                npcText.setText(item.phrace[NpcCountPhrace]);
                                okButton.setText(item.answer[NpcCountPhrace]);
                                CancelButton.setText(item.cancel[NpcCountPhrace]);
                                NpcCountPhrace++;
                        });
                        CancelButton.on('pointerdown', () => {
                            dialogBox.visible = false;
                            nameNpcBox.visible = false;
                            answerBox.visible = false;
                            npcName.destroy();
                            npcText.destroy();
                            okButton.destroy();
                            CancelButton.destroy();
                            IsDialog = false;

                        });

                        nameNpcBox.setDepth(28);
                        dialogBox.setDepth(30);
                        answerBox.setDepth(28);
                        npcName.setDepth(30);
                        npcText.setDepth(30);
                        okButton.setDepth(40);
                        CancelButton.setDepth(30);

                        selectedNPC = npc;
                    }
                });
            }
        }

    }

    UpdateRectangle() {
        if (this.keys['A'].isDown) {
            this.game.selector.setPosition(this.player.x - 20, this.player.y);

        } else if (this.keys['D'].isDown) {
            this.game.selector.setPosition(this.player.x + 27, this.player.y);

        } else if (this.keys['W'].isDown) {
            this.game.selector.setPosition(this.player.x, this.player.y - 27);

        } else if (this.keys['S'].isDown) {
            this.game.selector.setPosition(this.player.x, this.player.y + 27);
        }
    }



}