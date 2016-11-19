export default class IO {
    _setupProperties() {
        this._gameKeys = {};
    }
    
    constructor(gameKeys) {
        this._setupProperties();
        
        this._gameKeys = gameKeys;
    }
    
    getKey(event) {
        var keyCode = event.keyCode;
        var gameKey = null;
        
        for (let key in this._gameKeys) {
            if (this._gameKeys[key].indexOf(keyCode) !== -1) {
                gameKey = key;
                break;
            }
        }
        
        return gameKey;
    }
}