import Frame from './../../bower_components/layer/frame/frame';
import StaticText from './../../bower_components/layer/animation/static-text';

export default class Pen { 
    constructor(sprite) {
        this._pen = this._initPen(sprite);
    }
    
    _initPen(sprite) {
        var pen = new StaticText();

        pen.addSymbol(' ', new Frame(sprite, 8, 8));
        pen.addSymbol('>', new Frame(sprite, 8, 8, 112, 8));
        pen.addSymbol('0', new Frame(sprite, 8, 8, 0, 8));
        pen.addSymbol('1', new Frame(sprite, 8, 8, 8, 8));
        pen.addSymbol('2', new Frame(sprite, 8, 8, 16, 8));
        pen.addSymbol('3', new Frame(sprite, 8, 8, 24, 8));
        pen.addSymbol('4', new Frame(sprite, 8, 8, 32, 8));
        pen.addSymbol('5', new Frame(sprite, 8, 8, 40, 8));
        pen.addSymbol('6', new Frame(sprite, 8, 8, 48, 8));
        pen.addSymbol('7', new Frame(sprite, 8, 8, 56, 8));
        pen.addSymbol('8', new Frame(sprite, 8, 8, 64, 8));
        pen.addSymbol('9', new Frame(sprite, 8, 8, 72, 8));
        pen.addSymbol('a', new Frame(sprite, 8, 8, 8, 32));
		pen.addSymbol('b', new Frame(sprite, 8, 8, 16, 32));
		pen.addSymbol('c', new Frame(sprite, 8, 8, 24, 32));
		pen.addSymbol('d', new Frame(sprite, 8, 8, 32, 32));
		pen.addSymbol('e', new Frame(sprite, 8, 8, 40, 32));
		pen.addSymbol('f', new Frame(sprite, 8, 8, 48, 32));
		pen.addSymbol('g', new Frame(sprite, 8, 8, 56, 32));
		pen.addSymbol('h', new Frame(sprite, 8, 8, 64, 32));
        pen.addSymbol('i', new Frame(sprite, 8, 8, 72, 32));
        pen.addSymbol('j', new Frame(sprite, 8, 8, 80, 32));
        pen.addSymbol('k', new Frame(sprite, 8, 8, 88, 32));
        pen.addSymbol('l', new Frame(sprite, 8, 8, 96, 32));
        pen.addSymbol('m', new Frame(sprite, 8, 8, 104, 32));
        pen.addSymbol('n', new Frame(sprite, 8, 8, 112, 32));
        pen.addSymbol('o', new Frame(sprite, 8, 8, 120, 32));
        pen.addSymbol('p', new Frame(sprite, 8, 8, 0, 40));
        pen.addSymbol('q', new Frame(sprite, 8, 8, 8, 40));
        pen.addSymbol('r', new Frame(sprite, 8, 8, 16, 40));
        pen.addSymbol('s', new Frame(sprite, 8, 8, 24, 40));
        pen.addSymbol('t', new Frame(sprite, 8, 8, 32, 40));
        pen.addSymbol('u', new Frame(sprite, 8, 8, 40, 40));
        pen.addSymbol('v', new Frame(sprite, 8, 8, 48, 40));
        pen.addSymbol('w', new Frame(sprite, 8, 8, 56, 40));
        pen.addSymbol('x', new Frame(sprite, 8, 8, 64, 40));
        pen.addSymbol('y', new Frame(sprite, 8, 8, 72, 40));
        pen.addSymbol('z', new Frame(sprite, 8, 8, 80, 40));
		pen.addSymbol('A', new Frame(sprite, 8, 8, 8, 16));
		pen.addSymbol('B', new Frame(sprite, 8, 8, 16, 16));
		pen.addSymbol('C', new Frame(sprite, 8, 8, 24, 16));
		pen.addSymbol('D', new Frame(sprite, 8, 8, 32, 16));
		pen.addSymbol('E', new Frame(sprite, 8, 8, 40, 16));
		pen.addSymbol('F', new Frame(sprite, 8, 8, 48, 16));
		pen.addSymbol('G', new Frame(sprite, 8, 8, 56, 16));
		pen.addSymbol('H', new Frame(sprite, 8, 8, 64, 16));
        pen.addSymbol('I', new Frame(sprite, 8, 8, 72, 16));
        pen.addSymbol('J', new Frame(sprite, 8, 8, 80, 16));
        pen.addSymbol('K', new Frame(sprite, 8, 8, 88, 16));
        pen.addSymbol('L', new Frame(sprite, 8, 8, 96, 16));
        pen.addSymbol('M', new Frame(sprite, 8, 8, 104, 16));
        pen.addSymbol('N', new Frame(sprite, 8, 8, 112, 16));
        pen.addSymbol('O', new Frame(sprite, 8, 8, 120, 16));
        pen.addSymbol('P', new Frame(sprite, 8, 8, 0, 24));
        pen.addSymbol('Q', new Frame(sprite, 8, 8, 8, 24));
        pen.addSymbol('R', new Frame(sprite, 8, 8, 16, 24));
        pen.addSymbol('S', new Frame(sprite, 8, 8, 24, 24));
        pen.addSymbol('T', new Frame(sprite, 8, 8, 32, 24));
        pen.addSymbol('U', new Frame(sprite, 8, 8, 40, 24));
        pen.addSymbol('V', new Frame(sprite, 8, 8, 48, 24));
        pen.addSymbol('W', new Frame(sprite, 8, 8, 56, 24));
        pen.addSymbol('X', new Frame(sprite, 8, 8, 64, 24));
        pen.addSymbol('Y', new Frame(sprite, 8, 8, 72, 24));
        pen.addSymbol('Z', new Frame(sprite, 8, 8, 80, 24));
        
        return pen;
    }
    
    write(text = '', context, x, y) {
        this._pen.render(text, context, x, y);
    }
}