class DrawableObject {
    img;
    ImageCache = [];
    currentImage = 0;
    x = 120;
    y = 280;
    height = 190;
    width = 100;



    // loadImage(./img/character.png)  (als Beispiel)
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id='image'>
        this.img.src = path;
    };

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
    };

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'green';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}