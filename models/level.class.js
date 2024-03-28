class Level {
    clouds;
    enemies;
    backgroundObjects;
    level_end_x = 719*3;
    coins;


    constructor(enemies, clouds, backgroundObjects, coins){
        this.backgroundObjects = backgroundObjects;
        this.enemies = enemies;
        this.clouds = clouds;
        this.coins = coins;
    }
}