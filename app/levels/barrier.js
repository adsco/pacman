import Frame from './../../bower_components/layer/frame/frame';
import StaticLayer from './../../bower_components/layer/animation/static';

export default class Barrier {
    constructor(sprite, positionX, positionY) {
        this._sprite = sprite;
        this._width = 16;
        this._height = 8;
        this._barrier = new StaticLayer(new Frame(sprite, this._width, this._height, 308, 66));
        this._positionX = positionX;
        this._positionY = positionY;
    }
    
    get width() {
        return this._width;
    }
    
    get height() {
        return this._height;
    }
    
    get positionX() {
        return this._positionX;
    }
    
    get positionY() {
        return this._positionY;
    }
    
    render(context, time, offsetX = 0, offsetY = 0) {
        this._barrier.render(context, this._positionX + offsetX, this._positionY + offsetY);
    }
}