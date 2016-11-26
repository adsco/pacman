import Scene from './scene';
import InputKey from './../enums/input';
import Direction from './../enums/direction';

export default class GameScene extends Scene {
    constructor() {
        super(...arguments);
        
        this._pacman = null;
        this._blinky = null;
        this._pinky = null;
        this._inky = null;
    }
    
    getPacman() {
        return this._pacman;
    }
    
    setPacman(pacman) {
        this._pacman = pacman;
    }
    
    getBlinky() {
        return this._blinky;
    }
    
    setBlinky(blinky) {
        this._blinky = blinky;
    }
    
    getPinky() {
        return this._pinky;
    }
    
    setPinky(pinky) {
        this._pinky = pinky;
    }
    
    getInky() {
        return this._inky;
    }
    
    setInky(inky) {
        this._inky = inky;
    }
    
    onKeyDown(key) {
        switch (key) {
            case InputKey.UP: {
                this._pacman.setDirection(Direction.TOP);
                this._blinky.setDirection(Direction.TOP);
                this._pinky.setDirection(Direction.TOP);
                this._inky.setDirection(Direction.TOP);
                break;
            }
            case InputKey.RIGHT: {
                this._pacman.setDirection(Direction.RIGHT);
                this._blinky.setDirection(Direction.RIGHT);
                this._pinky.setDirection(Direction.RIGHT);
                this._inky.setDirection(Direction.RIGHT);
                break;
            }
            case InputKey.DOWN: {
                this._pacman.setDirection(Direction.BOTTOM);
                this._blinky.setDirection(Direction.BOTTOM);
                this._pinky.setDirection(Direction.BOTTOM);
                this._inky.setDirection(Direction.BOTTOM);
                break;
            }
            case InputKey.LEFT: {
                this._pacman.setDirection(Direction.LEFT);
                this._blinky.setDirection(Direction.LEFT);
                this._pinky.setDirection(Direction.LEFT);
                this._inky.setDirection(Direction.LEFT);
                break;
            }
            case InputKey.ESC: {
                this._pacman.setDirection(null);
                this._blinky.setDirection('eyesMoveLeft');
                this._pinky.setDirection('eyesMoveLeft');
                this._inky.setDirection('eyesMoveLeft');
                break;
            }
            case InputKey.ENTER: {
                this._pacman.startAnimation('death');
                this._blinky.startAnimation('frighten');
                this._pinky.startAnimation('frighten');
                this._inky.startAnimation('frighten');
                break;
            }
        }
    }
    
    update(time) {
        if (this._timeElapsed === 0) {
            this._pacman.setDirection(Direction.LEFT);
            this._timeElapsed = time;
        }

        this._pacman.update(this, time);
        this._blinky.update(this, time);
        this._pinky.update(this, time);
        this._inky.update(this, time);
    }
    
    render(time) {
        var ctx = this._canvas.getContext();
        
        this._canvas.clear();

        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, this._canvas.getWidth(), this._canvas.getHeight());

        this._pacman.render(ctx, time);
        this._blinky.render(ctx, time);
        this._pinky.render(ctx, time);
        this._inky.render(ctx, time);
    }
}
