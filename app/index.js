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

    canvas.setWidth(width);
    canvas.setHeight(height);

    resourceLoader
        .loadResource('background', 'image', 'resources/images/pacman-google.png')
        .then((resource) => {
            var background = createBackgroundAnimation(resource.resource);
            var pacmanIdle = createPacmanAnimation(resource.resource);
            var pacmanMoveLeft = createPacmanAnimation(resource.resource);
            var pacmanMoveTop = createPacmanAnimation(resource.resource);
            var pacmanMoveRight = createPacmanAnimation(resource.resource);
            var pacmanMoveBottom = createPacmanAnimation(resource.resource);
            var pacmanDeath = createPacmanAnimation(resource.resource);
            var blinkyMoveLeft = createBlinkyAnimation(resource.resource);
            var pinkyMoveRight = createPinkyAnimation(resource.resource);
            var inkyMoveTop = createInkyAnimation(resource.resource);
            var clydeMoveBottom = createClydeAnimation(resource.resource);
            var inkyFrighten = createInkyAnimation(resource.resource);
            var inkyFrightenEnds = createInkyAnimation(resource.resource);
            var inkyEyesTop = createInkyAnimation(resource.resource);
            var inkyEyesBottom = createInkyAnimation(resource.resource);
            var inkyEyesLeft = createInkyAnimation(resource.resource);
            var inkyEyesRight = createInkyAnimation(resource.resource);
            var animatronics = [
                pacmanIdle,
                pacmanMoveLeft,
                pacmanMoveTop,
                pacmanMoveRight,
                pacmanMoveBottom,
                pacmanDeath,
                blinkyMoveLeft,
                pinkyMoveRight,
                inkyMoveTop,
                clydeMoveBottom,
                inkyFrighten,
                inkyFrightenEnds,
                inkyEyesTop,
                inkyEyesBottom,
                inkyEyesLeft,
                inkyEyesRight
            ];
            var update = function() {
                var time = window.performance.now();
                var frame;

                canvas.clear();
                canvas.getContext().fillRect(0, 0, width, height);
                
                // Draw grid
//                for (let i = 0, len = width / 8; i < len; i++) {
//                    let ctx = canvas.getContext();
//                    
//                    ctx.strokeStyle = '#fff';
//                    
//                    ctx.moveTo(i * 8, 0);
//                    
//                    ctx.lineTo(i * 8, height);
//                    
//                    ctx.stroke();
//                }
//                
//                for (let i = 0, len = height / 8; i < len; i++) {
//                    let ctx = canvas.getContext();
//                    
//                    ctx.strokeStyle = '#fff';
//                    
//                    ctx.moveTo(0, i * 8);
//                    
//                    ctx.lineTo(width, i * 8);
//                    
//                    ctx.stroke();
//                }
                
                for (let i = 0, len = animatronics.length; i < len; i++) {
                    frame = animatronics[i].getFrame(time);

                    canvas.getContext().drawImage(
                        frame.image,
                        frame.x,
                        frame.y,
                        frame.width,
                        frame.height,
                        i * 16 + frame.shiftX,
                        2 + frame.shiftY,
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
            blinkyMoveLeft.startAnimation('moveLeft');
            pinkyMoveRight.startAnimation('moveRight');
            inkyMoveTop.startAnimation('moveTop');
            clydeMoveBottom.startAnimation('moveBottom');
            inkyFrighten.startAnimation('frighten');
            inkyFrightenEnds.startAnimation('frightenEnds');
            inkyEyesTop.startAnimation('eyesMoveTop');
            inkyEyesBottom.startAnimation('eyesMoveBottom');
            inkyEyesLeft.startAnimation('eyesMoveLeft');
            inkyEyesRight.startAnimation('eyesMoveRight');
            
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
    
    frameSetIdle.addFrame(new Frame(42, 2, 14, 14, 0, 1, -1));
    frameSetMoveLeft.addFrames([
       new Frame(3, 2, 13, 14, 250, 1, -1),
       new Frame(26, 2, 10, 14, 250, 4, -1)
    ]);
    frameSetMoveTop.addFrames([
       new Frame(2, 43, 14, 13, 250, 1, -1),
       new Frame(22, 46, 14, 10, 250, 1, 2)
    ]);
    frameSetMoveRight.addFrames([
       new Frame(2, 22, 13, 14, 250, 1, -1),
       new Frame(22, 22, 10, 14, 250, 1, -1)
    ]);
    frameSetMoveBottom.addFrames([
       new Frame(2, 62, 14, 13, 250, 1, -1),
       new Frame(22, 61, 14, 10, 250, 1, -1)
    ]);
    frameSetDeath.addFrames([
       new Frame(2, 244, 14, 10, 1500, 1, 2),
       new Frame(21, 245, 16, 9, 1500, 0, 2),
       new Frame(42, 247, 16, 7, 1500, 1, 3),
       new Frame(62, 248, 16, 6, 1500, 1, 4),
       new Frame(82, 249, 16, 6, 1500, 1, 4),
       new Frame(102, 250, 16, 6, 1500, 1, 4),
       new Frame(122, 249, 16, 8, 1500, 1, 2),
       new Frame(144, 249, 10, 8, 1500, 3, 2),
       new Frame(166, 249, 6, 8, 1500, 5, 2),
       new Frame(188, 249, 2, 7, 1500, 7, 2),
       new Frame(203, 247, 12, 11, 1500, 2, 0)
    ]);

    pacman.addAnimation('idle', frameSetIdle);
    pacman.addAnimation('moveLeft', frameSetMoveLeft);
    pacman.addAnimation('moveTop', frameSetMoveTop);
    pacman.addAnimation('moveRight', frameSetMoveRight);
    pacman.addAnimation('moveBottom', frameSetMoveBottom);
    pacman.addAnimation('death', frameSetDeath);
    
    return pacman;
}

function createBlinkyAnimation(image) {
    var blinky = new ActorLayer();
    var frameSetMoveTop = new FrameSet(image);
    var frameSetMoveRight = new FrameSet(image);
    var frameSetMoveBottom = new FrameSet(image);
    var frameSetMoveLeft = new FrameSet(image);
    var frameSetFrighten = new FrameSet(image);
    var frameSetFrightenEnds = new FrameSet(image);
    var frameSetEyesMoveTop = new FrameSet(image);
    var frameSetEyesMoveBottom = new FrameSet(image);
    var frameSetEyesMoveLeft = new FrameSet(image);
    var frameSetEyesMoveRight = new FrameSet(image);
    
    frameSetMoveTop.addFrames([
        new Frame(2, 82, 15, 15, 150),
        new Frame(22, 82, 15, 15, 150)
    ]);
    frameSetMoveBottom.addFrames([
        new Frame(42, 82, 15, 15, 150),
        new Frame(62, 82, 15, 15, 150)
    ]);
    frameSetMoveLeft.addFrames([
        new Frame(82, 82, 15, 15, 150),
        new Frame(102, 82, 15, 15, 150)
    ]);
    frameSetMoveRight.addFrames([
        new Frame(122, 82, 15, 15, 150),
        new Frame(142, 82, 15, 15, 150)
    ]);
    frameSetFrighten.addFrames([
        new Frame(2, 162, 15, 15, 150),
        new Frame(22, 162, 15, 15, 150)
    ]);
    frameSetFrightenEnds.addFrames([
        new Frame(2, 162, 15, 15, 150),
        new Frame(42, 162, 15, 15, 150),
        new Frame(22, 162, 15, 15, 150),
        new Frame(62, 162, 15, 15, 150),
        new Frame(2, 162, 15, 15, 150)
    ]);
    frameSetEyesMoveTop.addFrames([
        new Frame(4, 203, 11, 6, 0)
    ]);
    frameSetEyesMoveBottom.addFrames([
        new Frame(24, 206, 11, 6, 0)
    ]);
    frameSetEyesMoveLeft.addFrames([
        new Frame(44, 206, 11, 6, 0)
    ]);
    frameSetEyesMoveRight.addFrames([
        new Frame(66, 206, 11, 6, 0)
    ]);
    
    blinky.addAnimations([{
        id: 'moveTop',
        frameset: frameSetMoveTop
    }, {
        id: 'moveBottom',
        frameset: frameSetMoveBottom
    }, {
        id: 'moveLeft',
        frameset: frameSetMoveLeft
    }, {
        id: 'moveRight',
        frameset: frameSetMoveRight
    }, {
        id: 'frighten',
        frameset: frameSetFrighten
    }, {
        id: 'frightenEnds',
        frameset: frameSetFrightenEnds
    }, {
        id: 'eyesMoveTop',
        frameset: frameSetEyesMoveTop
    }, {
        id: 'eyesMoveBottom',
        frameset: frameSetEyesMoveBottom
    }, {
        id: 'eyesMoveLeft',
        frameset: frameSetEyesMoveLeft
    }, {
        id: 'eyesMoveRight',
        frameset: frameSetEyesMoveRight
    }]);
    
    return blinky;
}

function createPinkyAnimation(image) {
    var pinky = new ActorLayer();
    var frameSetMoveTop = new FrameSet(image);
    var frameSetMoveRight = new FrameSet(image);
    var frameSetMoveBottom = new FrameSet(image);
    var frameSetMoveLeft = new FrameSet(image);
    var frameSetFrighten = new FrameSet(image);
    var frameSetFrightenEnds = new FrameSet(image);
    var frameSetEyesMoveTop = new FrameSet(image);
    var frameSetEyesMoveBottom = new FrameSet(image);
    var frameSetEyesMoveLeft = new FrameSet(image);
    var frameSetEyesMoveRight = new FrameSet(image);
    
    frameSetMoveTop.addFrames([
        new Frame(2, 102, 15, 15, 150),
        new Frame(22, 102, 15, 15, 150)
    ]);
    frameSetMoveBottom.addFrames([
        new Frame(42, 102, 15, 15, 150),
        new Frame(62, 102, 15, 15, 150)
    ]);
    frameSetMoveLeft.addFrames([
        new Frame(82, 102, 15, 15, 150),
        new Frame(102, 102, 15, 15, 150)
    ]);
    frameSetMoveRight.addFrames([
        new Frame(122, 102, 15, 15, 150),
        new Frame(142, 102, 15, 15, 150)
    ]);
    frameSetFrighten.addFrames([
        new Frame(2, 162, 15, 15, 150),
        new Frame(22, 162, 15, 15, 150)
    ]);
    frameSetFrightenEnds.addFrames([
        new Frame(2, 162, 15, 15, 150),
        new Frame(42, 162, 15, 15, 150),
        new Frame(22, 162, 15, 15, 150),
        new Frame(62, 162, 15, 15, 150),
        new Frame(2, 162, 15, 15, 150)
    ]);
    frameSetEyesMoveTop.addFrames([
        new Frame(4, 203, 11, 6, 0)
    ]);
    frameSetEyesMoveBottom.addFrames([
        new Frame(24, 206, 11, 6, 0)
    ]);
    frameSetEyesMoveLeft.addFrames([
        new Frame(44, 206, 11, 6, 0)
    ]);
    frameSetEyesMoveRight.addFrames([
        new Frame(66, 206, 11, 6, 0)
    ]);
    
    pinky.addAnimations([{
        id: 'moveTop',
        frameset: frameSetMoveTop
    }, {
        id: 'moveBottom',
        frameset: frameSetMoveBottom
    }, {
        id: 'moveLeft',
        frameset: frameSetMoveLeft
    }, {
        id: 'moveRight',
        frameset: frameSetMoveRight
    }, {
        id: 'frighten',
        frameset: frameSetFrighten
    }, {
        id: 'frightenEnds',
        frameset: frameSetFrightenEnds
    }, {
        id: 'eyesMoveTop',
        frameset: frameSetEyesMoveTop
    }, {
        id: 'eyesMoveBottom',
        frameset: frameSetEyesMoveBottom
    }, {
        id: 'eyesMoveLeft',
        frameset: frameSetEyesMoveLeft
    }, {
        id: 'eyesMoveRight',
        frameset: frameSetEyesMoveRight
    }]);
    
    return pinky;
}

function createInkyAnimation(image) {
    var inky = new ActorLayer();
    var frameSetMoveTop = new FrameSet(image);
    var frameSetMoveRight = new FrameSet(image);
    var frameSetMoveBottom = new FrameSet(image);
    var frameSetMoveLeft = new FrameSet(image);
    var frameSetFrighten = new FrameSet(image);
    var frameSetFrightenEnds = new FrameSet(image);
    var frameSetEyesMoveTop = new FrameSet(image);
    var frameSetEyesMoveBottom = new FrameSet(image);
    var frameSetEyesMoveLeft = new FrameSet(image);
    var frameSetEyesMoveRight = new FrameSet(image);
    
    frameSetMoveTop.addFrames([
        new Frame(2, 122, 15, 15, 150),
        new Frame(22, 122, 15, 15, 150)
    ]);
    frameSetMoveBottom.addFrames([
        new Frame(42, 122, 15, 15, 150),
        new Frame(62, 122, 15, 15, 150)
    ]);
    frameSetMoveLeft.addFrames([
        new Frame(82, 122, 15, 15, 150),
        new Frame(102, 122, 15, 15, 150)
    ]);
    frameSetMoveRight.addFrames([
        new Frame(122, 122, 15, 15, 150),
        new Frame(142, 122, 15, 15, 150)
    ]);
    frameSetFrighten.addFrames([
        new Frame(2, 162, 15, 15, 150),
        new Frame(22, 162, 15, 15, 150)
    ]);
    frameSetFrightenEnds.addFrames([
        new Frame(2, 162, 15, 15, 150),
        new Frame(42, 162, 15, 15, 150),
        new Frame(22, 162, 15, 15, 150),
        new Frame(62, 162, 15, 15, 150),
        new Frame(2, 162, 15, 15, 150)
    ]);
    frameSetEyesMoveTop.addFrames([
        new Frame(4, 203, 11, 6, 0)
    ]);
    frameSetEyesMoveBottom.addFrames([
        new Frame(24, 206, 11, 6, 0)
    ]);
    frameSetEyesMoveLeft.addFrames([
        new Frame(44, 206, 11, 6, 0)
    ]);
    frameSetEyesMoveRight.addFrames([
        new Frame(66, 206, 11, 6, 0)
    ]);
    
    inky.addAnimations([{
        id: 'moveTop',
        frameset: frameSetMoveTop
    }, {
        id: 'moveBottom',
        frameset: frameSetMoveBottom
    }, {
        id: 'moveLeft',
        frameset: frameSetMoveLeft
    }, {
        id: 'moveRight',
        frameset: frameSetMoveRight
    }, {
        id: 'frighten',
        frameset: frameSetFrighten
    }, {
        id: 'frightenEnds',
        frameset: frameSetFrightenEnds
    }, {
        id: 'eyesMoveTop',
        frameset: frameSetEyesMoveTop
    }, {
        id: 'eyesMoveBottom',
        frameset: frameSetEyesMoveBottom
    }, {
        id: 'eyesMoveLeft',
        frameset: frameSetEyesMoveLeft
    }, {
        id: 'eyesMoveRight',
        frameset: frameSetEyesMoveRight
    }]);
    
    return inky;
}

function createClydeAnimation(image) {
    var clyde = new ActorLayer();
    var frameSetMoveTop = new FrameSet(image);
    var frameSetMoveRight = new FrameSet(image);
    var frameSetMoveBottom = new FrameSet(image);
    var frameSetMoveLeft = new FrameSet(image);
    var frameSetFrighten = new FrameSet(image);
    var frameSetFrightenEnds = new FrameSet(image);
    var frameSetEyesMoveTop = new FrameSet(image);
    var frameSetEyesMoveBottom = new FrameSet(image);
    var frameSetEyesMoveLeft = new FrameSet(image);
    var frameSetEyesMoveRight = new FrameSet(image);
    
    frameSetMoveTop.addFrames([
        new Frame(2, 142, 15, 15, 150),
        new Frame(22, 142, 15, 15, 150)
    ]);
    frameSetMoveBottom.addFrames([
        new Frame(42, 142, 15, 15, 150),
        new Frame(62, 142, 15, 15, 150)
    ]);
    frameSetMoveLeft.addFrames([
        new Frame(82, 142, 15, 15, 150),
        new Frame(102, 142, 15, 15, 150)
    ]);
    frameSetMoveRight.addFrames([
        new Frame(122, 142, 15, 15, 150),
        new Frame(142, 142, 15, 15, 150)
    ]);
    frameSetFrighten.addFrames([
        new Frame(2, 162, 15, 15, 150),
        new Frame(22, 162, 15, 15, 150)
    ]);
    frameSetFrightenEnds.addFrames([
        new Frame(2, 162, 15, 15, 150),
        new Frame(42, 162, 15, 15, 150),
        new Frame(22, 162, 15, 15, 150),
        new Frame(62, 162, 15, 15, 150),
        new Frame(2, 162, 15, 15, 150)
    ]);
    frameSetEyesMoveTop.addFrames([
        new Frame(4, 203, 11, 6, 0)
    ]);
    frameSetEyesMoveBottom.addFrames([
        new Frame(24, 206, 11, 6, 0)
    ]);
    frameSetEyesMoveLeft.addFrames([
        new Frame(44, 206, 11, 6, 0)
    ]);
    frameSetEyesMoveRight.addFrames([
        new Frame(66, 206, 11, 6, 0)
    ]);
    
    clyde.addAnimations([{
        id: 'moveTop',
        frameset: frameSetMoveTop
    }, {
        id: 'moveBottom',
        frameset: frameSetMoveBottom
    }, {
        id: 'moveLeft',
        frameset: frameSetMoveLeft
    }, {
        id: 'moveRight',
        frameset: frameSetMoveRight
    }, {
        id: 'frighten',
        frameset: frameSetFrighten
    }, {
        id: 'frightenEnds',
        frameset: frameSetFrightenEnds
    }, {
        id: 'eyesMoveTop',
        frameset: frameSetEyesMoveTop
    }, {
        id: 'eyesMoveBottom',
        frameset: frameSetEyesMoveBottom
    }, {
        id: 'eyesMoveLeft',
        frameset: frameSetEyesMoveLeft
    }, {
        id: 'eyesMoveRight',
        frameset: frameSetEyesMoveRight
    }]);
    
    return clyde;
}
