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

    run() {
        setInterval(() => {
            this.checkThrowableObject();
        }, 300);

        setInterval(() => {
            this.checkCollisions();
        }, 100);

    }

    checkCollisions() {
        this.characterCollidingWithEnemy();
        this.characterCollidingWithCoins();
        this.characterCollidingWithBottles();
        this.endbossIsCollidingWithBottles();
        this.characterCollidingWithEndboss();

    };

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

    characterCollidingWithEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                this.character.hit();
                this.healthBar.setPercentage(this.character.energy);
            }
        });
    }

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

    characterCollidingWithBottles() {
        // colliding with salsa bottles
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.character.addThrowableBottless();
                this.bottleBar.setPercentage(this.character.bottle);
                this.character.bottlesAmount += 20;
                console.log(this.character.bottlesAmount);
                this.level.bottles.splice(index, 1);
            }
        })
    }

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

        this.ctx.translate(-this.camera_x, 0);// backwards
        this.addToMap(this.healthBar);
        this.ctx.translate(this.camera_x, 0);// forwards

        this.ctx.translate(-this.camera_x, 0);// backwards
        this.addToMap(this.coinBar);
        this.ctx.translate(this.camera_x, 0);// forwards

        this.ctx.translate(-this.camera_x, 0);// backwards
        this.addToMap(this.bottleBar);
        this.ctx.translate(this.camera_x, 0);// forwards

        // EndbossBar
        if (this.character.x >= 1500) {
            this.ctx.translate(-this.camera_x, 0); //back
            this.addToMap(this.endbossBar);
            this.ctx.translate(this.camera_x, 0); //forward
        }

        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);

        // draw() wird immer wieder aufgerufen 
        // in der requestAnimationFrame kennt er kein 'this'
        let self = this
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(object) {
        object.forEach(o => {
            this.addToMap(o);
        });
    }

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

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    setWorld() {
        this.character.world = this;
    }
}