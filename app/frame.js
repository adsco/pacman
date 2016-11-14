export default class Frame {
    _setupProperties() {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.duration = 0;
        this.image = null;
    }

    constructor(x, y, width, height, duration) {
        this._setupProperties();
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.duration = duration;
    }
}