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
    
    addFrames(frames) {
        for (let i = 0, len = frames.length; i < len; i++) {
            this.addFrame(frames[i]);
        }
    }
}