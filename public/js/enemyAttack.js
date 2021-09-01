class EnemyAttack {

    constructor(game, enemy, player) {
        this.game = game;
        this.enemy = enemy;
        this.player = player;
    }

    Attack(count) {
        const speed = 60;

        for (let i = 0; i < this.enemy.length; i++) {
            if (count > 0) {
                var enemy_X = this.enemy[i].body.center.x - this.player.body.center.x;     //просчитывается растояние от врага до персонажа и их расположение относительно друг друга
                var girl_X = this.player.body.center.x - this.enemy[i].body.center.x;
                var enemy_Y = this.enemy[i].body.center.y - this.player.body.center.y;
                var girl_Y = this.player.body.center.y - this.enemy[i].body.center.y; 

                if ((girl_Y <= 120 && girl_Y >= 0) && girl_X <= 120 && girl_X >= 0) {    //враг выше и справа
                    this.enemy[i].anims.play('enemies-go', true);
                    this.enemy[i].setVelocity(speed, speed);
                    this.enemy[i].scaleX = 1;
                    this.enemy[i].body.offset.x = 0;
                }
                else if ((girl_Y <= 120 && girl_Y >= 0) && enemy_X <= 120 && enemy_X >= 0) {    //враг выше и слева
                    this.enemy[i].anims.play('enemies-go', true);
                    this.enemy[i].setVelocity(-speed, speed);
                    this.enemy[i].scaleX = -1;
                    this.enemy[i].body.offset.x = 14;
                }
                else if ((girl_Y <= 20 && girl_Y >= 0) && girl_X <= 120 && girl_X >= 0) {            //враг немного выше или = y и справа
                    this.enemy[i].anims.play('enemies-go', true);
                    this.enemy[i].setVelocity(speed, 0);
                    this.enemy[i].scaleX = 1;
                    this.enemy[i].body.offset.x = 0;
                }
                else if ((girl_Y <= 20 && girl_Y >= 0) && enemy_X <= 120 && enemy_X >= 0) {    //враг немного выше или = y и слева
                    this.enemy[i].anims.play('enemies-go', true);
                    this.enemy[i].setVelocity(-speed, 0);
                    this.enemy[i].scaleX = -1;
                    this.enemy[i].body.offset.x = 14;
                }
                else if ((enemy_Y <= 20 && enemy_Y >= 0) && girl_X <= 120 && girl_X >= 0) {            //враг немного ниже или = y и справа
                    this.enemy[i].anims.play('enemies-go', true);
                    this.enemy[i].setVelocity(speed, 0);
                    this.enemy[i].scaleX = 1;
                    this.enemy[i].body.offset.x = 0;
                }
                else if ((enemy_Y <= 20 && enemy_Y >= 0) && enemy_X <= 120 && enemy_X >= 0) {    //враг немного ниже или = y и слева
                    this.enemy[i].anims.play('enemies-go', true);
                    this.enemy[i].setVelocity(-speed, 0);
                    this.enemy[i].scaleX = -1;
                    this.enemy[i].body.offset.x = 14;
                } else if ((enemy_Y <= 120 && enemy_Y >= 0) && enemy_X <= 120 && enemy_X >= 0) {    //враг ниже и слева
                    this.enemy[i].anims.play('enemies-go', true);
                    this.enemy[i].setVelocity(-speed, -speed);
                    this.enemy[i].scaleX = -1;
                    this.enemy[i].body.offset.x = 14;
                }
                else if ((enemy_Y <= 120 && enemy_Y >= 0) && girl_X <= 120 && girl_X >= 0) {    //враг ниже и справа
                    this.enemy[i].anims.play('enemies-go', true);
                    this.enemy[i].setVelocity(speed, -speed);
                    this.enemy[i].scaleX = 1;
                    this.enemy[i].body.offset.x = 0;
                } else if ((girl_X <= 20 && girl_X >= 0) && girl_Y <= 120 && girl_Y >= 0) {    //враг немного справа по x и выше 
                    this.enemy[i].anims.play('enemies-go', true);
                    this.enemy[i].setVelocity(0, speed);
                    this.enemy[i].scaleX = -1;
                    this.enemy[i].body.offset.x = 0;
                }
                else if ((enemy_X <= 20 && enemy_X >= 0) && girl_Y <= 120 && girl_Y >= 0) {    //враг немного слева по x и выше 
                    this.enemy[i].anims.play('enemies-go', true);
                    this.enemy[i].setVelocity(0, speed);
                    this.enemy[i].scaleX = -1;
                    this.enemy[i].body.offset.x = 14;
                }
                else if ((girl_X <= 20 && girl_X >= 0) && enemy_Y <= 120 && enemy_Y >= 0) {    //враг немного справа по x и ниже 
                    this.enemy[i].anims.play('enemies-go', true);
                    this.enemy[i].setVelocity(0, -speed);
                    this.enemy[i].scaleX = -1;
                    this.enemy[i].body.offset.x = 0;
                }
                else if ((enemy_X <= 20 && enemy_X >= 0) && enemy_Y <= 120 && enemy_Y >= 0) {    //враг немного слева по x и ниже 
                    this.enemy[i].anims.play('enemies-go', true);
                    this.enemy[i].setVelocity(0, -speed);
                    this.enemy[i].scaleX = -1;
                    this.enemy[i].body.offset.x = 14;
                }
                else {
                    this.enemy[i].anims.play('enemies-idle', true);
                    this.enemy[i].setVelocity(0, 0);
                }
            }else {
                this.enemy[i].anims.play('enemies-idle', true);
                this.enemy[i].setVelocity(0, 0);
            }
        }
    }

    Pushing_After_Impact() {
        this.player.x += 30;
    }



}