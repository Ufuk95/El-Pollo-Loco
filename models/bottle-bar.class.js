class Bottlebar extends DrawableObject {
    BOTTLE_STATUS = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png',
    ];
    percentage = 100;


    constructor() {
        super();
        this.loadImages(this.BOTTLE_STATUS);
        this.x = 50;
        this.y = 100;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }

    // percentage(50);
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.BOTTLE_STATUS[this.resolveHealthImageIndex()]
        this.img = this.ImageCache[path];
    }

    /**
     * 
     * @returns breaks down the healthbar if you get damage
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
