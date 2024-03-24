class Level {
    clouds;
    enemies;
    backgroundObjects;
    level_end_x = 719*3;


    constructor(enemies, clouds, backgroundObjects){
        this.backgroundObjects = backgroundObjects;
        this.enemies = enemies;
        this.clouds = clouds;

    }
}