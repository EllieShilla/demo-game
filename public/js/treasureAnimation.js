function createTreasureAnimation(game){
    game.anims.create({
        key: 'close_treasure',
        frames: [{ key: 'treasure', frame: 'treasure1.png' }]
      })

    game.anims.create({
        key: 'open_treasure',
        frames: game.anims.generateFrameNames('treasure', { start: 2, end: 3, prefix: 'treasure', suffix: '.png' }),
        repeat: 0,
        frameRate: 2
      });
}