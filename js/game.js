let canvas;
let world;
let keyboard = new Keyboard()

let game_audio = new Audio('../audio/game-sound.mp3')



function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}



window.addEventListener('keydown', (event) =>{
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

window.addEventListener('keyup', (event) =>{
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


function gameStart(){
    init();
    document.getElementById('start-container').classList.add('d-none');
    
}


function gameSound() {
    var volUp = document.getElementById('vol_up');
    var volOff = document.getElementById('vol_off');
    
    if (volUp.classList.contains('d-none')) {
        volUp.classList.remove('d-none');
        volOff.classList.add('d-none');
        game_audio.play();
    } else {
        volUp.classList.add('d-none');
        volOff.classList.remove('d-none');
        game_audio.pause();
    }
}
