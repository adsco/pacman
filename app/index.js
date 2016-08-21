import PacmanGame from './game';

window.onload = function() {
    var canvas = document.getElementById('game-viewport');
    var game = new PacmanGame(canvas.getContext('2d'), canvas.width, canvas.height);
    
    game.fps = 1;
    game.run();
};
