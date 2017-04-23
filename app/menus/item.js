export default class Item {
    constructor(pen, title = '', selected = false) {
        this._pen = pen;
        this._title = title;
        this._selected = selected;
    }
    
    set title(title) {
        this._title = title;
    }
    
    set selected(selected) {
        this._selected = selected
    }
    
    render(context, x, y) {
        var title = this._title;
        
        if (this._selected) {
            title = '>' + title;
            
            // Offset for select icon
            x -= 8;
        }

        this._pen.write(title, context, x, y);
    }
}