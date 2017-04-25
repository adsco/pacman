import Canvas from './canvas/canvas';
import ResourceLoader from './loaders/resource-loader';
import Pen from './menus/pen';
import MenuItem from './menus/item';
import Menu from './menus/menu';
import SceneLoading from './scenes/loading';
import SceneMenu from './scenes/menu';
import SceneCredits from './scenes/credits';
import SceneGame from './scenes/game';
import IO from './io/io';

export default class PacmanGame {
    constructor(canvasElement) {
        this._canvas = new Canvas(canvasElement);
        this._context = this._canvas.getContext();
        this._resourceLoader = new ResourceLoader();
        this._sceneLoading = new SceneLoading();
        this._sceneMenu = new SceneMenu();
        this._sceneCredits = new SceneCredits();
        this._sceneGame = new SceneGame();
        this._io = new IO(this._canvas.element);
        
        this._canvas.setWidth(224);
        this._canvas.setHeight(288);
        
        this.bindScenes();
        
        // Yep, to keep context of this
        this.update = this.update.bind(this);
    }
    
    static get SCENE_MENU() {
        return 'menu';
    }
    
    static get SCENE_GAME() {
        return 'game';
    }
    
    static get SCENE_CREDITS() {
        return 'credits';
    }
    
    bindScenes() {
        this._sceneMenu.addEventListener(SceneMenu.EVENT_1_PLAYER_SELECT, () => {
            this.switchScene(this._sceneGame);
        });
        this._sceneMenu.addEventListener(SceneMenu.EVENT_CREDITS_SELECT, () => {
            this.switchScene(this._sceneCredits);
        });
        this._sceneCredits.addEventListener(SceneCredits.EVENT_SCENE_INTERRUPTED, () => {
            this.switchScene(this._sceneMenu);
        });
        this._sceneGame.addEventListener(SceneGame.EVENT_GAME_END, () => {
            this.switchScene(this._sceneMenu);
        });
    }
    
    switchScene(scene) {
        if (this._activeScene) {
            this._activeScene.finish();
        }

        // While resources are being loaded, switch to loading scene
        this._activeScene = this._sceneLoading;

        this._resourceLoader
            .loadResources(scene.getResources())
            .then((resources) => {
                scene.prepare(resources)
                    .start();
            
                this._activeScene = scene;
            });
    }
    
    processInput(action) {
        this._activeScene.input(action);
    }
    
    update() {
        let time = window.performance.now();

        this._canvas.clear();
        
        this._context.fillStyle = '#000';
        this._context.fillRect(0, 0, 224, 288);

        this._activeScene.update();
        this._activeScene.render(this._context, time);

        window.requestAnimationFrame(this.update);
    }
    
    run() {
        this._io.activate(this);
        
        this.switchScene(this._sceneMenu);

        this.update();
    }
}
