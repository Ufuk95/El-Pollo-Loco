class ThrowableObject  extends MovableObject{
    height = 80;
    width = 80;
    throwBottle = false;
    bottleSplash = false;
    isBreaking = false;
    throw_audio = new Audio('../audio/throw.mp3');


    bottle_rotation = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    bottle_splash = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

    offset = { top: 15, bottom: 15, left: 15, right: 15};

    constructor(x, y, direction){
        super().loadImage('../img/6_salsa_bottle/bottle_rotation/rotation_sequences.gif');
        this.loadImages(this.bottle_rotation);
        this.loadImages(this.bottle_splash);
        this.otherDirection = direction;
        this.x = x;
        this.y = y;
        this.throw();
        // this.bottleIsSplashed();
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
    setInterval(() => {
      this.playAnimation(this.bottle_rotation);
    }, 80);
    this.throw_audio.play();
  }

    
    // bottleIsSplashed(){
    //     setInterval(() => {
    //         this.playAnimation(this.bottle_splash);
    //     }, 80);
    // }
}