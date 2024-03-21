class MovableObject{
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;


    // loadImage(./img/character.png)  (als Beispiel)
    loadImage(path){
        this.img = new Image(); // this.img = document.getElementById('image') <img id='image'>
        this.img.src = path;
    }



    moveRight(){
        console.log('moving right');
    }


    moveLeft(){
        console.log('moving left');
    }
}