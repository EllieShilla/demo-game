var lifes;
var count;
var game;
var scene;


function AttackCollision(games, knifes, player, enemies) {
    games.physics.add.collider(enemies, knifes, Enemy_And_Knife_Destroy, null, games);  //дальний бой
    // games.physics.add.overlap(enemies, player, Enemy_Destroy, null, games);  //ближний бой
    games.physics.add.collider(enemies, player, Enemy_Attack, null, games);  //ближний бой
}

function GetCountofLives() {
    return count;
}

function setInformForFight(health, countofLifes, games, scenes) {
    lifes = health;
    count = countofLifes;
    game = games;
    scene = scenes;
}

function CreateSound(){

    damagePlayerMusic = game.sound.add('damagePlayer', {        //music
        volume: 0.5,
        loop: false,
        detune: 25
      });

    deathPlayer = game.sound.add('deathPlayer', {        
        volume: 0.5,
        loop: false,
        detune: 25
      });
}

function Enemy_And_Knife_Destroy(enemy, knife) {      //при столконовении с оружием враг и оружие уничтожаются
    enemy.destroy();
    knife.destroy();
}

function DeathScreen() {
    scene.launch('death-scene')
}

function PlusHeart() {                          //добавление жизней     
    if (count < 3 && count >= 0) {
        count++;
    }
}

function Enemy_Attack(player, enemy) {
    // enemy.disableBody(true, true);
    //enemy.destroy();

    if (count == 1) {                                           //анимация при получении ранения персонажем
        player.anims.play('girl-faint', true);
        player.setVelocity(0, 0);
        enemy.anims.play('enemies-idle', true);
        enemy.setVelocity(0, 0);
        count--;
        lifes.children.entries[lifes.children.size - 1].destroy();
        deathPlayer.play();
    }
    else if (count > 1) {
        if ((enemy.body.velocity.x > 0 && enemy.body.velocity.y > 0) || (enemy.body.velocity.x < 0 && enemy.body.velocity.y > 0)) {
            player.anims.play('girl-faint', true);
            player.setVelocity(0, 0);
            enemy.anims.play('enemies-idle', true);
            enemy.setVelocity(0, 0);
        }
        else if ((enemy.body.velocity.x > 0 && enemy.body.velocity.y < 0) || (enemy.body.velocity.x < 0 && enemy.body.velocity.y < 0)) {
            player.anims.play('girl-faint', true);
            player.setVelocity(0, -100);
            enemy.anims.play('enemies-idle', true);
            enemy.setVelocity(0, 0);
        }
        else if (enemy.body.velocity.x > 0) {
            player.anims.play('girl-faint', true);
            player.setVelocity(100, 0);
            enemy.anims.play('enemies-idle', true);
            enemy.setVelocity(0, 0);
        } else if (enemy.body.velocity.x < 0) {
            player.anims.play('girl-faint', true);
            player.setVelocity(-100, 0);
            enemy.anims.play('enemies-idle', true);
            enemy.setVelocity(0, 0);
        } else if (enemy.body.velocity.y > 0) {
            player.anims.play('girl-faint', true);
            player.setVelocity(0, 100);
            enemy.anims.play('enemies-idle', true);
            enemy.setVelocity(0, 0);
        }
        else if (enemy.body.velocity.y < 0) {
            player.anims.play('girl-faint', true);
            player.setVelocity(0, -100);
            enemy.anims.play('enemies-idle', true);
            enemy.setVelocity(0, 0);
        }
        lifes.children.entries[lifes.children.size - 1].destroy();
        damagePlayerMusic.play();

    }
    --count;

    if (count == -1) {          //при смерти персонажа включается соответствующая сцена
        DeathScreen();
    }

}


