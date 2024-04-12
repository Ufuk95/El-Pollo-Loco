class ThrowableObject extends MovableObject {
    height = 80;
    width = 80;
    throwBottle = false;
    isBreaking = false;
    throw_audio = new Audio('../audio/throw.mp3');
    splash_audio = new Audio('../audio/glass.mp3')

    BOTTLE_ROTATION = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

    offset = { top: 15, bottom: 15, left: 15, right: 15 };

    constructor(x, y, direction) {
        super().loadImage('../img/6_salsa_bottle/bottle_rotation/rotation_sequences.gif');
        this.loadImages(this.BOTTLE_ROTATION);
        this.loadImages(this.BOTTLE_SPLASH);
        this.otherDirection = direction;
        this.x = x;
        this.y = y;
        this.throw();
        this.bottleIsRotating();
    }

    throw() {
        this.throwBottle = true;
        this.speedY = 20;
        this.applyGravity();
        if (this.otherDirection == true) {
            setInterval(() => {
                this.x -= 10;
            }, 40);
        } else {
            setInterval(() => {
                this.x += 10;
            }, 40);
        }
    }


    /**
   * Function to break and splash the bottle
   */
    breakAndSplash() {
        this.isBreaking = true;
        setInterval(() => {
            this.playAnimation(this.BOTTLE_SPLASH);
        }, 300)
        this.speedY = 0;
        this.speedX = 0;
        this.splash_audio.play();

    }

    bottleIsRotating() {
        setInterval(() => {
            this.playAnimation(this.BOTTLE_ROTATION);
        }, 80);
        this.throw_audio.play();
    }
}

