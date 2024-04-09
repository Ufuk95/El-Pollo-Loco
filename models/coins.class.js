class Coin extends MovableObject{
 
    width = 150;
    height = 150;
    
    IMAGES_COINS = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ]


    constructor(){
        super();
        this.loadImage(this.IMAGES_COINS[0]);
        this.loadImages(this.IMAGES_COINS);
        this.randomCoinPosition();
        this.animate();

    }

    offset = {
        top: 55,
        left: 55,
        right: 55,
        bottom: 55,
    }

    randomCoinPosition(){
        this.x = 400 + Math.random() * (2 * 719 - 100);
        this.y = 330 - Math.random() * 150;
    }

    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
          }, 300);
    }

}