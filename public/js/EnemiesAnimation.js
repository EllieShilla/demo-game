 function createMove(game,enemy){
        game.anims.create({
            key: 'enemies-run',
            frames: [{ key: 'enemies', frame: 'lizard_m_run_anim_f-0.png' }]
        });
    
        game.anims.create({
            key: 'enemies-go',
            frames: game.anims.generateFrameNames('enemies', { start: 0, end: 3, prefix: 'lizard_m_run_anim_f-', suffix: '.png' }),
            repeat: -1,
            frameRate: 10
        });
    
        game.anims.create({
            key: 'enemies-idle',
            frames: game.anims.generateFrameNames('enemies', { start: 0, end: 3, prefix: 'lizard_m_idle_anim_f-', suffix: '.png' }),
            repeat: -1,
            frameRate: 10
        });
    
        enemy.anims.play('enemies-idle', true);
    }
