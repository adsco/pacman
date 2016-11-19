import Scene from './scene';

/**
 * Base menu class, menu takes control of a game, same as scene, should inherit from scene
 */

export default class Menu extends Scene {
    constructor() {
        super(...arguments);
    }
    
    update(time) {
        var ctx = this._canvas.getContext();
        
        ctx.fillStyle = '#000';
        ctx.fillText('Menu', 100, 100);
    }
    
    render() {
        
    }
}
