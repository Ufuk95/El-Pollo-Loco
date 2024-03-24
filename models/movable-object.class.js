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
        console.log('moving right');
    }


    moveLeft(){
        setInterval(() => {
            this.x -= this.speed;
        }, 1000/ 60);
    }
}