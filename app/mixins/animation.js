import AnimationEnum from './../enums/animation';

/**
 * It is important to define following variables in mixed class:
 * _currentAnimation
 * _currentAnimationType
 */
export default (superclass) => class extends superclass {
    addAnimations(framesets) {
        for (let i = 0, len = framesets.length; i < len; i++) {
            this.addAnimation(framesets[i].id, framesets[i].frameset);
        }
    }
    
    addAnimation(id, frameset) {
        this._animations[id] = frameset;
    }
    
    startAnimation(animationId) {
        this._currentAnimation = this._animations[animationId];
        this._currentFrameIndex = -1;

        if (!this._currentAnimation) {
            throw new Error(`Animation ${animationId} is not found`);
        }
    }
    
    stopAnimation() {
        this._animationPaused = true;
    }
    
    resumeAnimation() {
        if (this._currentAnimation) {
            this._animationPaused = false;
        }
    }
    
    getFrame(gameTime) {
        var frame;
        
        if (this._currentFrameIndex === -1) {
            this._currentFrameIndex = 0;
            this._timeElapsed = gameTime;
        }
        
        frame = this._currentAnimation.getFrame(this._currentFrameIndex);

        if (gameTime > this._timeElapsed + frame.duration) {
            this._currentFrameIndex = this._currentAnimation.getFrame(this._currentFrameIndex + 1) ? this._currentFrameIndex + 1 : 0;

            frame = this._currentAnimation.getFrame(this._currentFrameIndex);

            this._timeElapsed = gameTime;
        }
        
        return frame;
    }
}
