function CreateLayer(map) {
  tileset = map.addTilesetImage("Serene_Village_16x16", "tiles", 16, 16, 1, 2);
  tileset2 = map.addTilesetImage("tilesetPlains", "tiles2", 16, 16, 1, 2);
  tileset3 = map.addTilesetImage("TX_Props", "tiles3", 16, 16, 1, 2);
  tileset4 = map.addTilesetImage("0x72_16x16DungeonTileset.v4", "tiles4", 16, 16, 1, 2);

  dawnWater = map.createStaticLayer('dawnWater', tileset, 0, 0);
  waterLayer = map.createStaticLayer('water', tileset, 0, 0);
  groundLayer = map.createStaticLayer('ground', tileset, 0, 0);
  ground2Layer = map.createStaticLayer('ground2', tileset, 0, 0);
  ground3Layer = map.createStaticLayer('ground3', tileset, 0, 0);

  treesLayer = map.createStaticLayer('trees', tileset, 0, 0);
  waterLilies = map.createStaticLayer('water lilies', tileset2, 0, 0);

  houseLayer = map.createStaticLayer('house', tileset, 0, 0);
  trees2Layer = map.createStaticLayer('trees2', tileset, 0, 0);
  trees3Layer = map.createStaticLayer('trees3', tileset, 0, 0);
  trees4Layer = map.createStaticLayer('trees4', tileset, 0, 0);
  dangerousPlase = map.createStaticLayer('dangerousPlase', tileset3, 0, 0);
  dangerousPlase2 = map.createStaticLayer('dangerousPlase2', tileset3, 0, 0);
}

function SetCollision() {
  dangerousPlase.setCollisionByProperty({ collides: true });

  ground3Layer.setCollisionByProperty({ collides: true });
  houseLayer.setCollisionByProperty({ collides: true });
  waterLayer.setCollisionByProperty({ collides: true });
  dawnWater.setCollisionByProperty({ collides: true });
  treesLayer.setCollisionByProperty({ collides: true });
  trees2Layer.setCollisionByProperty({ collides: true });
  trees3Layer.setCollisionByProperty({ collides: true });
  trees4Layer.setCollisionByProperty({ collides: true });
}

function CollisionWithPlayer(game, player, treasure, enemies) {
  game.physics.add.collider(player, houseLayer);                     //физика столкновений
  game.physics.add.collider(player, waterLayer);
  game.physics.add.collider(player, dawnWater);
  game.physics.add.collider(player, ground3Layer);
  game.physics.add.collider(player, treesLayer);
  game.physics.add.collider(player, trees2Layer);
  game.physics.add.collider(player, trees3Layer);
  game.physics.add.collider(player, trees4Layer);
  game.physics.add.collider(player, dawnWater);
  game.physics.add.collider(player, dangerousPlase);
  // game.physics.add.collider(player, enemies);

  //game.physics.add.collider(player, treasure,PlayerCheastCollision);                 

  player.setDepth(10);
  houseLayer.setDepth(20);
  ground3Layer.setDepth(20);
  treesLayer.setDepth(20);
  trees2Layer.setDepth(20);
  trees3Layer.setDepth(20);
  trees4Layer.setDepth(20);
  dangerousPlase.setDepth(20);
  dangerousPlase2.setDepth(20);
}

function CollisionWithKnifes(game, knifes) {
  game.physics.add.collider(knifes, houseLayer, function (knifes) {
    knifes.destroy();
  });
  game.physics.add.collider(knifes, treesLayer, function (knifes) {
    knifes.destroy();
  });
  game.physics.add.collider(knifes, trees2Layer, function (knifes) {
    knifes.destroy();
  });
  game.physics.add.collider(knifes, trees3Layer, function (knifes) {
    knifes.destroy();
  });
  game.physics.add.collider(knifes, trees4Layer, function (knifes) {
    knifes.destroy();
  });
  game.physics.add.collider(knifes, dangerousPlase, function (knifes) {
    knifes.destroy();
  });
  game.physics.add.collider(knifes, ground3Layer, function (knifes) {
    knifes.destroy();
  });
}

function CollisionWithEnemy(game, enemies) {
  game.physics.add.collider(enemies, houseLayer);                     //физика столкновений
  game.physics.add.collider(enemies, waterLayer);
  game.physics.add.collider(enemies, dawnWater);
  game.physics.add.collider(enemies, ground3Layer);
  game.physics.add.collider(enemies, treesLayer);
  game.physics.add.collider(enemies, trees2Layer);
  game.physics.add.collider(enemies, trees3Layer);
  game.physics.add.collider(enemies, trees4Layer);
  game.physics.add.collider(enemies, dawnWater);
  game.physics.add.collider(enemies, dangerousPlase);

  enemies.setDepth(10);
}


function CheckCollision(game) {
  debugGraphics = game.add.graphics().setAlpha(0.75);
  treesLayer.renderDebug(debugGraphics, {
    tileColor: null,
    collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
    faceColor: new Phaser.Display.Color(40, 39, 37, 255)
  });

  debugGraphics2 = game.add.graphics().setAlpha(0.75);
  trees2Layer.renderDebug(debugGraphics2, {
    tileColor: null,
    collidingTileColor: new Phaser.Display.Color(242, 48, 117, 255),
    faceColor: new Phaser.Display.Color(40, 39, 37, 255)
  });

  debugGraphics3 = game.add.graphics().setAlpha(0.75);
  trees3Layer.renderDebug(debugGraphics3, {
    tileColor: null,
    collidingTileColor: new Phaser.Display.Color(173, 48, 241, 255),
    faceColor: new Phaser.Display.Color(40, 39, 37, 255)
  });

  debugGraphics4 = game.add.graphics().setAlpha(0.75);
  trees4Layer.renderDebug(debugGraphics4, {
    tileColor: null,
    collidingTileColor: new Phaser.Display.Color(48, 77, 240, 255),
    faceColor: new Phaser.Display.Color(40, 39, 37, 255)
  });


  debugGraphics5 = game.add.graphics().setAlpha(0.75);
  ground3Layer.renderDebug(debugGraphics4, {
    tileColor: null,
    collidingTileColor: new Phaser.Display.Color(48, 77, 240, 255),
    faceColor: new Phaser.Display.Color(40, 39, 37, 255)
  });

  debugGraphics6 = game.add.graphics().setAlpha(0.75);
  dangerousPlase.renderDebug(debugGraphics4, {
    tileColor: null,
    collidingTileColor: new Phaser.Display.Color(255, 255, 102, 255),
    faceColor: new Phaser.Display.Color(40, 39, 37, 255)
  });
}