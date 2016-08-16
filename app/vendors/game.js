/**
 * @property {Function} _gameLoop - game loop function
 */
let _gameLoop = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    setInterval;

export default class Game {
    /**
     * Constructor
     */
    constructor() {
        var me = this;
        
        me._tickFn = function() {
            me._tick();
        };
    }
    
    /**
     * Game loop starter
     */
    run() {
        var me = this;
        
        this.lastUpdateTime = this.time;
        
        _gameLoop.call(window, this._tickFn);
    }

    /**
     * Get current fps
     */
    get fps() {
        return this._fps;
    }
    
    /**
     * Set fps
     */
    set fps(fps) {
        this._fps = fps;
    }
    
    get time() {
        return window.performance.now();
    }
    
    get timeFrame() {
        return 1000 / this.fps;
    }
    
    set lastUpdateTime(time) {
        this._lastUpdateTime = time;
    }
    
    get lastUpdateTime() {
        return this._lastUpdateTime;
    }
    
    /**
     * Game loop tick
     */
    _tick() {
        // Current time
        let time = this.time;

        // Game time frame, how often update should be executed
        let timeFrame = this.timeFrame;

        if (time > (this.lastUpdateTime + timeFrame)) {
            do {
                this._update();
                this.lastUpdateTime += timeFrame;
            } while(time > (this.lastUpdateTime + timeFrame));

            this._render();
        }

        _gameLoop.call(window, this._tickFn);
    }

    /**
     * Game update function
     */
    _update() {
        console.log('Update');
    }

    /**
     * Game render function
     */
    _render() {
        console.log('Render');
    }
}