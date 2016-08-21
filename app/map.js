export default class Map {
    constructor(width, height) {
        this._width = width || 0;
        this._height = height || 0;
    }
    
    set width(width) {
        this._width = width;
    }
    
    set height(height) {
        this._height = height;
    }
    
    /**
     * Load data
     */
    load(data) {
        
    }
    
    update() {
        
    }
    
    render(context) {
        context.clearRect(0, 0, this._width, this._height);
        context.fillStyle = "#000";
        context.fillRect(0, 0, this._width, this._height);
    }
}
