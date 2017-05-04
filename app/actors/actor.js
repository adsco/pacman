export default class Actor {
    constructor(sprite) {
        this._sprite = sprite;
        this._animations = {};
        this._width = 16;
        this._height = 16;
        this._activeAnimation = null;
        this._shiftX = 0;
        this._shiftY = 0;
        this._targetTileX = 0;
        this._targetTileY = 0;
        this._tileX = 0;
        this._tileY = 0;
        this._speed = 0;
        this._speedX = 0;
        this._speedY = 0;
        this._maxShift = 4;
        this._speedApproximation = 0;
        this._direction = null;
        
        this._initAnimations(sprite);
    }
    
    static get ANIMATION_MOVE_UP() {
        return 'moveUp';
    }
    
    static get ANIMATION_MOVE_RIGHT() {
        return 'moveRight';
    }
    
    static get ANIMATION_MOVE_DOWN() {
        return 'moveDown';
    }
    
    static get ANIMATION_MOVE_LEFT() {
        return 'moveLeft';
    }
    
    static get DIRECTION_UP() {
        return 'direction_up';
    }
    
    static get DIRECTION_RIGHT() {
        return 'direction_right';
    }
    
    static get DIRECTION_DOWN() {
        return 'direction_down';
    }
    
    static get DIRECTION_LEFT() {
        return 'direction_left';
    }
    
    set positionX(x) {
        this._tileX = Math.floor(x / 8);
        this._targetTileX = this._tileX;
        this._shiftX = x % 8;
    }
    
    set positionY(y) {
        this._tileY = Math.floor(y / 8);
        this._targetTileY = this._tileY;
        this._shiftY = y % 8;
    }
    
    get position() {
        return {
            x: this._tileX,
            y: this._tileY
        };
    }
    
    set speed(speed) {
        this._speed = speed;
        this._speedApporximation = speed + speed * 0.1;
    }
    
    set direction(direction) {
        this._direction = direction;
        
        switch (direction) {
            case Actor.DIRECTION_UP: {
                this._speedY = -this._speed;
                break;
            }
            case Actor.DIRECTION_RIGHT: {
                this._speedX = this._speed;
                break;
            }
            case Actor.DIRECTION_DOWN: {
                this._speedY = this._speed;
                break;
            }
            case Actor.DIRECTION_LEFT: {
                this._speedX = -this._speed;
                break;
            }
        }
    }
    
    _initAnimations(sprite) {
        // Init your animations here
    }
    
    _setNextTargetTile() {
        switch (this._direction) {
            case Actor.DIRECTION_UP: {
                this._targetTileY = this._tileY - 1;
                break;
            }
            case Actor.DIRECTION_RIGHT: {
                this._targetTileX = this._tileX + 1;
                break;
            }
            case Actor.DIRECTION_DOWN: {
                this._targetTileY = this._tileY + 1;
                break;
            }
            case Actor.DIRECTION_LEFT: {
                this._targetTileX = this._tileX - 1;
                break;
            }
        }
    }
    
    setAnimation(animation) {
        if (!this._animations.hasOwnProperty(animation)) {
            throw new Error(`Animation "${animation}" doesn't registered`);
        }
        
        if (this._activeAnimation) {
            this._activeAnimation.reset();
        }
        
        this._activeAnimation = this._animations[animation];

        this._activeAnimation.play();
    }
    
    update() {
        if (this._direction === Actor.DIRECTION_UP || this._direction === Actor.DIRECTION_DOWN) {
            if (Math.round(this._shiftX) === 4) {
                this._shiftX = 4;
            }
                
            if (this._shiftX !== 4) {
                this._shiftX += this._shiftX > 4 ? -this._speed : this._speed;
            }
            
            this._shiftY += this._direction === Actor.DIRECTION_UP ? -this._speed : this._speed;
            
            if (this._shiftY >= 8) {
                this._tileY++;
                this._shiftY -= 8;
            } else if (this._shiftY < 0) {
                this._tileY--;
                this._shiftY += 8;
            }
        } else {
            if (Math.round(this._shiftY) === 4) {
                this._shiftY = 4;
            }
            
            if (this._shiftY !== 4) {
                this._shiftY += this._shiftY > 4 ? -this._speed : this._speed;
            }
            
            this._shiftX += this._direction === Actor.DIRECTION_LEFT ? -this._speed : this._speed;
            
            if (this._shiftX >= 8) {
                this._tileX++;
                this._shiftX -= 8;
            } else if (this._shiftX < 0) {
                this._tileX--;
                this._shiftX += 8;
            }
        }
    }
    
    render(context, time) {
        context.fillStyle = '#fff';
        context.fillText(`${this._shiftX.toFixed(2)} - ${this._shiftY.toFixed(2)}`, 100 , 20);
        this._activeAnimation.render(context, time, this._tileX * 8 + this._shiftX, this._tileY * 8 + this._shiftY);
    }
}