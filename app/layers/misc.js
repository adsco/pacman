import BaseLayout from './base';
import AnimationMixin from './../mixins/animation';

export default class MiscLayer extends AnimationMixin(BaseLayout) {
    constructor() {
        super();
        
        this._animations = {};
        this._currentAnimation = null;
        this._timeElapsed = 0;
        this._currentFrameIndex = 0;
        this._animationPaused = false;
    }
}
