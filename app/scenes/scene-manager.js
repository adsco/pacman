/**
 * Switch between scenes, scene activation/deactivation, scene creation/destruction
 */

export default class SceneManager {
    _setupProperties() {
        this._scenes = {};
        this._isActive = false;
    }
    
    constructor() {
        this._setupProperties();
    }

    play() {
        this._isActive = true;
    }
    
    stop() {
        this._isActive = false;
    }

    addScene(id, scene) {
        this._scenes[id] = scene;
    }
    
    /**
     * Get scene by id
     */
    getScene(id) {
        return this._scenes.hasOwnProperty(id) ? this._scenes[id] : null;
    }
    
    playScene(id) {
        var scene = this.getScene(id);
        
        if (!scene) {
            throw new Error(`Scene ${id} is not found`);
        }
        
        this._activeScene = scene;

        this._getUpdateFn()();
    }
    
    _getUpdateFn() {
        var updateFn = this._updateFn;
        
        if (!updateFn) {
            let me = this;

            updateFn = function() {
                let time = window.performance.now();
                let scene = me._activeScene;

                scene.update(time);
                scene.render(time);

                // if scene is not active, do not run scene loop
                if (me._isActive) {
                    window.requestAnimationFrame(me._updateFn);
                }
            }
            
            this._updateFn = updateFn;
        }
        
        return updateFn;
    }
}
