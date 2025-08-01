export default class Physics2D {
    constructor(tileWidth = 8, tileHeight = 8) {
        this._tileWidth = tileWidth;
        this._tileHeight = tileHeight;
        this._objectsPool = {};
    }
    
    register(x, y, width = 1, height = 1, name = '') {
        var currentWidth = x + width - 1;
        var currentHeight;

        if (width < 1 || height < 1) {
            throw new Error('Width and height must be greater or equal to 1');
        }
        
        while (currentWidth >= x) {
            currentHeight = y + height - 1;

            if (!this._objectsPool.hasOwnProperty(currentWidth)) {
                this._objectsPool[currentWidth] = {};
            }

            while (currentHeight >= y) {
                this._objectsPool[currentWidth][currentHeight] = name;
                
                currentHeight--;
            }
        
            currentWidth--;
        }
    }
    
    rayCast(x, y) {
        var hitObject = null;
        
        if (this._objectsPool.hasOwnProperty(x) && this._objectsPool[x].hasOwnProperty(y)) {
            hitObject = this._objectsPool[x][y];
        }
        
        return hitObject;
    }
    
    printDebug() {
        console.log(this._objectsPool);
    }
    
    render(context) {
        for (let i = 0; i < 36; i++) {
            for (let j = 0; j < 28; j++) {
                if (i === 0) {
                    context.fillStyle = '#fff';
                    context.fillText(i, j * this._tileWidth, i * this._tileHeight);
                }
                
                if (j === 0) {
                    context.fillStyle = '#fff';
                    context.fillText(i, j * this._tileWidth, i * this._tileHeight);
                }
                
                if (this._objectsPool.hasOwnProperty(j) && this._objectsPool[j].hasOwnProperty(i)) {
                    context.strokeStyle = '#4caf50';
                    
                    if (this._objectsPool[j][i] === 'barrier') {
                        context.strokeStyle = '#ee01ff';
                    }
                } else {
                    context.strokeStyle = '#af4c51';
                }

                context.strokeRect(j * this._tileWidth, i * this._tileHeight, this._tileWidth, this._tileHeight);
            }
        }
    }
}

export default new Physics2D();