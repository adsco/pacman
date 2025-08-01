export default class IO {
    constructor(context) {
        this._context = context;
        this._callback = null;
        this._keyMap = [{
            keys: [87, 38],
            action: IO.UP
        }, {
            keys: [68, 39],
            action: IO.RIGHT
        }, {
            keys: [83, 40],
            action: IO.DOWN
        }, {
            keys: [65, 37],
            action: IO.LEFT
        }, {
            keys: [13],
            action: IO.START
        }];
    }
    
    static get UP() {
        return 'up';
    }
    
    static get RIGHT() {
        return 'right';
    }
    
    static get DOWN() {
        return 'down';
    }
    
    static get LEFT() {
        return 'left';
    }
    
    static get START() {
        return 'start';
    }
    
    activate(scene) {
        this._context.addEventListener('keydown', (event) => {
            let keyCode = event.keyCode;
            let key = null;
            
            for (let i = 0, len = this._keyMap.length; i < len; i++) {
                if (this._keyMap[i].keys.includes(keyCode)) {
                    key = this._keyMap[i].action;
                    break;
                }
            }
            
            scene.processInput(key);
        });
    }
}