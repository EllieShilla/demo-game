function CreateNpc(map){
    NPC_Data = [
      {
        name: 'Molly',
        phrace: ['Hello! You haven\'t seen my son, Joe? If you\nsee him, tell him to go home quickly!','Thanks'],
        answer: ['I will look for him',''],
        cancel:['','Bye'],
        sound: 'MollySound',
        x: map.objects[4].objects[0].x,
        y: map.objects[4].objects[0].y
      },
      {
        name: 'Victor',
        phrace: ['Hello!'],
        answer: [''],
        cancel:['Hi!'],
        sound: 'VictorSound',
        x: map.objects[4].objects[3].x,
        y: map.objects[4].objects[3].y
      },
      {
        name: 'Joe',
        phrace:['How did you find me? I thought it was a secret\nplace. Don\'t tell me that my mom sent\nyou','I understood you','how did you get here? I know a shortcut.\nBut you are very big for him'],
        answer: ['She is worrying','By the way, there are monsters everywhere.So',''],
        cancel:['','','Bye'],
        sound: 'JoeSound',
        x: map.objects[4].objects[2].x,
        y: map.objects[4].objects[2].y
      },
      {
        name: 'Granny',
        phrace: ['Good morning. The weather is great today\nisn\'t it'],
        answer: [''],
        cancel:['Bye'],
        sound: 'GrannySound',
        x: map.objects[4].objects[5].x,
        y: map.objects[4].objects[5].y
      },
      {
        name: 'Mr.Rogers',
        phrace: ['Did you go through monsters and stay alive?','Yes, Yes. As the current head of this village,\nI give you the task...','...of defeating all the monsters','Honor and glory, of course!'],
        answer: ['Yes and Hello','hmm','And what do I get for this?',''],
        cancel:['','','','All right'],
        sound: 'Mr.RogersSound',
        x: map.objects[4].objects[4].x,
        y: map.objects[4].objects[4].y
      },
      {
        name: 'Rebecca',
        phrace: ['I\'m so sleepy','Hmmm... You are not local.\nHow did you get here?','You are from another village?','It was stupid to go through all those monsters\nto get here'],
        answer: ['Hello','I just came','Yes',''],
        cancel:['','','','I\'ll just leave'],
        sound: 'RebeccaSound',
        x: map.objects[4].objects[1].x,
        y: map.objects[4].objects[1].y
      }
    ];

    return NPC_Data;
  }