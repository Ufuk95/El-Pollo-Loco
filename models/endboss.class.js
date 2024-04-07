class Endboss extends MovableObject {

    y = 50;
    height = 400;
    width = 300;
    isDeadAnimationPlayed = false;

    offset = {
        top: 150,
        bottom: 80,
        left: 30,
        right: 30
    }
    endbossEnergy = 100;
    IMAGES_WALKING = [
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


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
        this.x = 3 * 719;
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 130);
    }

    // animate() {
    //     setInterval(() => {
    //         if (this.isHurt()) {
    //             this.playAnimation(this.IMAGES_HURT);
    //         } else if (this.isDead(this.endbossEnergy)) {
    //             this.playDeathAnimation();
    //         } else {
    //             this.playAnimation(this.IMAGES_WALKING);
    //         }
    //     }, 150);
    // }
}