let canvas;
let world;
let keyboard = new Keyboard()
let game_audio = new Audio('../audio/game-sound.mp3')



/**
 * start button to start the game
 */
function gameStart() {
    setTimeout(() => {
        initLevel();
        canvas = document.getElementById('canvas');
        world = new World(canvas, keyboard);
    }, 1000);
    document.getElementById('info-btn').classList.add('d-none');
    document.getElementById('setting-btn').classList.add('d-none');
    document.getElementById('start-button').classList.add('d-none');
    document.getElementById('start-image').classList.add('d-none');
}


/**
 * function to show the welcome text for the game
 */
function gameInfo() {
    let gameInfo = document.getElementById('gameInfo');
    gameInfo.innerHTML = `
        <p>"Willkommen bei El Pollo Loco, <br>
        einem aufregenden Jump-and-Run-Abenteuer! <br>
        In diesem Spiel, das ich entwickelt habe, um Objektorientiertes Programmieren zu lernen, <br>
        erwarten dich Herausforderungen und Spaß. <br>
        Überwinde normale und kleine Hühnchen, indem du auf sie springst. <br>
        Aber sei auf der Hut vor dem mächtigen Endboss! <br>
        Nur mit Geschick und den richtigen Waffen, den Salsa-Flaschen, kannst du ihn besiegen. <br>
        Bereit für das Abenteuer? Los geht's!"</p>
    `;

    document.addEventListener('click', closeGameInfo);
    gameInfo.addEventListener('click', function (event) {
        event.stopPropagation();
    });
}

/**
 * function to close game info by clicking somewhere else
 */
function closeGameInfo() {
    let gameInfo = document.getElementById('gameInfo');
    gameInfo.innerHTML = '';
    document.removeEventListener('click', closeGameInfo);
}

document.getElementById('info-btn').addEventListener('click', function (event) {
    event.stopPropagation();
});


/**
 * function to show how to play the game
 */
function gameSettings() {
    let setting = document.getElementById('gameSetting');
    setting.innerHTML = `
    <h3>Game Control</h3>
    <div class="control">
        <img src="./img/10_menu/left-arrow.png" alt="arrow left" class="keyboard-btn">
        <p>Moving to the LEFT side</p>
    </div>
    <div class="control">
        <img src="./img/10_menu/right-arrow.png" alt="arrow right" class="keyboard-btn">
        <p>Moving to the RIGHT side</p>
    </div>
    <div class="control">
        <img src="./img/10_menu/spacebar.png" alt="arrow right" class="keyboard-btn">
        <p>Spacebar for JUMP</p>
    </div>
    <div class="control">
        <svg class="letter-d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 96C0 60.7 28.7 32 64 32h96c123.7 0 224 100.3 224 224s-100.3 224-224 224H64c-35.3 0-64-28.7-64-64V96zm160 0H64V416h96c88.4 0 160-71.6 160-160s-71.6-160-160-160z"/></svg>
        <p>press D for throwing bottle</p>
    </div>`;

    document.addEventListener('click', closeGameSettings);
    setting.addEventListener('click', function (event) {
        event.stopPropagation();
    });
}

/**
 * function to close game setting by clicking somewhere else
 */
function closeGameSettings() {
    let setting = document.getElementById('gameSetting');
    setting.innerHTML = '';
    document.removeEventListener('click', closeGameSettings);
}

document.getElementById('setting-btn').addEventListener('click', function (event) {
    event.stopPropagation();
});



/**
 * function to end the game after your loss
 */
function gameOver() {
    document.getElementById('gameOver').classList.remove('d-none');
    document.getElementById('sound-btn').classList.add('d-none');
    game_audio.pause();
    stopGame();
}


/**
 * function to end the game after your win
 */
function gameWin() {
    document.getElementById('gameWin').classList.remove('d-none');
    game_audio.pause();
    stopGame();
}


/**
 * function to freeze the game 
 */
function stopGame() {
    for (let i = 1; i < 9999; i++) {
        window.clearInterval(i);
    }
}


/**
 * function to activate or deactivate the game sound
 */
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

/**
 * function to bring you back to the menu after the game ends
 */
function backToMenu() {
    document.getElementById('gameWin').classList.add('d-none');
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('info-btn').classList.remove('d-none');
    document.getElementById('setting-btn').classList.remove('d-none');
    document.getElementById('start-button').classList.remove('d-none');
    document.getElementById('start-image').classList.remove('d-none');
    document.getElementById('sound-btn').classList.remove('d-none');
}


/**
 * function to restart the game after the game ends
 */
function restartGame() {
    document.getElementById("canvas").classList.remove('d-none');
    document.getElementById('gameWin').classList.add('d-none');
    document.getElementById('gameOver').classList.add('d-none');
    gameStart();
}