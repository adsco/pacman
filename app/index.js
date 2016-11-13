import PacmanGame from './game';
import Canvas from './canvas';
import ResourceLoader from './resourceLoader';
import BackgroundLayer from './layers/background';

window.onload = function() {
    var canvas = new Canvas(document.getElementById('game-viewport'));
    var resourceLoader = new ResourceLoader();
    var width = 500;
    var height = 600;

    canvas.width = width;
    canvas.height = height;

    resourceLoader.addResource('background', 'image', 'resources/images/tiles.png');
    resourceLoader.addResource('pacman_idle', 'image', 'resources/images/pacman/idle.png');
    resourceLoader.addResource('blinky_move_left', 'image', 'resources/images/ghosts/blinky/move_left_1.png');
    resourceLoader.addResource('clyde_move_left', 'image', 'resources/images/ghosts/clyde/move_left_1.png');
    resourceLoader.addResource('inky_move_left', 'image', 'resources/images/ghosts/inky/move_left_1.png');
    resourceLoader.addResource('pinky_move_left', 'image', 'resources/images/ghosts/pinky/move_left_1.png');
    resourceLoader
        .loadResources()
        .then((resources) => {
            var background = new BackgroundLayer();
    
            background.image = resources[0].resource;
            background.width = 448;
            background.height = 576;
            
            background.render(canvas.getContext());
            
            console.log(resources);
    
            
        }
    );

    canvas.drawRect('rgb(0, 0, 0, 1)', 0, 0, width, height);
    
    setTimeout(function() {
        canvas.clear();
    }, 5000);
};
