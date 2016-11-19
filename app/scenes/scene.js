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
    
    /**
     * Scene exit point, used by scene manager, to force scene end and future clean up
     */
    stop() {
        // Do clean up here
    }
    
    /**
     * Same as stop but, this one will invoke onDestroy callback after calling stop
     */
    destroy() {
        this.stop();
        
        if (typeof this._onDestroy === 'function') {
            this._onDestroy(this);
        }
    }
}
