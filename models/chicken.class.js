class Chicken extends MovableObject{
    y = 360;
    height = 60;
    width = 75;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    

    constructor(){
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);

        this.speed = 0.2 + Math.random() * 0.25

        this.animate();

        this.x = 200 + Math.random() * 500;
    }

    animate() {

        setInterval(() => {
            this.moveLeft()
        }, 1000 / 60);


        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING)
        }, 130);
    }
}