class MovableObject {
    x = 120;
    y = 280;
    img;
    height = 190;
    width = 100;
    ImageCache = [];
    currentImage = 0;
    speed = 0.2;
    otherDirection = false;
    speedY = 0;
    acceleration = 1.75;



    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }

    isAboveGround() {
        return this.y < 175;
    }

    // loadImage(./img/character.png)  (als Beispiel)
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id='image'>
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} array - [img/1.png, img/2.png, ...]
     */
    loadImages(array) {
        array.forEach((path) => {
            let image = new Image();
            image.src = path;
            this.ImageCache[path] = image;
        });

    }


    moveRight() {
        this.x += this.speed;
    }


    moveLeft() {
        this.x -= this.speed;
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = images[i];
        this.img = this.ImageCache[path];
        this.currentImage++;
    }

    jump() {
        this.speedY = 22;
    }
}