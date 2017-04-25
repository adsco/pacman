import Scene from './scene';
import IO from '../io/io';
import Map from '../levels/map';
import DotMap from '../levels/dot-map';
import GeoDataMap from '../levels/geo-data';
import Pen from '../menus/pen';
import IconPen from '../menus/icon-pen';
import Pacman from '../actors/pacman';

export default class SceneGame extends Scene {
    constructor() {
        super(...arguments);
        
        this._map = null;
        this._pen = null;
        this._iconPen = null;
        this._debug = true;
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
        this._pacman = new Pacman(resources[0]);
        
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
                this._pacman.setAnimation(Pacman.ANIMATION_MOVE_UP);
                break;
            }
            case IO.RIGHT: {
                this._pacman.setAnimation(Pacman.ANIMATION_MOVE_RIGHT);
                break;
            }
            case IO.DOWN: {
                this._map.playAnimation(Map.ANIMATION_DEFAULT);
                this._pacman.setAnimation(Pacman.ANIMATION_MOVE_DOWN);
                break;
            }
            case IO.LEFT: {
                this._pacman.setAnimation(Pacman.ANIMATION_MOVE_LEFT);
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
        this._iconPen.write(['life', 'life', 'life'], context, time, 0, 272);
        this._iconPen.write(['bonus_cherry'], context, time, 180, 272);
        this._iconPen.write(['ready'], context, time, 88, 160);
        this._pacman.render(context, time);
        
        // Render dot map
        for (let i = 0, len = DotMap.length; i < len; i++) {
            this._iconPen.write([DotMap[i].type], context, time, DotMap[i].x * 8, DotMap[i].y * 8);
        }
        
        if (this._debug) {
            for (let i = 0; i < 36; i++) {
                for (let j = 0; j < 28; j++) {
                    if (GeoDataMap[i][j]) {
                        context.strokeStyle = '#4caf50';
                    } else {
                        context.strokeStyle = '#af4c51';
                    }

                    context.strokeRect(j * 8, i * 8, 8, 8);
                }
            }
        }
    }
}
