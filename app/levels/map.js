export default class Map {
    constructor(sprite) {
        this._sprite = sprite;
        this._width = 224;
        this._height = 248;
        this._offsetX = 7;
        this._offsetY = 8;
    }
    
    update() {
        
    }
    
    render(context, offsetX = 0, offsetY = 0) {
        context.drawImage(
            this._sprite,
            this._offsetX,
            this._offsetY,
            this._width,
            this._height,
            offsetX,
            offsetY,
            this._width,
            this._height
        );
    }
}