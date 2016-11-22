/**
 * Canvas helper wrapper
 */

export default class Canvas {
    _setupProperties() {
        this._context = null;

        this.canvas = null;
        this.width = 0;
        this.height = 0;
    }
    
    constructor(canvas) {
        this._setupProperties();
        
        if (!canvas || canvas.tagName !== 'CANVAS') {
            throw new Error('Canvas required');
        }

        this.canvas = canvas;
        this._context = canvas.getContext('2d');
    }
    
    getContext() {
        return this._context;
    }
    
    setWidth(width) {
        if (this.canvas) {
            this.canvas.width = width;
            this.canvas.style.width = width + 'px';
        }
        
        this.width = width;
    }
    
    getWidth() {
        return this.width;
    }
    
    setHeight(height) {
        if (this.canvas) {
            this.canvas.height = height;
            this.canvas.style.height = height + 'px';
        }
        
        this.height = height;
    }
    
    getHeight() {
        return this.height;
    }
    
    setFillStyle(style) {
        this._context.fillStyle = style;
    }
    
    on(eventName, callback) {
        this.canvas.addEventListener(eventName, callback);
    }
    
    drawRect(color, x, y, width, height) {
        this.clear();
        
        this.setFillStyle(color);
        this._context.fillRect(x, y, width, height);
    }
    
    clear() {
        this._context.clearRect(0, 0, this.width, this.height);
    }
}
