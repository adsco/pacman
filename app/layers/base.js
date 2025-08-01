export default class BaseLayer {
    _setupProperties() {
        this.image = null;
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }
    
    constructor() {
        this._setupProperties();
    }
}