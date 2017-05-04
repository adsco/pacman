import Actor from '../actors/actor';
import AnimatedLayer from '../../bower_components/layer/animation/animated';
import StaticLayer from '../../bower_components/layer/animation/static';
import Frame from '../../bower_components/layer/frame/frame';
import Physics2D from '../physics-2d';

export default class Pacman extends Actor {
    constructor() {
        super(...arguments);
        
        this._nextDirection = null;
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
    
    set direction(direction) {
        var animation;

        switch (direction) {
            case Actor.DIRECTION_UP: {
                animation = Pacman.ANIMATION_MOVE_UP;
                break;
            }
            case Actor.DIRECTION_RIGHT: {
                animation = Pacman.ANIMATION_MOVE_RIGHT;
                break;
            }
            case Actor.DIRECTION_DOWN: {
                animation = Pacman.ANIMATION_MOVE_DOWN;
                break;
            }
            case Actor.DIRECTION_LEFT: {
                animation = Pacman.ANIMATION_MOVE_LEFT;
                break;
            }
        }

        super.direction = direction;
        this._activeAnimation = this._animations[animation];
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
    
    _setNextTargetTile() {
        switch (this._direction) {
            case Actor.DIRECTION_UP: {
                if (!Physics2D.rayCast(this._tileX, this._tileY - 1)) {
                    this._targetTileY = this._tileY - 1;
                }
                break;
            }
            case Actor.DIRECTION_RIGHT: {
                if (!Physics2D.rayCast(this._tileX + 1, this._tileY)) {
                    this._targetTileX = this._tileX + 1;
                }
                break;
            }
            case Actor.DIRECTION_DOWN: {
                if (!Physics2D.rayCast(this._tileX, this._tileY + 1)) {
                    this._targetTileY = this._tileY + 1;
                }
                break;
            }
            case Actor.DIRECTION_LEFT: {
                if (!Physics2D.rayCast(this._tileX - 1, this._tileY)) {
                    this._targetTileX = this._tileX - 1;
                }
                break;
            }
        }
    }
}