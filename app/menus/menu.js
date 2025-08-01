export default class Menu {
    constructor(offsetX = 0, offsetY = 0) {
        this._items = [];
        this._offsetX = offsetX;
        this._offsetY = offsetY;
    }
    
    get items() {
        return this._items;
    }
    
    set offsetX(offset) {
        this._offsetX = offset;
    }
    
    set offsetY(offset) {
        this._offsetY = offset;
    }
    
    addItem(item) {
        this._items.push(item);
    }
    
    selectItem(index) {
        this._items[index].selected = true;
    }
    
    deselectItem(index) {
        this._items[index].selected = false;
    }
    
    render(context, x = 0, y = 0) {
        for (let i = 0, len = this._items.length; i < len; i++) {
            this._items[i].render(context, x, y + (i * 16));
        }
    }
}