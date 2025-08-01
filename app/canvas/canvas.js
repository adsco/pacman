/**
 * Canvas helper wrapper
 */

export default class Canvas {
    _setupProperties() {
        this._context = null;

        this.canvas = null;
        this.width = 0;
        this.height = 0;
        this.magnify = 1;
    }
    
    constructor(canvas) {
        this._setupProperties();
        
        if (!canvas || canvas.tagName !== 'CANVAS') {
            throw new Error('Canvas required');
        }

        this.element = canvas;
        this._context = canvas.getContext('2d');
    }
    
    getContext() {
        return this._context;
    }
    
    setWidth(width) {
        if (this.element) {
            this.element.width = width;
            this.element.style.width = (width * this.magnify) + 'px';
        }
        
        this.width = width;
    }
    
    getWidth() {
        return this.width;
    }
    
    setHeight(height) {
        if (this.element) {
            this.element.height = height;
            this.element.style.height = (height * this.magnify) + 'px';
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
        this.element.addEventListener(eventName, callback);
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
