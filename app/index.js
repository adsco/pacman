import Game from './vendors/game';

window.onload = function() {
    var game = new Game();
    
    game.fps = 1;
    game.run();
};
