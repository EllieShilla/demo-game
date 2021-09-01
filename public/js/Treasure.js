class Treasure {
    constructor(treasure,game) {
        this.treasure = treasure;
        this.treasure.play('close_treasure');
        this.knifes = 0;
        this.heart = 0;
        this.game=game;
    }

    getCoins() {
        console.log(Phaser.Math.Between(20, 100));
    }

    openTreasure() {
        if (this.treasure !== null) {
            this.treasure.anims.play('open_treasure');
            let chanse = this.Hearts_Or_Weapon();

            if (chanse % 2 == 0 && chanse != 4) {
                PlusHeart();
                // console.log('heart'+ chanse);
            } else {
                this.knifes += this.Count_Of_Weapon();
                // console.log('knifes'+ chanse);

            }
        }
    }

    Hearts_Or_Weapon() {
        return Phaser.Math.Between(1, 5);
    }

    Count_Of_Weapon() {
        let num = Phaser.Math.Between(1, 3);
        console.log(num);
        return num;
    }

    GetKnifesNum() {
        return this.knifes;
    }

    SetKnifesNum(knifes) {
        this.knifes = knifes;
    }

    GetHeart() {
        return this.heart;
    }


}
