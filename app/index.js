import PacmanGame from './game';
import Canvas from './canvas';
import ResourceLoader from './resourceLoader';
import BackgroundLayer from './layers/background';
import ActorLayer from './layers/actor';
import Frame from './frame';
import FrameSet from './frame-set';

window.onload = function() {
    var canvas = new Canvas(document.getElementById('game-viewport'));
    var resourceLoader = new ResourceLoader();
    var width = 500;
    var height = 600;

    canvas.width = width;
    canvas.height = height;

    resourceLoader
        .loadResource('background', 'image', 'resources/images/pacman.png')
        .then((resource) => {
            var background = createBackgroundAnimation(resource.resource);
            var pacmanIdle = createPacmanAnimation(resource.resource);
            var pacmanMoveLeft = createPacmanAnimation(resource.resource);
            var pacmanMoveTop = createPacmanAnimation(resource.resource);
            var pacmanMoveRight = createPacmanAnimation(resource.resource);
            var pacmanMoveBottom = createPacmanAnimation(resource.resource);
            var pacmanDeath = createPacmanAnimation(resource.resource);
            var animatronics = [
                background,
                pacmanIdle,
                pacmanMoveLeft,
                pacmanMoveTop,
                pacmanMoveRight,
                pacmanMoveBottom,
                pacmanDeath
            ];
            var update = function() {
                var time = window.performance.now();
                var frame;

                for (let i = 0, len = animatronics.length; i < len; i++) {
                    frame = animatronics[i].getFrame(time);

                    canvas.getContext().drawImage(
                        frame.image,
                        frame.x,
                        frame.y,
                        frame.width,
                        frame.height,
                        (i - 1) * 20,
                        0,
                        frame.width,
                        frame.height
                    );
                }

                window.requestAnimationFrame(update);
            };
            
            background.startAnimation('blink');
            pacmanIdle.startAnimation('idle');
            pacmanMoveLeft.startAnimation('moveLeft');
            pacmanMoveTop.startAnimation('moveTop');
            pacmanMoveRight.startAnimation('moveRight');
            pacmanMoveBottom.startAnimation('moveBottom');
            pacmanDeath.startAnimation('death');
            
            update();
        }
    );

    canvas.drawRect('rgb(0, 0, 0, 1)', 0, 0, width, height);
};

function createBackgroundAnimation(image) {
    var background = new BackgroundLayer();
    var frameSet = new FrameSet(image);

    frameSet.addFrames([
        new Frame(201, 3, 165, 213, 500),
        new Frame(370, 3, 165, 213, 500)
    ]);

    background.addAnimation('blink', frameSet);
    
    return background;
}

function createPacmanAnimation(image) {
    var pacman = new ActorLayer();
    var frameSetIdle = new FrameSet(image);
    var frameSetMoveLeft = new FrameSet(image);
    var frameSetMoveTop = new FrameSet(image);
    var frameSetMoveRight = new FrameSet(image);
    var frameSetMoveBottom = new FrameSet(image);
    var frameSetDeath = new FrameSet(image);
    
    frameSetIdle.addFrame(new Frame(2, 89, 15, 15, 0));
    frameSetMoveLeft.addFrames([
       new Frame(46, 89, 15, 15, 250),
       new Frame(62, 89, 10, 15, 250)
    ]);
    frameSetMoveTop.addFrames([
       new Frame(75, 91, 14, 13, 250),
       new Frame(91, 93, 15, 11, 250)
    ]);
    frameSetMoveRight.addFrames([
       new Frame(19, 89, 13, 15, 250),
       new Frame(34, 89, 10, 15, 250)
    ]);
    frameSetMoveBottom.addFrames([
       new Frame(108, 91, 15, 13, 250),
       new Frame(125, 94, 15, 10, 250)
    ]);
    frameSetDeath.addFrames([
       new Frame(2, 110, 17, 9, 150),
       new Frame(21, 112, 17, 7, 150),
       new Frame(40, 113, 17, 6, 150),
       new Frame(59, 113, 17, 6, 150),
       new Frame(78, 112, 17, 7, 150),
       new Frame(97, 111, 15, 8, 150),
       new Frame(114, 111, 11, 8, 150),
       new Frame(127, 112, 7, 7, 150),
       new Frame(136, 112, 3, 7, 150),
       new Frame(141, 108, 13, 11, 500)
    ]);
    
    pacman.addAnimation('idle', frameSetIdle);
    pacman.addAnimation('moveLeft', frameSetMoveLeft);
    pacman.addAnimation('moveTop', frameSetMoveTop);
    pacman.addAnimation('moveRight', frameSetMoveRight);
    pacman.addAnimation('moveBottom', frameSetMoveBottom);
    pacman.addAnimation('death', frameSetDeath);
    
    return pacman;
}
