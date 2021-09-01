class CharacterAnimation{

    CreateAnimation(game,girl){
        game.anims.create({
            key: 'girl-stop-down',
            frames: [{ key: 'girl', frame: 'run-down-3.png' }]
          })
        
          game.anims.create({
            key: 'girl-stop-up',
            frames: [{ key: 'girl', frame: 'run-up-3.png' }]
          })
        
          game.anims.create({
            key: 'girl-stop-side',
            frames: [{ key: 'girl', frame: 'run-side-3.png' }]
          })
        
          game.anims.create({
            key: 'girl-go-down',
            frames: game.anims.generateFrameNames('girl', { start: 1, end: 8, prefix: 'run-down-', suffix: '.png' }),
            repeat: -1,
            frameRate: 15
          });
        
          game.anims.create({
            key: 'girl-go-up',
            frames: game.anims.generateFrameNames('girl', { start: 1, end: 8, prefix: 'run-up-', suffix: '.png' }),
            repeat: -1,
            frameRate: 15
          });
        
          game.anims.create({
            key: 'girl-go-side',
            frames: game.anims.generateFrameNames('girl', { start: 1, end: 8, prefix: 'run-side-', suffix: '.png' }),
            repeat: -1,
            frameRate: 15
          });
        
          game.anims.create({
            key: 'girl-faint',
            frames: game.anims.generateFrameNames('girl', { start: 1, end: 4, prefix: 'faint-', suffix: '.png' }),
            repeat: 0,
            frameRate: 10
          });
        
          girl.anims.play('girl-stop-down', true);

    }
}