class Bottle extends DrawableObject{


    constructor(){
        super();
        this.loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x = 300 + Math.random() * (2 * 719 - 100);
        this.y = 380;
        this.width = 70;
        this.height = 70;
    }

}