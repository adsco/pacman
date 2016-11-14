export default class FrameSet {
    _setupProperties() {
        this.image = null;
        this._frames = [];
    }
    
    constructor(image) {
        this._setupProperties();
        
        this.image = image;
    }
    
    addFrame(frame) {
        frame.image = this.image;

        this._frames.push(frame);
    }
    
    getFrame(index) {
        return this._frames[index];
    }
}