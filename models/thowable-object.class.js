class ThrowableObject  extends MovableObject{
    height = 80;
    width = 80;
    throw_audio = new Audio('../audio/throw.mp3')

    constructor(x, y){
        super().loadImage('../img/7_statusbars/3_icons/icon_salsa_bottle.png');
        this.x = x;
        this.y = y;
        this.throw();
    }

    throw(){
        this.speedY = 20;
        this.applyGravity();
        setInterval(() => {
            this.x += 8;
        }, 20);
        this.throw_audio.play();
    }
}