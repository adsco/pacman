/**
 * Switch between scenes, scene activation/deactivation, scene creation/destruction
 */

export default class SceneManager {
    _setupProperties() {
        this._scenes = {};
    }
    
    constructor() {
        this._setupProperties();
    }
    
    addScene(id, scene) {
        this._scenes.push{
            id,
            scene
        };
    }
    
    /**
     * Get scene by id
     */
    getScene(id) {
        return this._scenes.hasOwnProperty(id) ? this._scenes[id] : null;
    }
}
