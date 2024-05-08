class World {
    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = -100;
    healthBar = new Healthbar();
    coinBar = new Coinbar();
    bottleBar = new Bottlebar();
    endbossBar = new EndbossBar();
    throwableObject = [];
    

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    /**
     * summary of the colliding and throwable object
     */
    run() {
        setInterval(() => {
            this.checkThrowableObject();
        }, 300);

        setInterval(() => {
            this.checkCollisions();
        }, 100);

    }

    /**
     * all of the collisions between pepe and every other object
     */
    checkCollisions() {
        this.characterCollidingWithEnemy();
        this.characterCollidingWithCoins();
        this.characterCollidingWithBottles();
        this.endbossIsCollidingWithBottles();
        this.characterCollidingWithEndboss();

    };

    /**
     * pepe colliding with enemys
     */
    characterCollidingWithEnemy() {
        // colliding with chicken
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy, index)) {
                if (this.character.isAboveGround() && this.character.speedY <= 0) {
                    this.character.automaticJumpOnEnemy();
                    this.jumpOnEnemyCollision(enemy, index)
                } else {
                    this.character.hit();
                    this.healthBar.setPercentage(this.character.energy);
                }

            }
        })
    }

    /**
     * pepe colliding with endboss
     */
    characterCollidingWithEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                this.character.hit();
                this.healthBar.setPercentage(this.character.energy);
            }
        });
    }


    /**
     * pepe jumps on enemys
     */
    jumpOnEnemyCollision(enemy) {
        const enemyIndex = this.level.enemies.indexOf(enemy);
        if (enemyIndex !== -1 && !enemy.isDead) {
            this.character.damageProtection = true
            setTimeout(() => {
                this.level.enemies.splice(enemyIndex, 1);
                this.character.damageProtection = false;
            }, 200);
            enemy.isDead = true;
        }
    }

    /**
     * pepe colliding with coins
     */
    characterCollidingWithCoins() {
        // colliding with coins
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.character.collectinCoins();
                this.coinBar.setPercentage(this.character.coin_bar);
                this.level.coins.splice(index, 1);
            }
        })
    }


    /**
     * pepe colliding with bottles
     */
    characterCollidingWithBottles() {
        // colliding with salsa bottles
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.character.addThrowableBottless();
                this.bottleBar.setPercentage(this.character.bottle);
                this.character.bottlesAmount += 20;
                this.level.bottles.splice(index, 1);
            }
        })
    }


    /**
     * endboss colliding with bottles
     */
    endbossIsCollidingWithBottles() {
        this.throwableObject.forEach((bottle, index) => {
            this.level.endboss.forEach((endboss) => {
                if (bottle.isColliding(endboss)) {
                    endboss.takesDamageFromBottle();
                    endboss.endbossLosingEnergy();
                    this.endbossBar.setPercentage(endboss.endbossEnergy);
                    bottle.breakAndSplash();
                    setTimeout(() => {
                        this.throwableObject.splice(index, 1);
                    }, 90);
                    if (endboss.isDead) {
                        setTimeout(() => {
                            this.level.endboss.splice(index, 1);
                        }, 700);
                    }
                }
            });
        });
    }


    /**
     *  function for the throwable object
     */
    checkThrowableObject() {
        if (this.character.bottle > 0) {
            if (this.keyboard.D) {
                this.character.setNewTimeStamp();
                let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 50, this.character.otherDirection);
                this.throwableObject.push(bottle);
                this.character.removeThrowableBottles();
                this.bottleBar.setPercentage(this.character.bottle);
            }
        }
    }

    /**
     * function to draw every object to canvas 
     * order is important
     */
    draw() {// Order is importent (kinda like z-index)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObject);
        this.showHealthBar();
        this.showCoinBar();
        this.showBottleBar();
        this.showEndbossHealthBar();
        this.showCharacter();

        let self = this
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * function to show the healthbar
     */
    showHealthBar(){
        this.ctx.translate(-this.camera_x, 0);// backwards
        this.addToMap(this.healthBar);
        this.ctx.translate(this.camera_x, 0);// forwards
    }

     /**
     * function to show the coinbar
     */
    showCoinBar(){
        this.ctx.translate(-this.camera_x, 0);// backwards
        this.addToMap(this.coinBar);
        this.ctx.translate(this.camera_x, 0);// forwards
    }


     /**
     * function to show the bottlebar
     */
    showBottleBar(){
        this.ctx.translate(-this.camera_x, 0);// backwards
        this.addToMap(this.bottleBar);
        this.ctx.translate(this.camera_x, 0);// forwards
    }


     /**
     * function to show the endboss healthbar
     */
    showEndbossHealthBar(){
        if (this.character.x >= 1500) {
            this.ctx.translate(-this.camera_x, 0); //back
            this.addToMap(this.endbossBar);
            this.ctx.translate(this.camera_x, 0); //forward
        }
    }

     /**
     * function to show the character
     */
    showCharacter(){
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
    }

    /**
     * function to add objects to map
     * @param {object} object 
     */
    addObjectsToMap(object) {
        object.forEach(o => {
            this.addToMap(o);
        });
    }


    /**
     * function to add objects to map
     * 
     * @param {object} mo - movable object
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        };

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        };
    }


    /**
     * function to mirror for example the character if he goes to the other direction
     * 
     * @param {object} mo - movable object
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    /**
     * function to mirror for example the character if he goes to the other direction and the goes back to the right direction
     * 
     * @param {object} mo - movable object
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


    /**
     * every "this" = this.character.world
     */
    setWorld() {
        this.character.world = this;
    }
}