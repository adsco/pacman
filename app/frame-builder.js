import Frame from './frame';

export default class FrameBuilder {
    constructor(image) {
        this._image = image;
    }
    
    createFrame(x, y, width, height, duration, shiftX = 0, shiftY = 0) {
        var frame = new Frame(x, y, width, height, duration, shiftX, shiftY);

        frame.image = this._image;

        return frame;
    }
}