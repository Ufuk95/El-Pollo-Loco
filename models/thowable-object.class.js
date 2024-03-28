class ThrowableObject  extends MovableObject{
    height = 80;
    width = 80;
    throw_audio = new Audio('../audio/throw.mp3');
    bottle_rotation = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    constructor(x, y){
        super().loadImage('../img/6_salsa_bottle/bottle_rotation/rotation_sequences.gif');
        this.loadImages(this.bottle_rotation);
        this.x = x;
        this.y = y;
        this.throw();
    }

    throw(){
        this.speedY = 20;
        this.applyGravity();
        setInterval(() => {
            this.x += 8;
            this.playAnimation(this.bottle_rotation);
        }, 20);
        this.throw_audio.play();
    }
}