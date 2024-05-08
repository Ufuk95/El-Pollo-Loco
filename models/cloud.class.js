class Cloud extends MovableObject{
    y = 15;
    width = 400;
    height = 250;
    speed = 3;
    constructor(){
        super().loadImage('../img/5_background/layers/4_clouds/1.png');
        this.x = (Math.random() * 500);
        this.animate();
        
    }

    /**
     * animation of the sky
     */
    animate(){
        this.moveLeft();
    }

}