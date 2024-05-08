class Character extends MovableObject {
    y = 75;  //175 ist gut
    height = 250;
    speed = 10;
    timeStamp = 0;
    idleTimer = 0;
    deadAnimationPlayed = false;
    world;
    walking_audio = new Audio('../audio/walking.mp3');
    jumping_audio = new Audio('../audio/jump.mp3');

    offset = {
        top: 120,
        bottom: 10,
        left: 20,
        right: 25
    }

    IMAGES_WALKING = [
        '../img/2_character_pepe/2_walk/W-21.png',
        '../img/2_character_pepe/2_walk/W-22.png',
        '../img/2_character_pepe/2_walk/W-23.png',
        '../img/2_character_pepe/2_walk/W-24.png',
        '../img/2_character_pepe/2_walk/W-25.png',
        '../img/2_character_pepe/2_walk/W-26.png'
    ];
    IMAGES_JUMPING = [
        '../img/2_character_pepe/3_jump/J-31.png',
        '../img/2_character_pepe/3_jump/J-32.png',
        '../img/2_character_pepe/3_jump/J-33.png',
        '../img/2_character_pepe/3_jump/J-34.png',
        '../img/2_character_pepe/3_jump/J-35.png',
        '../img/2_character_pepe/3_jump/J-36.png',
        '../img/2_character_pepe/3_jump/J-37.png',
        '../img/2_character_pepe/3_jump/J-38.png',
        '../img/2_character_pepe/3_jump/J-39.png'
    ];
    IMAGES_DEAD = [
        '../img/2_character_pepe/5_dead/D-51.png',
        '../img/2_character_pepe/5_dead/D-52.png',
        '../img/2_character_pepe/5_dead/D-53.png',
        '../img/2_character_pepe/5_dead/D-54.png',
        '../img/2_character_pepe/5_dead/D-55.png',
        '../img/2_character_pepe/5_dead/D-56.png',
        '../img/2_character_pepe/5_dead/D-57.png'
    ];

    IMAGES_HURT = [
        '../img/2_character_pepe/4_hurt/H-41.png',
        '../img/2_character_pepe/4_hurt/H-42.png',
        '../img/2_character_pepe/4_hurt/H-43.png'
    ];

    IMAGES_IDLE = [
        "img/2_character_pepe/1_idle/idle/I-1.png",
        "img/2_character_pepe/1_idle/idle/I-2.png",
        "img/2_character_pepe/1_idle/idle/I-3.png",
        "img/2_character_pepe/1_idle/idle/I-4.png",
        "img/2_character_pepe/1_idle/idle/I-5.png",
        "img/2_character_pepe/1_idle/idle/I-6.png",
        "img/2_character_pepe/1_idle/idle/I-7.png",
        "img/2_character_pepe/1_idle/idle/I-8.png",
        "img/2_character_pepe/1_idle/idle/I-9.png",
        "img/2_character_pepe/1_idle/idle/I-10.png",
    ];

    IMAGES_LONG_IDLE = [
        "img/2_character_pepe/1_idle/long_idle/I-11.png",
        "img/2_character_pepe/1_idle/long_idle/I-12.png",
        "img/2_character_pepe/1_idle/long_idle/I-13.png",
        "img/2_character_pepe/1_idle/long_idle/I-14.png",
        "img/2_character_pepe/1_idle/long_idle/I-15.png",
        "img/2_character_pepe/1_idle/long_idle/I-16.png",
        "img/2_character_pepe/1_idle/long_idle/I-17.png",
        "img/2_character_pepe/1_idle/long_idle/I-18.png",
        "img/2_character_pepe/1_idle/long_idle/I-19.png",
        "img/2_character_pepe/1_idle/long_idle/I-20.png",
    ];



    constructor() {
        super().loadImage('../img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
    }


    /**
     * function to animate the main character pepe
     */
    animate() {
        this.pepeKeyboardControlling();
        this.pepeFallsAsleep();
        this.pepeAnimation();
    }


    /**
     * function for all the keyboard controll of pepe
     */
    pepeKeyboardControlling() {
        setInterval(() => {
            // this.walking_audio.pause();
            this.pepeMovesToTheLeft();
            this.pepeMovesToTheRight();
            this.pepeJumps();
            this.pepeThrowsBottle();
            this.world.camera_x = -this.x + 75;
        }, 1000 / 30)
    }


    /**
     * function to let pepe move to the left side
     */
    pepeMovesToTheLeft() {
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.moveLeft();
            this.otherDirection = true;
            this.walking_audio.play();
            this.idleTimer = 0;
        }
    }


    /**
     * function to let pepe move to the right side
     */
    pepeMovesToTheRight() {
        if (this.world.keyboard.RIGHT && this.x <= this.world.level.level_end_x) {
            this.moveRight();
            this.otherDirection = false;
            this.walking_audio.play();
            this.idleTimer = 0;
        }
    }


    /**
     * function to let pepe jump
     */
    pepeJumps() {
        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jumping_audio.play();
            this.jump();
            this.idleTimer = 0;
        }
    }


    /**
     * function to let pepe throw the salsa bottle
     */
    pepeThrowsBottle() {
        if (this.world.keyboard.D) {
            this.idleTimer = 0;
            if (!this.isDead()) {
                this.loadImage(this.IMAGES_WALKING[0])
            }
        }
    }

    /**
     * function if pepe does not move for couple of seconds he falls asleep
     */
    pepeFallsAsleep() {
        setInterval(() => {
            this.pepeIsAFK();
            this.pepesSleepingTimerGoesUp();
        }, 100);
    }


    /**
     * pepe does not move
     */
    pepeIsAFK() {
        if (
            !this.world.keyboard.SPACE &&
            !this.world.keyboard.RIGHT &&
            !this.world.keyboard.LEFT &&
            !this.world.keyboard.D
        ) {
            this.idleTimer += 1;
        }
    }


    /**
     * pepes timer goes up if hes not moving
     */
    pepesSleepingTimerGoesUp() {
        if (!this.isDead()) {
            if (this.idleTimer >= 60) {
                this.playAnimation(this.IMAGES_LONG_IDLE);
            } else if (this.idleTimer >= 1) {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }
    }


    /**
     * all of pepes animation
     */
    pepeAnimation() {
        setInterval(() => {
            if (this.isDead(this.energy)) {
                this.playDeathAnimation();
                setTimeout(() => {
                    gameOver();
                }, 1000);
            } else if (this.isAboveGround()) {
                this.playJumpAnimation();
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playWalkAnimation();
            } else if (this.isHurt()) {
                this.playHurtAnimation();
            }
        }, 100);
    }


    /**
     * pepes DEATH animation
     */
    playDeathAnimation() {
        if (!this.deadAnimationPlayed) {
            this.playAnimation(this.IMAGES_DEAD);
            this.deadAnimationPlayed = true;
        }
    }


    /**
     * pepes JUMP animation
     */
    playJumpAnimation() {
        //jump animation
        this.playAnimation(this.IMAGES_JUMPING);
        this.setNewTimeStamp();
    }


    /**
     * pepes WALK animation
     */
    playWalkAnimation() {
        //Walk animation
        this.playAnimation(this.IMAGES_WALKING);
        this.setNewTimeStamp();
    }


    /**
     * pepes HURT animation
     */
    playHurtAnimation() {
        this.playAnimation(this.IMAGES_HURT);
        this.setNewTimeStamp();
        this.idleTimer = 0;
    }


    /**
     * Set a new time passed by assigning the current timestamp to the 'timeStamp' property.
     */
    setNewTimeStamp() {
        this.timeStamp = new Date().getTime();
    }

}