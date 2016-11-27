import ActorLayer from './../layers/actor';
import Direction from './../enums/direction';

export default class Pinky extends ActorLayer {
    constructor() {
        super(...arguments);
        
        this.direction = null;
        this.x = 400;
        this.y = 400;
    }
    
    setDirection(direction) {
        var animationName = this._getAnimationName(direction);

        this._direction = direction;

        this.startAnimation(animationName);
    }
    
    update(game, time) {
        var speedX = this._getSpeedX();
        var speedY = this._getSpeedY();

        if (this.x > 0) {
            this.x += speedX;
        }
        
        if (this.y > 0) {
            this.y += speedY;
        }
    }
    
    render(ctx, time) {
        var frame = this.getFrame(time);

        if (frame) {
            ctx.drawImage(
                frame.image,
                frame.x,
                frame.y,
                frame.width,
                frame.height,
                this.x + frame.shiftX,
                this.y + frame.shiftY,
                frame.width,
                frame.height
            );
        }
    }
    
    _getSpeedX() {
        var speedX = 0;

        if (this._direction === Direction.LEFT) {
            speedX = -1;
        } else if (this._direction === Direction.RIGHT) {
            speedX = 1;
        }
        
        return speedX;
    }
    
    _getSpeedY() {
        var speedY = 0;

        if (this._direction === Direction.TOP) {
            speedY = -1;
        } else if (this._direction === Direction.BOTTOM) {
            speedY = 1;
        }
        
        return speedY;
    }
    
    _getAnimationName(direction) {
        var animationName = 'frightenEnds';

        switch (direction) {
            case Direction.LEFT: {
                animationName = 'moveLeft';
                
                break;
            }
            
            case Direction.TOP: {
                animationName = 'moveTop';
                
                break;
            }
            
            case Direction.RIGHT: {
                animationName = 'moveRight';
                
                break;
            }
            
            case Direction.BOTTOM: {
                animationName = 'moveBottom';
                
                break;
            }
        }
        
        return animationName;
    }
}
