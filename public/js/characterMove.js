
class CharacterMove {
    constructor(girl, keys, knifes, rooms, Room_Name, game) {
        this.girl = girl;
        this.keys = keys;
        this.knifes = knifes;
        this.rooms = rooms;
        this.Room_Name = Room_Name;
        this.game = game;
        this.weapon = 5;


        this.throwKnifeSound = this.game.sound.add('throwKnife', {
            volume: 0.5,
            loop: false,
            detune: 25
        });
        this.walkSound = this.game.sound.add('walk', {
            volume: 0.5,
            loop: true,
            detune: 25
        });
        this.treasureSound = this.game.sound.add('treasure', {
            volume: 0.5,
            loop: false,
            detune: 25
        });
    }

    velocity(){
        if(this.girl.body.velocity.x!==0||this.girl.body.velocity.y!==0)
                    this.walkSound.volume=0.5;
                    else
                    this.walkSound.volume=0;


    }

    CharAnimation(count) {

        if (count === -2) {
            if (this.girl.anims.currentAnim['key'] != 'girl-faint') {
                const parts = this.girl.anims.currentAnim['key'].split('-');
                parts[1] = 'stop';
                this.girl.play(parts.join('-'));
                this.girl.setVelocity(0, 0);
            }
        }
        else if (count > 0) {
            const speed = 60;

            if (!this.girl)
                return;

            if (this.keys['A'].isDown) {
                this.girl.anims.play('girl-go-side', true);
                this.girl.setVelocity(-speed, 0);
                this.girl.scaleX = -1;
                this.girl.body.offset.x = 23;
            }
            else if (this.keys['D'].isDown) {
                this.girl.anims.play('girl-go-side', true);
                this.girl.setVelocity(speed, 0);
                this.girl.scaleX = 1;
                this.girl.body.offset.x = 8;
            }
            else if (this.keys['W'].isDown) {
                this.girl.anims.play('girl-go-up', true);
                this.girl.setVelocity(0, -speed);
            }
            else if (this.keys['S'].isDown) {
                this.girl.anims.play('girl-go-down', true);
                this.girl.setVelocity(0, speed);
            }
            else {
                if (this.girl.anims.currentAnim['key'] != 'girl-faint') {
                    const parts = this.girl.anims.currentAnim['key'].split('-');
                    parts[1] = 'stop';
                    this.girl.play(parts.join('-'));
                    this.girl.setVelocity(0, 0);
                    this.walkSound.play();
                }
            }

            if (this.keys['Shift'].isDown) {
                const parts = this.girl.anims.currentAnim['key'].split('-');
                if (parts[2] == 'up') {
                    this.girl.anims.play('girl-go-up', true);
                    this.girl.setVelocity(0, -500);
                }
                else if (parts[2] == 'down') {
                    this.girl.anims.play('girl-go-down', true);
                    this.girl.setVelocity(0, 500);
                }
                else if (parts[2] == 'side') {
                    if (this.girl.scaleX == 1) {
                        this.girl.anims.play('girl-go-side', true);
                        this.girl.setVelocity(500, 0);
                        this.girl.body.offset.x = 8;
                    }
                    else {
                        this.girl.anims.play('girl-go-side', true);
                        this.girl.setVelocity(-500, 0);
                        this.girl.body.offset.x = 23;
                    }
                }
            }

            for (let i = 0; i < this.rooms.length; i++) {
                let x = this.rooms[i].x + this.rooms[i].width;
                let y = this.rooms[i].y + this.rooms[i].height;
                if (this.girl.x >= this.rooms[i].x && this.girl.x <= x && this.girl.y >= this.rooms[i].y && this.girl.y <= y) {
                    if (this.Room_Name !== this.rooms[i].name) {
                        this.Room_Name = this.rooms[i].name;
                    }
                }
            }

            return this.Room_Name;

        }
    }

    GetTreasure(count, chest) {
        if (count > 0) {

            if (this.keys['E'].isDown) {
                if (chest.frame.name == 'treasure1.png') {
                    this.treasureSound.play();
                    let treasure = new Treasure(chest, this.game);
                    treasure.openTreasure();

                    this.weapon += treasure.GetKnifesNum();
                    treasure.SetKnifesNum(0);
                }

            }
        }
    }

    GetKnifes() {
        return this.weapon;
    }



    throwKnife() {
        const parts = this.girl.anims.currentAnim['key'].split('-');
        const direction = parts[2];
        const vect = new Phaser.Math.Vector2(0, 0);

        switch (direction) {
            case 'up':
                vect.y = -1;
                break;
            case 'down':
                vect.y = 1;
                break;
            default:
            case 'side':
                if (this.girl.scaleX < 0)
                    vect.x = -1;
                else
                    vect.x = 1;
                break;
        }
        const angle = vect.angle();
        let knife = this.knifes.get(this.girl.body['center']['x'], this.girl.body['center']['y'], 'knife');

        knife.setRotation(angle);
        knife.setVelocity(vect.x * 300, vect.y * 300);
    }

    characterAttac(count, cursors) {
        if (count > 0 && this.weapon > 0) {

            if (!cursors || !this.girl)
                return;

            if (Phaser.Input.Keyboard.JustDown(cursors.space)) {
                this.throwKnifeSound.play();
                // girl_attack = true;
                this.throwKnife();
                --this.weapon;
            }
        }
    }


}
