function GetHeart(game, health) {
    for (let i = 0; i < health.children.size; i++)
      health.children.entries[health.children.size - 1].destroy();
    health.createMultiple({
      key: 'fullH',
      setXY: {
        x: game.x + 20,
        y: game.y + 20,
        stepX: 30
      },
      quantity: GetCountofLives()
    });
    health.setDepth(20);
  }
  
  function GetDeathHeart(game, deathHeart) {
    for (let i = 0; i < deathHeart.children.size; i++)
      deathHeart.children.entries[deathHeart.children.size - 1].destroy();
    deathHeart.createMultiple({
      key: 'emptyH',
      setXY: {
        x: game.x + 20,
        y: game.y + 20,
        stepX: 30
      },
      quantity: 3
    });
    deathHeart.setDepth(20);
  }
  
  function GetKnifes(game, Count_Of_Knives,char) {
    for (let i = 0; i < Count_Of_Knives.children.size; i++)
      Count_Of_Knives.children.entries[Count_Of_Knives.children.size - 1].destroy();
    Count_Of_Knives.createMultiple({
      key: 'KnifeTextSize',
      setXY: {
        x: game.cameras.cameras[0].worldView.x + 23,
        y: game.cameras.cameras[0].worldView.y + 60,
      },
      quantity: 1
    });
    let text = game.add.text(game.cameras.cameras[0].worldView.x + 45, game.cameras.cameras[0].worldView.y + 40, char.GetKnifes(), {
      fontFamily: 'Quicksand',
      fontSize: '25px',
      color: '#191818',
      strokeThickness: 2,
    });
    Count_Of_Knives.add(text);
    Count_Of_Knives.setDepth(20);
  }