class Coinbar extends DrawableObject{
    COIN_STATUS = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
    ];

    percentage = 100;


    constructor() {
        super();
        this.loadImages(this.COIN_STATUS);
        this.x = 50;
        this.y = 50;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }

    /**
     * percentage of every bar in the game
     * 
     * @param {number} percentage - 0 - 100 %
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.COIN_STATUS[this.resolveHealthImageIndex()]
        this.img = this.ImageCache[path];
    }

    /**
     * 
     * function to rise the bottlebar 
     */
    resolveHealthImageIndex() {
        if (this.percentage == 0) {
            return 0;
        } else if (this.percentage == 20) {
            return 1;
        } else if (this.percentage == 40) {
            return 2;
        } else if (this.percentage == 60) {
            return 3;
        } else if (this.percentage == 80) {
            return 4;
        } else {
            return 5;
        }
    }
}