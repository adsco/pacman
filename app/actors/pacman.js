import AnimatedLayer from '../../bower_components/layer/animation/animated';
import StaticLayer from '../../bower_components/layer/animation/static';
import Frame from '../../bower_components/layer/frame/frame';

export default class Pacman {
    constructor(sprite) {
        this._sprite = sprite;
        this._animations = {};
        this._width = 16;
        this._height = 16;
        this._activeAnimation = null;
//        this._positionOffsetX = ;
//        this._positionOffsetY = ;

        // Tile coordinates
        this._positionX = 0;
        this._positionY = 0;
        
        this._initAnimations(sprite);
        
        this.setAnimation(Pacman.ANIMATION_MOVE_LEFT);
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
        
    }
    
    render(context, time) {
        this._activeAnimation.render(context, time, 100, 100);
    }
}