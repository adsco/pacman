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
            url: 'resources/images/sprite_general.png'
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
            case IO.UP: {
                this._map.playAnimation(Map.ANIMATION_FLASHING);
                break;
            }
            case IO.DOWN: {
                this._map.playAnimation(Map.ANIMATION_DEFAULT);
                break;
            }
        }
    }
    
    update() {
        
    }
    
    render(context, time) {
        this._map.render(context, time, 0, 24);
        this._pen.write('1UP', context, 24);
        this._pen.write('HIGH SCORE', context, 72);
        this._pen.write('00', context, 40, 8);
        this._iconPen.write(['life', 'life', 'life'], context, 0, 272);
        this._iconPen.write(['bonus_cherry'], context, 180, 272);
        this._iconPen.write(['ready'], context, 88, 160);
        this._iconPen.write(['pie'], context, 8, 32);
        this._iconPen.write(['pie'], context, 8, 40);
        this._iconPen.write(['energizer'], context, 8, 48);
    }
}
