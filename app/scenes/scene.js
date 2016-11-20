/**
 * Basic scene
 */

export default class Scene {
    _setupProperties() {
        /**
        * @property {Boolean} _paused - is current scene is paused or not
        */
       this._paused = false;

       /**
        * @property {Function} _onDestroy - callback to be invoked on scene destruction
        */
       this._onDestroy = null;
       
       this._canvas = null;
    }
    
    constructor(canvas) {
        this._setupProperties();
        
        this._canvas = canvas;
    }
    
    /**
     * Scene entry point, used by scene manager
     */
    play() {
        // Do initial preparations here
    }
    
    update(time) {
        
    }
    
    render(time) {
        
    }
    
    onMouseClick() {
        
    }
    
    onKeyDown(key) {
        
    }
    
    onStop() {
        
    }
    
    onDestroy() {
        
    }
    
    /**
     * Scene exit point, used by scene manager, to force scene end and future clean up
     */
    stop() {
        if (typeof this.onStop === 'function') {
            this.onStop();
        };
        // Do clean up here
    }
    
    /**
     * Same as stop but, this one will invoke onDestroy callback after calling stop
     */
    destroy() {
        if (typeof this.onDestroy === 'function') {
            this.onDestroy(this);
        }
    }
}
