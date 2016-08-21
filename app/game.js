import Game from './vendors/game';
import Map from './map';

export default class PacmanGame extends Game {
    constructor(context, width, height) {
        super(...arguments);
        
        this._map = new Map(width, height);
        this._renderList.push(this._map);
    }
}
