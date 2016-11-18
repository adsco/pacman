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
    }
    
    constructor() {
        this._setupProperties();
    }
    
    /**
     * Scene entry point, used by scene manager
     */
    play() {
        // Do initial preparations here
    }
    
    update() {
        
    }
    
    render() {
        
    }
    
    onMouseClick() {
        
    }
    
    onKeyDown() {
        
    }
    
    /**
     * Just pause scene, used internally
     */
    pause() {
        this._paused = true;
    }
    
    /**
     * Unpause scene, used internally
     */
    unpause() {
        this._paused = false;
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
