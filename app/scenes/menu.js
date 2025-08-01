import Scene from './scene';
import ResourceLoader from '../loaders/resource-loader';
import Pen from '../menus/pen';
import MenuItem from '../menus/item';
import Menu from '../menus/menu';
import IO from '../io/io';
import App from '../app';

/**
 * Base menu class, menu takes control of a game, same as scene, should inherit from scene
 */
export default class SceneMenu extends Scene {
    constructor() {
        super(...arguments);

        this._sprite = null;
        this._pen = null;
        this._menu = null;
        this._selectedItemIndex = 0;
    }
    
    static get EVENT_1_PLAYER_SELECT() {
        return 'event_1_player_select';
    }
    
    static get EVENT_CREDITS_SELECT() {
        return 'event_credits_select';
    }
    
    getResources() {
        return [{
            type: 'image',
            url: 'resources/images/font.png'
        }];
    }

    /**
     * Preload resources required by this scene
     */
    prepare(resources) {
        var pen = new Pen(resources[0]);
        var menu = new Menu();
        
        menu.addItem(new MenuItem(pen, '1 player'));
        menu.addItem(new MenuItem(pen, 'credits'));

        menu.selectItem(this._selectedItemIndex);

        this._pen = pen;
        this._menu = menu;
        
        return this;
    }
    
    /**
     * Handle user input
     */
    input(action) {
        var oldIndex = this._selectedItemIndex;

        switch (action) {
            case IO.UP: {
                this._selectedItemIndex = Math.max(this._selectedItemIndex - 1, 0);
                break;
            }
            
            case IO.DOWN: {
                this._selectedItemIndex = Math.min(this._menu.items.length - 1, this._selectedItemIndex + 1);
                break;
            }
            
            case IO.START: {
                switch (this._selectedItemIndex) {
                    case 0: {
                        this.triggerEvent(SceneMenu.EVENT_1_PLAYER_SELECT);
                        break;
                    }
                    case 1: {
                        this.triggerEvent(SceneMenu.EVENT_CREDITS_SELECT);
                        break;
                    }
                }

                break;
            }
        }
        
        if (oldIndex !== this._selectedItemIndex) {
            this._menu.deselectItem(oldIndex);
        }
        
        this._menu.selectItem(this._selectedItemIndex);
    }
    
    update() {
        
    }
    
    render(context, time) {
        this._menu.render(context, 80, 132);
    }
}
