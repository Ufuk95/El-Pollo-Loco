class Endboss extends MovableObject {
    angrySpeed = 3
    y = 50;
    height = 400;
    width = 300;
    isDeadAnimationPlayed = false;
    endbossAttack = false;
    inDamage = false;
    angry = false;
    isAlert = false;
    isDead = false;
    endbossMoveLeft = false;
    endbossEnergy = 100;
    offset = {
        top: 150,
        bottom: 80,
        left: 30,
        right: 30
    }



    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    IMAGES_ALERT = [
        '../img/4_enemie_boss_chicken/2_alert/G5.png',
        '../img/4_enemie_boss_chicken/2_alert/G6.png',
        '../img/4_enemie_boss_chicken/2_alert/G7.png',
        '../img/4_enemie_boss_chicken/2_alert/G8.png',
        '../img/4_enemie_boss_chicken/2_alert/G9.png',
        '../img/4_enemie_boss_chicken/2_alert/G10.png',
        '../img/4_enemie_boss_chicken/2_alert/G11.png',
        '../img/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    IMAGES_HURT = [
        "img/4_enemie_boss_chicken/4_hurt/G21.png",
        "img/4_enemie_boss_chicken/4_hurt/G22.png",
        "img/4_enemie_boss_chicken/4_hurt/G23.png",
    ];

    IMAGES_DEAD = [
        "img/4_enemie_boss_chicken/5_dead/G24.png",
        "img/4_enemie_boss_chicken/5_dead/G25.png",
        "img/4_enemie_boss_chicken/5_dead/G26.png",
    ];

    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_ALERT);
        this.endbossAttack = false;
        this.animate();
        this.x = 3 * 719;
    }


    takesDamageFromBottle() {
        this.inDamage = true;
        setTimeout(() => {
            this.inDamage = false
        }, 500);
    }

    endbossLosingEnergy() {
        this.endbossEnergy -= 20;
        if (this.endbossEnergy <= 0) {
            this.endbossEnergy = 0;
            this.endbossIsDead();
        }
        this.angryEndboss();
    }

    angryEndboss() {
        if (this.endbossEnergy <= 20) {
            this.isAlert = true;
            this.endbossMoveLeft = false;

            setTimeout(() => {
                this.isAlert = false;
                this.endbossMoveLeft = true;
            }, 2000)
        }
    }

    /**
    * move the endboss angry to the left
    *
    */
    endbossMovingLeft() {
        this.x -= this.angrySpeed;
    }


    /**
   * Checks if the Endboss is dead based on the energy level.
   */
    endbossIsDead() {
        if (this.endbossEnergy <= 0) {
            this.isDead = true;
        }
    }

    endbossMovementSetup() {
        setInterval(() => {
            if (this.isAlert) {
                this.speed = 0;
                return;
            }
        }, 1000 / 25)
    }

    updateCurrentState() {
        if (this.isDead) {
            this.playAnimation(this.IMAGES_DEAD);
        } else if (this.angry) {
            this.playAnimation(this.IMAGES_ATTACK);
        } else if (this.isAlert) {
            this.playAnimation(this.IMAGES_ALERT);
        } else if (this.inDamage) {
            this.playAnimation(this.IMAGES_HURT);
        } else {
            this.playAnimation(this.IMAGES_WALKING);
        }
    }



    animate() {
        setInterval(() => {
            this.updateCurrentState();
        }, 9000 / 60);
        
    }

    // animate() {
    //     this.endbossMovementSetup();
    //     this.updateCurrentState();
    // }
}