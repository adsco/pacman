/**
 * @property {Function} _gameLoop - game loop function
 */
let _gameLoop = null;

/**
 * @property {Number} _lastUpdateTime - last update time when, update was performed
 */
let _lastUpdateTime = 0;

/**
 * @property {Number} _fps - fps limit
 */
let _fps = 30;

let _tick = null;

let _getTimeFrame = null;

let _update = null;

let _render = null;

let _getTime = null;

export default class Game {
    /**
     * Constructor
     */
    constructor() {
        _gameLoop = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            setInterval;
    
        /**
         * Game loop tick
         */
        _tick = function() {
            // Current time
            let time = _getTime();

            // Milliseconds passed since last update
            let timePassed = time - _lastUpdateTime;

            // Game time frame, how often update should be executed
            let timeFrame = _getTimeFrame();

            if (time > _lastUpdateTime) {
                // Game update is a prior function
                while(time > _lastUpdateTime) {
                    _update();
                    _lastUpdateTime += timeFrame;
                }

                _render();
            }

            _gameLoop(_tick);
        };

        /**
         * Game update function
         */
        _update = function() {
            console.log('Update');
        };

        /**
         * Game render function
         */
        _render = function() {
            console.log('Render');
        };

        /**
         * Get current game time
         */
        _getTime = function() {
            return window.performance.now();
        };

        /**
         * Get frame time
         */
        _getTimeFrame = function() {
            return 1000 / _fps;
        };
    }
    
    /**
     * Game loop starter
     */
    run() {
        _lastUpdateTime = _getTime();

        _gameLoop(_tick);
    }
    
    /**
     * Get current fps
     */
    get fps() {
        return _fps;
    }
    
    /**
     * Set fps
     */
    set fps(fps) {
        _fps = fps;
    }
}