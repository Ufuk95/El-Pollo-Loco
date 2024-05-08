class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;




    constructor(){
        this.KeyboardControll();
        this.touchControll();
    }

    /**
     * keyboard controlling
     */
    KeyboardControll(){
        window.addEventListener('keydown', (event) => {
            if (event.keyCode == 39) {
                keyboard.RIGHT = true;
            }
            if (event.keyCode == 37) {
                keyboard.LEFT = true;
            }
            if (event.keyCode == 38) {
                keyboard.UP = true;
            }
            if (event.keyCode == 40) {
                keyboard.DOWN = true;
            }
            if (event.keyCode == 32) {
                keyboard.SPACE = true;
            }
            if (event.keyCode == 68) {
                keyboard.D = true;
            }
        })
        
        window.addEventListener('keyup', (event) => {
            if (event.keyCode == 39) {
                keyboard.RIGHT = false;
            }
            if (event.keyCode == 37) {
                keyboard.LEFT = false;
            }
            if (event.keyCode == 38) {
                keyboard.UP = false;
            }
            if (event.keyCode == 40) {
                keyboard.DOWN = false;
            }
            if (event.keyCode == 32) {
                keyboard.SPACE = false;
            }
            if (event.keyCode == 68) {
                keyboard.D = false;
            }
        
        })
    }


    /**
     * touch controlling for smartphones in landscape mode
     */
    touchControll() {
        document.getElementById('moveLeftTouch').addEventListener('touchstart', (e) => {
          e.preventDefault();
          this.LEFT = true;
        });
    
        document.getElementById('moveLeftTouch').addEventListener('touchend', (e) => {
          e.preventDefault();
          this.LEFT = false;
        });
    
        document.getElementById('moveRightTouch').addEventListener('touchstart', (e) => {
          e.preventDefault();
          this.RIGHT = true;
        });
    
        document.getElementById('moveRightTouch').addEventListener('touchend', (e) => {
          e.preventDefault();
          this.RIGHT = false;
        });
    
        document.getElementById('jumpTouch').addEventListener('touchstart', (e) => {
          e.preventDefault();
          this.SPACE = true;
        });
    
        document.getElementById('jumpTouch').addEventListener('touchend', (e) => {
          e.preventDefault();
          this.SPACE = false;
        });
    
        document.getElementById('bottleTouch').addEventListener('touchstart', (e) => {
          e.preventDefault();
          this.D = true;
        });
    
        document.getElementById('bottleTouch').addEventListener('touchend', (e) => {
          e.preventDefault();
          this.D = false;
        });
    
      }
}