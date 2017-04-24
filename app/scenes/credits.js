import Scene from './scene';
import Pen from '../menus/pen';
import IO from '../io/io';
import App from '../app';

export default class SceneCredits extends Scene {
    constructor(app) {
        super(...arguments);

        this._pen = null;
        this._menu = null;
    }
    
    static EVENT_SCENE_INTERRUPTED() {
        return 'event_scene_interrupted';
    }
    
    getResources() {
        return [{
            type: 'image',
            url: 'resources/images/font.png'
        }];
    }
    
    prepare(resources) {
        this._pen = new Pen(resources[0]);
        
        return this;
    }
    
    input(action) {
        if (action === IO.START) {
            this.triggerEvent(SceneCredits.EVENT_SCENE_INTERRUPTED);
        }
    }
    
    render(context, time) {
        this._pen.write('Credits to developers', context, 28, 140);
    }
}
