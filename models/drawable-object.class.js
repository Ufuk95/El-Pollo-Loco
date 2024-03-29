class DrawableObject {
    img;
    ImageCache = [];
    currentImage = 0;
    x = 120;
    y = 280;
    height = 190;
    width = 100;
    offset = { top: 0, bottom: 0, left: 0, right: 0, };


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

    /**
     * function fpr drawing
     * 
     * @param {ctx} ctx - contex
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };


    /**
     * this function draws a frame around everything
     * 
     * @param {ctx} ctx - contex
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Coin || this instanceof Endboss || this instanceof Bottle) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'green';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'red';
            ctx.rect(
                this.x + this.offset.left,
                this.y + this.offset.top,
                this.width - this.offset.right - this.offset.left,
                this.height - this.offset.bottom);
            ctx.stroke();
        }
    }
}