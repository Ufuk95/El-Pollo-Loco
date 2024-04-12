class MovableObject extends DrawableObject {
    speed = 0.2;
    otherDirection = false;
    speedY = 0;
    acceleration = 1.75;
    energy = 100;
    lastHit = 0;
    coin_bar = 0;
    bottle = 0;
    bottlesAmount = 0;
    protection = false;
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }

    /**
     * Gravitation of the game
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }

    /**
     * 
     * @returns gravitation of the game except for throable items
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 175;
        }
    }

    /**
     * function for collecting coins
     */
    collectinCoins() {
        this.coin_bar += 20;
        if (this.coin_bar == 100) {
            this.coin_bar == 100;
        }
    }

    /**
     * function for collecting bottles
     */
    addThrowableBottless() {
        this.bottle += 20;
        if (this.bottle == 100) {
            this.bottle = 100;
        }
    }

    removeThrowableBottles() {
        this.bottle -= 20;
        if (this.bottle < 0) {
            this.bottle = 0;
        }
    }

    endbossIsLosingEnergy() {
        this.endbossEnergy -= 20;
        if (this.endbossEnergy < 0) {
            this.endbossEnergy = 0;
            console.log(this.endbossEnergy);
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /**
     * function for getting hit by enemys
     */
    hit() {
        if (!this.protection) {
            this.protection = true;
            this.energy -= 5;
            if (this.energy < 0) {
                this.energy = 0;
            } else {
                this.lastHit = new Date().getTime();
            }
            setTimeout(() => {
                this.protection = false;
            }, 500);
        }
    }

    /**
     * 
     * @returns if your livepoints hit 0 you die
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * 
     * @returns animation when you get hit 
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 1;
    }

    /**
     * importen fuction for colliding with everything
     * 
     * @param {object} mo - movable object
     * @returns 
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    isCollidingFromTopToBottom() {
        return this.y + this.height - this.offset.bottom > mo.y + mo.offset.top;
    }

    isCollidingFromBottomToTop() {
        return this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }


    isCollecting() {
        this.bottlesAmount += 20;
        if (this.bottlesAmount > 100) {
            this.bottlesAmount = 100;
        }
        console.log(this.bottlesAmount);
    }

    /**
     *  move right
     */
    moveRight() {
        this.x += this.speed;
    }


    /**
     * move left
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * function to play the animation
     * 
     * @param {images} images - images
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.ImageCache[path];
        this.currentImage++;
    }

    /**
     * function to set the speed of jumping high
     */
    jump() {
        this.speedY = 22;
    }

    automaticJumpOnEnemy(){
        this.speedY = 15;
    }
}