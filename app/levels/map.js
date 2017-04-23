export default class Map {
    constructor(sprite) {
        this._sprite = sprite;
        this._state = null;
        this._width = 224;
        this._height = 248;
        this._currentOffset = {};
        this._initStates();
        this._initBarrier();
        
        this._hasBarrier = true;
        this.state = Map.STATE_NORMAL;
    }
    
    static get STATE_NORMAL() {
        return 'state_normal';
    }
    
    static get STATE_SHINE() {
        return 'state_shine';
    }
    
    _initStates() {
        this._states = {
            [Map.STATE_NORMAL]: {
                x: 7,
                y: 8
            },
            [Map.STATE_SHINE]: {
                x: 374,
                y: 8
            }
        };
    }
    
    _initBarrier() {
        this._barrierWidth = 16;
        this._barrierHeight = 8;
        this._barrierOffsetX = 308;
        this._barrierOffsetY = 66;
        this._barrierInnerOffsetX = 103;
        this._barrierInnerOffsetY = 96;
    }
    
    set state (state) {
        if (!this._states.hasOwnProperty(state)) {
            throw new Error(`Unknown state "${state}"`);
        }
        
        this._state = state;
        this._currentOffset = this._states[state];
    }
    
    set hasBarrier(hasBarrier) {
        this._hasBarrier = hasBarrier;
    }
    
    update() {
        
    }
    
    render(context, offsetX = 0, offsetY = 0) {
        context.drawImage(
            this._sprite,
            this._currentOffset.x,
            this._currentOffset.y,
            this._width,
            this._height,
            offsetX,
            offsetY,
            this._width,
            this._height
        );

        if (this._hasBarrier) {
            context.drawImage(
                this._sprite,
                this._barrierOffsetX,
                this._barrierOffsetY,
                this._barrierWidth,
                this._barrierHeight,
                this._barrierInnerOffsetX + offsetX,
                this._barrierInnerOffsetY + offsetY,
                this._barrierWidth,
                this._barrierHeight
            )
        }
    }
}