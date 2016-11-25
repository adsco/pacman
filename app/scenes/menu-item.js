export default class MenuItem {
    constructor(text, handler) {
        this._text = text;
        this._onClick = handler;
    }
    
    getText() {
        return this._text;
    }
    
    click() {
        if (typeof this._onClick === 'function') {
            this._onClick(this);
        }
    }
}