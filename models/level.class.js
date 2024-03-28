class Level {
    clouds;
    enemies;
    backgroundObjects;
    level_end_x = 719*3;
    coins;
    bottles;


    constructor(enemies, clouds, backgroundObjects, coins, bottles){
        this.backgroundObjects = backgroundObjects;
        this.enemies = enemies;
        this.clouds = clouds;
        this.coins = coins;
        this.bottles = bottles;
    }
}