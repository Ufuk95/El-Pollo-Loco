class Level {
    clouds;
    enemies;
    endboss;
    backgroundObjects;
    level_end_x = 719*3;
    coins;
    bottles;


    constructor(enemies, endboss, clouds, backgroundObjects, coins, bottles){
        this.backgroundObjects = backgroundObjects;
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.coins = coins;
        this.bottles = bottles;
    }
}