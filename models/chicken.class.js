class Chicken extends MovableObject {
    y = 360;
    height = 65;
    width = 80;
    isDead = false;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
    ];

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);

        
        this.speed = 0.2 + Math.random() * 0.25
        this.x = 300 + Math.random() * 1500;
        this.animate();

        
    }

    animate() {

        setInterval(() => {
            this.moveLeft()
        }, 1000 / 60);


        setInterval(() => {
            if (this.isDead === false) {
                this.playAnimation(this.IMAGES_WALKING)
            }
            if (this.isDead === true) {
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 130);
    }
}