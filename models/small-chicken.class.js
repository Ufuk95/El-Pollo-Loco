class SmallChicken extends MovableObject {
    isDead = false;
    speed = 3;
    speedY = 3
    height = 50;
    width = 50;
    y = 375

    offset = {
        left: 10,
        top: 10,
        right: 10,
        bottom: 10
    }


    SMALLIMAGES_WALK = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ]

    SMALLIMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ]


    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png')
        this.loadImages(this.SMALLIMAGES_WALK);
        this.loadImages(this.SMALLIMAGES_DEAD);
        this.x = 300 + Math.random() * 2000;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
        
    }

    /**
     * all the small chickens are moving forwards by jumping
     */
    chickenJump() {
        if (this.y <= 250) {
            this.speedY = Math.abs(this.speedY);
        }
        if (this.y >= 360) {
            this.speedY = -Math.abs(this.speedY);
        }
        this.y += this.speedY;
    }

    /**
     * animation function for the small chicken
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.chickenJump();
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead === false) {
                this.playAnimation(this.SMALLIMAGES_WALK);
            }
            if (this.isDead === true) {
                this.playAnimation(this.SMALLIMAGES_DEAD);
            }
        }, 200);
    }

}