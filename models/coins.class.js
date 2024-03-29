class Coin extends DrawableObject{


    constructor(){
        super();
        this.loadImage('img/8_coin/coin_1.png');
        this.x = 300 + Math.random() * (2 * 719 - 100);
        this.y = 380;
        this.width = 50;
        this.height = 50;
    }

    offset = {
        top: 5,
        left: 5,
        right: 5,
        bottom: 5,
    }

}