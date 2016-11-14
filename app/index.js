import PacmanGame from './game';
import Canvas from './canvas';
import ResourceLoader from './resourceLoader';
import BackgroundLayer from './layers/background';
import Frame from './frame';
import FrameSet from './frame-set';

window.onload = function() {
    var canvas = new Canvas(document.getElementById('game-viewport'));
    var resourceLoader = new ResourceLoader();
    var width = 500;
    var height = 600;

    canvas.width = width;
    canvas.height = height;

    resourceLoader.addResource('background', 'image', 'resources/images/pacman.png');
    resourceLoader
        .loadResources()
        .then((resources) => {
            var background = new BackgroundLayer();
            var frame1 = new Frame(201, 3, 165, 213, 500);
            var frame2 = new Frame(370, 3, 165, 213, 500);
            var frameSet = new FrameSet(resources[0].resource);
            var update = function() {
                var time = window.performance.now();

                var frame = background.getFrame(time);

                canvas.getContext().drawImage(frame.image, frame.x, frame.y, frame.width, frame.height, 0, 0, frame.width, frame.height);

                window.requestAnimationFrame(update);
            }
            
            frameSet.addFrame(frame1);
            frameSet.addFrame(frame2);
            
            background.addAnimation('blink', frameSet);
            background.startAnimation('blink');
            
            console.log(resources);
            
            update();
        }
    );

    canvas.drawRect('rgb(0, 0, 0, 1)', 0, 0, width, height);
};




