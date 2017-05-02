import Actor from '../actors/actor';
import AnimatedLayer from '../../bower_components/layer/animation/animated';
import StaticLayer from '../../bower_components/layer/animation/static';
import Frame from '../../bower_components/layer/frame/frame';
import Physics2D from '../physics-2d';

export default class Pacman extends Actor {
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
    
    set direction(direction) {
        super.direction = direction;
        switch (direction) {
            case Pacman.DIRECTION_UP: {
                this.setAnimation(Pacman.ANIMATION_MOVE_UP);
                break;
            }
            case Pacman.DIRECTION_RIGHT: {
                this.setAnimation(Pacman.ANIMATION_MOVE_RIGHT);
                break;
            }
            case Pacman.DIRECTION_DOWN: {
                this.setAnimation(Pacman.ANIMATION_MOVE_DOWN);
                break;
            }
            case Pacman.DIRECTION_LEFT: {
                this.setAnimation(Pacman.ANIMATION_MOVE_LEFT);
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
}