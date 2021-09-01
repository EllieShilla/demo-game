var cursors;
var keys;
var girl;
var count = 3;
var Room_Name = "1";
var chests;
var char;
var knifes;
var enemies;
var enemyGroup = [];
var rooms;
var map;
var roomInt = 0;
var EnemiesMove;
var firstUpdate = 1;
var health;
var deathHeart;
var Count_Of_Knives;
var pause;
var menu;
var selectCursor;

export default class sceneGame extends Phaser.Scene {
  constructor() {
    super('game-scene')
  }

  create() {
    this.backgroundMusic = this.sound.add('backgroundMusic', {        //music
      volume: 0.5,
      loop: true,
      detune: 25
    });
    this.backgroundMusic.play();

    map = this.make.tilemap({ key: 'cart2' })
    CreateLayer(map);
    SetCollision();
    // CheckCollision(this);

    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels); //установка границ мира

    keys = this.input.keyboard.addKeys('W,S,A,D,Shift,E,ESC,P');                               //добавление клавиш для игры
    cursors = this.input.keyboard.createCursorKeys();

    let spawnPoint = map.objects[3].objects;                                                      //точка появления героя
    girl = this.physics.add.sprite(spawnPoint[0].x, spawnPoint[0].y, 'girl', 'run-down-3.png');  //создание героя
    girl.body.setSize(girl.width * 0.6, girl.height * 0.7);


    let NPC_Data = CreateNpc(map);
    this.npc = this.physics.add.group({ key: 'npc', repeat: 6 });
    NPC_Data.forEach(item => {
      const { x, y, name } = item
      this.npc.create(x, y, name)
    });

    let animation = new CharacterAnimation();                         //анимация героя
    animation.CreateAnimation(this, girl);

    this.cameras.main.startFollow(girl);      // камера следует за игроком     
    this.cameras.main.setZoom(2);            //zoom


    createTreasureAnimation(this);                                                       //создание сундуков
    chests = this.physics.add.staticGroup();
    const chestLayer = map.getObjectLayer('Chests');
    chestLayer.objects.forEach(chestObj => {
      chests.get(chestObj.x - chestObj.width * -0.5, chestObj.y - chestObj.height * 0.6, 'treasure');
    });

    knifes = this.physics.add.group({                                                    //создание оружия дальнего боя
      classType: Phaser.Physics.Arcade.Image
    });


    let EnemySpawnPoint = map.objects[2].objects;                                       //создание врагов
    enemies = this.physics.add.group();
    for (let i = 0; i < 7; i++) {
      enemyGroup[i] = this.physics.add.sprite(EnemySpawnPoint[i].x, EnemySpawnPoint[i].y, 'enemies');
      enemyGroup[i].body.setSize(enemyGroup[i].width * 1, enemyGroup[i].height * 0.9);
      createMove(this, enemyGroup[i]);
    }

    for (let i = 0; i < enemyGroup.length; i++) {
      enemies.add(enemyGroup[i]);
    }

    CollisionWithPlayer(this, girl, chests, enemies, this.npc);                                         //колизия героя, оружия, окружения 
    CollisionWithKnifes(this, knifes);
    CollisionWithEnemy(this, enemies);
    this.physics.add.collider(girl, chests, PlayerCheastCollision);
    AttackCollision(this, knifes, girl, enemies);                                      //колизия оружия, героя и врагов

    rooms = [];                                                                         //разделение игровой области на участи и перемещение камеры и героя по ним
    map.findObject('Rooms', function (object) {
      if (object.type === 'room') {
        rooms.push(object);
      }
    }, this);

    char = new CharacterMove(girl, keys, knifes, rooms, "1", this);
    EnemiesMove = new EnemyAttack(this, enemies.children.entries, girl);

    health = this.add.group({ key: 'fullH', frame: 0, repeat: 3 });
    deathHeart = this.add.group({ key: 'emptyH', frame: 0, repeat: 3 });
    Count_Of_Knives = this.add.group({ key: 'KnifeTextSize', frame: 0, repeat: 0 });
    pause = new Pause(this.scene, keys, girl);
    menu = new Menu(this.scene, keys);
    setInformForFight(health, count, this, this.scene);
    CreateSound();

    selectCursor = new SelectionCursor(this, girl, keys, this.npc, NPC_Data);
    selectCursor.CreateRectangle();
    selectCursor.createTextBox();
  }


  update() {
    if (selectCursor.DialogChecker()) {
      char.CharAnimation(-2, cursors, chests)
    } else {
      let roomBuff = char.CharAnimation(GetCountofLives(), cursors, chests);
      if (roomBuff != undefined) {


        if (Room_Name != roomBuff) {       //определение зоны в которой находится игрок
          let roomObj;
          for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].name == roomBuff) {
              roomObj = rooms[i];
              Room_Name = rooms[i].name;
              roomInt = i;
              break;

            }
          }
          this.cameras.main.fadeIn(1000, 0);
        }
        if (firstUpdate == 1 && Room_Name === '1') {
          GetHeart(this.cameras.cameras[0].worldView, health);
          GetKnifes(this, Count_Of_Knives, char);
          firstUpdate++;
        }
        char.characterAttac(GetCountofLives(), cursors);
        selectCursor.UpdateRectangle();
        this.cameras.main.setBounds(rooms[roomInt].x, rooms[roomInt].y, rooms[roomInt].width, rooms[roomInt].height);

        EnemiesMove.Attack(GetCountofLives());

        GetDeathHeart(this.cameras.cameras[0].worldView, deathHeart);   //отображение кол-во жизней
        GetHeart(this.cameras.cameras[0].worldView, health);            //-// 
        GetKnifes(this, Count_Of_Knives, char);
        CheckEnemy(enemies,this.backgroundMusic);

        pause.PauseGame();
        menu.ToMainMenu();
      }
    }
    char.velocity();

  }
}

function PlayerCheastCollision(obj1, obj2) {                                 //столкновение игрока с сундуками
  char.GetTreasure(count, obj2);
}

//   node app.js
//npm install --global tile-extruder
//PS D:\game2\public\assets\map> tile-extruder -w 16 -h 16 -i tilesetPlains.png -o tilesetPlains.png-extruded.png
