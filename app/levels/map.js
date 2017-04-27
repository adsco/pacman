import Frame from '../../bower_components/layer/frame/frame';
import AnimatedLayer from '../../bower_components/layer/animation/animated';

export default class Map {
    constructor(sprite) {
        this._sprite = sprite;
        this._state = null;
        this._width = 224;
        this._height = 248;
        this._map = new AnimatedLayer([
                new Frame(this._sprite, this._width, this._height, 7, 8),
                new Frame(this._sprite, this._width, this._height, 375, 8)
            ],
            1,
            true
        );
        
        this._map.pause();
    }
    
    static get ANIMATION_DEFAULT() {
        return 'animation_default';
    }
    
    static get ANIMATION_FLASHING() {
        return 'animation_flashing';
    }
    
    playAnimation(animationName) {
        if (animationName === Map.ANIMATION_DEFAULT) {
            this._map.pause();
            this._map.reset();
        } else if (animationName === Map.ANIMATION_FLASHING) {
            this._map.play();
        }
    }
    
    update() {
        
    }
    
    render(context, time, offsetX = 0, offsetY = 0) {
        this._map.render(context, time, offsetX, offsetY);
    }
}