import AnimatedLayer from '../../bower_components/layer/animation/animated';
import StaticLayer from '../../bower_components/layer/animation/static';
import Frame from '../../bower_components/layer/frame/frame';
import Physics2D from '../physics-2d';

export default class Pacman {
    constructor(sprite) {
        this._sprite = sprite;
        this._animations = {};
        this._width = 16;
        this._height = 16;
        this._activeAnimation = null;

        this._positionX = 0;
        this._positionY = 0;
        this._velocityX = 0;
        this._velocityY = 0;
        this._speed = 0;
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
        this._positionX = x;
    }
    
    set positionY(y) {
        this._positionY = y;
    }
    
    get position() {
        return {
            x: this._positionX,
            y: this._positionY
        };
    }
    
    set speed(speed) {
        this._speed = speed;
    }
    
    set direction(direction) {
        switch (direction) {
            case Pacman.DIRECTION_UP: {
                this.setAnimation(Pacman.ANIMATION_MOVE_UP);
                Physics2D.printDebug();
                this._velocityX = 0;
                this._velocityY = -this._speed;
                break;
            }
            case Pacman.DIRECTION_RIGHT: {
                this.setAnimation(Pacman.ANIMATION_MOVE_RIGHT);
                this._velocityX = this._speed;
                this._velocityY = 0;
                break;
            }
            case Pacman.DIRECTION_DOWN: {
                this.setAnimation(Pacman.ANIMATION_MOVE_DOWN);
                this._velocityX = 0;
                this._velocityY = this._speed;
                break;
            }
            case Pacman.DIRECTION_LEFT: {
                this.setAnimation(Pacman.ANIMATION_MOVE_LEFT);
                this._velocityX = -this._speed;
                this._velocityY = 0;
                break;
            }
        }
    }
    
    _initAnimations(sprite) {
        this._animations.moveUp = new AnimatedLayer([
            new Frame(sprite, 16, 16, 267, 162),
            new Frame(sprite, 16, 16, 267, 146),
            new Frame(sprite, 16, 16, 266, 131)
        ], 18, true);
        this._animations.moveRight = new AnimatedLayer([
            new Frame(sprite, 16, 16, 267, 162),
            new Frame(sprite, 16, 16, 283, 162),
            new Frame(sprite, 16, 16, 300, 162)
        ], 18, true);
        this._animations.moveDown = new AnimatedLayer([
            new Frame(sprite, 16, 16, 267, 162),
            new Frame(sprite, 16, 16, 267, 178),
            new Frame(sprite, 16, 16, 267, 194)
        ], 18, true);
        this._animations.moveLeft = new AnimatedLayer([
            new Frame(sprite, 16, 16, 267, 162),
            new Frame(sprite, 16, 16, 251, 162),
            new Frame(sprite, 16, 16, 236, 162)
        ], 18, true);
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
        var futurePositionX = this._positionX + this._velocityX;
        var futurePositionY = this._positionY + this._velocityY;

        if (!Physics2D.rayCast(Math.round(futurePositionX / 8), Math.round(futurePositionY / 8))) {
            this._positionX = futurePositionX;
            this._positionY = futurePositionY;
        }
    }
    
    render(context, time) {
        this._activeAnimation.render(context, time, this._positionX, this._positionY);
    }
}