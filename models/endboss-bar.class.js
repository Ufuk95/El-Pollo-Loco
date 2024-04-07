class EndbossBar extends MovableObject {
    ENDBOSS_STATUS = [
        "img/7_statusbars/2_statusbar_endboss/green/green0.png",
        "img/7_statusbars/2_statusbar_endboss/green/green20.png",
        "img/7_statusbars/2_statusbar_endboss/green/green40.png",
        "img/7_statusbars/2_statusbar_endboss/green/green60.png",
        "img/7_statusbars/2_statusbar_endboss/green/green80.png",
        "img/7_statusbars/2_statusbar_endboss/green/green100.png",
      ];
      percentage = 100;


    constructor() {
        super();
        this.loadImages(this.ENDBOSS_STATUS);
        this.x = 480;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(this.percentage);
    }

    // percentage(50);
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.ENDBOSS_STATUS[this.resolveHealthImageIndex()]
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