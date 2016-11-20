import Scene from './scene';

/**
 * Base menu class, menu takes control of a game, same as scene, should inherit from scene
 */

export default class Menu extends Scene {
    constructor() {
        super(...arguments);
        
        this._items = [];
        this._fontSize = 20;
        this._fontFamily = 'serif';
    }
    
    addItem(item) {
        var context = this._canvas.getContext();
        var len = this._items.length;
        var width = context.measureText(item.getText()).width;

        this._items.push({
            item,
            x: 100,
            // Since base line is text bottom
            y: len * 25 + 200,
            width,
            height: this._fontSize,
            endX: 100 + width,
            endY: len * 25 + 200 - this._fontSize
        });
    }
    
    update(time) {
        
    }
    
    onMouseClick(x, y) {
        for (let i = 0, len = this._items.length; i < len; i++) {
            if (this._items[i].x <= x && this._items[i].endX >= x && 
                this._items[i].endY <= y && this._items[i].y >= y) {
                this._items[i].item.click();
                console.log(this._items[i].width);
                break;
            }
        }
    }
    
    render(time) {
        var ctx = this._canvas.getContext();
        var item;
        
        // this._canvas.clear();
        ctx.font = `${this._fontSize}px ${this._fontFamily}`;

        ctx.fillStyle = '#000';
        for (let i = 0, len = this._items.length; i < len; i++) {
            item = this._items[i];

            ctx.strokeStyle = '#000';
            ctx.moveTo(item.x, item.y);
            ctx.lineTo(500, item.y);
            ctx.stroke();
            ctx.fillText(item.item.getText(), item.x, item.y);
        }
    }
}
