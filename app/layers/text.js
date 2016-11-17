import BaseLayout from './base';
import TextMixin from './../mixins/text';

export default class TextLayer extends TextMixin(BaseLayout) {
    constructor() {
        super();
        
        this._frameSet = null;
        this._currentFrames = [];
        this._timeElapsed = 0;
        this._map = null;
        this._image = null;
    }
    
    setFrameBuilder(frameBuilder) {
        this._frameBuilder = frameBuilder;
    }
}
