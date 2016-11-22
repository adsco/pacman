import Scene from './scene';
import InputKey from './../enums/input';
import {getTextSize} from './../vendors/utils';

/**
 * Base menu class, menu takes control of a game, same as scene, should inherit from scene
 */

export default class Menu extends Scene {
    constructor() {
        super(...arguments);
        
        this._items = [];
        this._fontSize = 20;
        this._fontFamily = 'serif';
        this._initialX = 200;
        this._initialY = 275;
        this._lineHeight = 30;
    }
    
    addItem(item) {
        var context = this._canvas.getContext();
        var len = this._items.length;
        var size = getTextSize(item.getText(), `${this._fontSize}px`, this._fontFamily);
        var x = this._initialX;
        var y = len * this._lineHeight + this._initialY;

        this._items.push({
            item,
            x,
            // Since text is drawn relative to base line
            y: y - size.height,
            width: size.width,
            height: size.height,
            endX: x + size.width,
            endY: y
        });
        
        this._cummulativeHeight += size.height;
        
        if (size.width > this._maxWidth) {
            this._maxWidth = size.width;
        }
        
        console.log(this._items);
    }
    
    update(time) {
        
    }
    
    onMouseClick(x, y) {
        console.log(x, y);
        for (let i = 0, len = this._items.length; i < len; i++) {
            if (this._items[i].x <= x && this._items[i].endX >= x && 
                this._items[i].y <= y && this._items[i].endY >= y) {
                this._items[i].item.click();
                console.log(this._items[i], x, y);
                break;
            }
        }
    }
    
    onKeyDown(key) {
        
    }
    
    render(time) {
        var canvas = this._prepareCanvas(this._canvas);;
        var ctx = canvas.getContext();
        var item;
        
        for (let i = 0, len = this._items.length; i < len; i++) {
            item = this._items[i];

            ctx.fillText(item.item.getText(), this._initialX, this._initialY + i * this._lineHeight);
        }
    }
    
    _prepareCanvas() {
        var canvas = this._canvas;
        var ctx = canvas.getContext();

        canvas.clear();

        ctx.font = `${this._fontSize}px ${this._fontFamily}`;
        ctx.fillStyle = '#000';
        
        return canvas;
    }
}
