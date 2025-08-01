import Eventable from '../mixins/eventable';

/**
 * Basic scene
 */
export default class Scene extends Eventable {
    /**
     * Constructor
     */
    constructor() {
        super(...arguments);
    }
    
    /**
     * Return list of required by scene resources, will be provided in prepare method
     */
    getResources() {
        return [];
    }
    
    /**
     * Prepare game scene, load resources, cache, etc.
     */
    prepare() {
        this.ready = true;
        
        return this;
    }
    
    /**
     * Method to be invoked right after prepare method
     */
    start() {
        return this;
    }
    
    /**
     * Method to be invoked before scene deactivation
     */
    finish() {
        return this;
    }
    
    /**
     * Method invoked on user interaction
     * 
     * @param {String} action - action name defined in io
     */
    input(action) {
        
    }
    
    /**
     * Update scene state
     */
    update() {
        
    }
    
    /**
     * Render scene
     * 
     * @param {Canvas2DContext} context - canvas context to draw on
     * @param {Number} time - current elapsed time of application, time passed since application start
     */
    render(context, time) {
        
    }
}
