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
    constructor(context2D, width, height) {
        var me = this;
        
        me._tickFn = function() {
            me._tick();
        };

        this._width = width || 0;
        this._height = height || 0;
        this._updateList = [];
        this._renderList = [];
        this._context2D = context2D;
    }
    
    /**
     * Game loop starter
     */
    run() {
        var me = this;
        
        this.lastUpdateTime = this.time;
        
        this._setGameLoop(this._tickFn);
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
    
    _setGameLoop(callback) {
        _gameLoop.call(window, callback);
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

        this._setGameLoop(this._tickFn);
    }

    /**
     * Game update function
     */
    _update() {
        for (let i = 0, len = this._updateList.length; i < len; i++) {
            this._updateList[i].update();
        }

        console.log('Update');
    }

    /**
     * Game render function
     */
    _render() {
        for (let i = 0, len = this._renderList.length; i < len; i++) {
            this._renderList[i].render(this._context2D);
        }

        console.log('Render', this._renderList);
    }
}