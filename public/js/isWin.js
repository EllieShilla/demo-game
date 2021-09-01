function CheckEnemy(enemies,music){
    if(enemies.children.entries.length==0){
        music.stop();
        this.scene.launch('victory-scene')
        this.scene.pause('game-scene');
    }
}