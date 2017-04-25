import Frame from './../../bower_components/layer/frame/frame';
import AnimationLayer from './../../bower_components/layer/animation/animated';

class IconText {
    constructor() {
		this._symbols = {};
	}

	addSymbol(id, frame) {
		this._symbols[id] = frame;
	}

	render(symbols, context, time, x, y) {
        var offsetX = 0;
		var frame;
        
		for (var i = 0, len = symbols.length; i < len; i++) {
			frame = this._symbols[symbols[i]];
            
            if (frame instanceof AnimationLayer) {
                frame.render(context, time, x + offsetX, y);
            } else {
                frame.render(context, x + offsetX, y);
                offsetX += frame.width;
            }
		}
	}
}

export default class IconPen {
    constructor(sprite) {
        this._pen = this._initPen(sprite);
    }
    
    _initPen(sprite) {
        var pen = new IconText();
        
        pen.addSymbol('life', new Frame(sprite, 16, 16, 291, 109));
        pen.addSymbol('bonus_frunze', new Frame(sprite, 16, 16, 242, 93));
        pen.addSymbol('bonus_red_apple_1', new Frame(sprite, 16, 16, 258, 93));
        pen.addSymbol('bonus_red_apple_2', new Frame(sprite, 16, 16, 274, 93));
        pen.addSymbol('bonus_orange_apple_1', new Frame(sprite, 16, 16, 290, 93));
        pen.addSymbol('bonus_orange_apple_2', new Frame(sprite, 16, 16, 242, 110));
        pen.addSymbol('bonus_strawberry', new Frame(sprite, 16, 16, 258, 110));
        pen.addSymbol('bonus_cherry', new Frame(sprite, 16, 16, 274, 110));
        pen.addSymbol('ready', new Frame(sprite, 47, 8, 318, 245));
        pen.addSymbol('game_over', new Frame(sprite, 80, 8, 231, 245));
        pen.addSymbol('dot', new Frame(sprite, 8, 8, 290, 78));
        pen.addSymbol('energizer', new AnimationLayer([
            new Frame(sprite, 8, 8, 299, 79),
            new Frame(sprite, 8, 8, 308, 74)
        ], 6, true));
        
        return pen;
    }
    
    write(symbols, context, time, offsetX, offsetY) {
        this._pen.render(symbols, context, time, offsetX, offsetY);
    }
}