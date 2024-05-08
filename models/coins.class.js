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

    /**
     * random position of all coins in the game
     */
    randomCoinPosition(){
        this.x = 350 + Math.random() * 1500;
        this.y = 330 - Math.random() * 150;
    }


    /**
     * animation function of the coins
     */
    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
          }, 250);
    }

}