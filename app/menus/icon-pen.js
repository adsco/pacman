import Frame from './../../bower_components/layer/frame/frame';

class IconText {
    constructor() {
		this._symbols = {};
	}

	addSymbol(id, frame) {
		this._symbols[id] = frame;
	}

	render(symbols, context, x, y) {
        var offsetX = 0;
		var frame;
        
		for (var i = 0, len = symbols.length; i < len; i++) {
			frame = this._symbols[symbols[i]];

			frame.render(context, x + offsetX, y);

			offsetX += frame.width;
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
        pen.addSymbol('pie', new Frame(sprite, 8, 8, 290, 78));
        pen.addSymbol('energizer', new Frame(sprite, 8, 8, 299, 79));
        
        return pen;
    }
    
    write(symbols, context, offsetX, offsetY) {
        this._pen.render(symbols, context, offsetX, offsetY);
    }
}