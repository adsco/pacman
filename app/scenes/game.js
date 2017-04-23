import Scene from './scene';
import IO from '../io/io';
import Map from '../levels/map';
import Pen from '../menus/pen';
import IconPen from '../menus/icon-pen';

export default class SceneGame extends Scene {
    constructor() {
        super(...arguments);
        
        this._map = null;
        this._pen = null;
        this._iconPen = null;
    }
    
    static get EVENT_GAME_END() {
        return 'event_game_end';
    }
    
    getResources() {
        return [{
            type: 'image',
            url: 'resources/images/main_sprite.png'
        }, {
            type: 'image',
            url: 'resources/images/font.png'
        }];
    }
    
    prepare(resources) {
        this._map = new Map(resources[0]);
        this._pen = new Pen(resources[1]);
        this._iconPen = new IconPen(resources[0]);
        
        return this;
    }
    
    start() {
        
    }
    
    finish() {
        
    }
    
    input(action) {
        switch (action) {
            case IO.START: {
                this.triggerEvent(SceneGame.EVENT_GAME_END);
                break;
            }
        }
    }
    
    update() {
        
    }
    
    render(context) {
        this._map.render(context, 0, 24);
        this._pen.write('1UP', context, 24);
        this._pen.write('HIGH SCORE', context, 72);
        this._pen.write('00', context, 40, 8);
        this._iconPen.write(['life', 'life', 'life'], context, 0, 272);
        this._iconPen.write(['bonus_cherry'], context, 180, 272);
    }
}
