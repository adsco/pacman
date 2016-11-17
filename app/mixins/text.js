export default (superclass) => class extends superclass {
    setTextMap(map) {
        this._map = map;
    }
    
    showText(text) {
        var letter;
        var frame;
        
        this.clearText();

        for (let i = 0, len = text.length; i < len; i++) {
            letter = this._map[text.charAt(i)];
            frame = this._frameBuilder.createFrame(
                letter.x,
                letter.y,
                letter.width,
                letter.height,
                0
            );

            if (!frame) {
                throw new Error(`Letter ${text.charAt(i)} is not mapped`);
            }

            frame.shiftX = i * frame.width;

            this._currentFrames.push(frame);
        }
    }
    
    clearText() {
        this._currentFrames = [];
    }

    getFrames(time) {
        return this._currentFrames;
    }
}
