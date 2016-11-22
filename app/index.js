import Canvas from './canvas/canvas';
import ResourceLoader from './loaders/resource-loader';
import BackgroundLayer from './layers/background';
import ActorLayer from './layers/actor';
import MiscLayer from './layers/misc';
import TextLayer from './layers/text';
import Frame from './animation/frame';
import FrameSet from './animation/frame-set';
import FrameBuilder from './animation/frame-builder';
import GameKeys from './io/game-keys';
import IO from './io/io';
import SceneManager from './scenes/scene-manager';
import MenuScene from './scenes/menu';
import GameScene from './scenes/game';
import MenuItem from './scenes/menu-item';
import ActorBuilder from './actors/actor-builder';

window.onload = function() {
    var canvas = new Canvas(document.getElementById('game-viewport'));
    var resourceLoader = new ResourceLoader();
    var width = 500;
    var height = 600;
    var io = new IO(GameKeys);
    var sceneManager = new SceneManager();
    var sceneMenu = new MenuScene(canvas);
    var sceneGame = new GameScene(canvas);
    var menuItem1Up = new MenuItem('1 player', function() {
        console.log('clicked');
    });
    var menuItemQuit = new MenuItem('quit', function() {
        console.log('quit');
    });
    
    canvas.setWidth(width);
    canvas.setHeight(height);
    
    sceneGame.onStop = function() {
        console.log('Scene game stopped');
    }
    
    document.addEventListener('keydown', function(event) {
        sceneGame.onKeyDown(io.getKey(event));
        console.log(io.getKey(event));
    });
    
    resourceLoader
        .loadResource('sprite', 'image', 'resources/images/pacman-google.png')
        .then((resource) => {
            var pacman = ActorBuilder.buildPacman(resource.resource);

            console.log(pacman);

            sceneGame.setPacman(pacman);
        })
        .then(() => {
            sceneManager.playScene(sceneGame);
        })
    ;
    
    return;

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
            var ready = createReadyAnimation(resource.resource);
            var text = createTextLayer(resource.resource);
            var up1 = create1UPAnimation(resource.resource);
            var up2 = create2UPAnimation(resource.resource);
            var gameOver = createGameOverAnimation(resource.resource);
            var bigPie = createBigPieAnimation(resource.resource);
            var smallPie = createSmallPieAnimation(resource.resource);
            var life = createLifeAnimation(resource.resource);
            var bonusCherry = createBonusCherryAnimation(resource.resource);
            var bonusBerry = createBonusStrawberryAnimation(resource.resource);
            var bonusPlum = createBonusPlumAnimation(resource.resource);
            var bonusApple = createBonusAppleAnimation(resource.resource);
            var bonusFrunze = createBonusFrunzeAnimation(resource.resource);
            var bonusGalaxian = createBonusGalaxianAnimation(resource.resource);
            var bonusBell = createBonusBellAnimation(resource.resource);
            var bonusKey = createBonusKeyAnimation(resource.resource);
            var score200 = createScore200Animation(resource.resource);
            var score400 = createScore400Animation(resource.resource);
            var score800 = createScore800Animation(resource.resource);
            var score1600 = createScore1600Animation(resource.resource);
            var score100 = createScore100Animation(resource.resource);
            var score300 = createScore300Animation(resource.resource);
            var score500 = createScore500Animation(resource.resource);
            var score700 = createScore700Animation(resource.resource);
            var score1000 = createScore1000Animation(resource.resource);
            var score2000 = createScore2000Animation(resource.resource);
            var score3000 = createScore3000Animation(resource.resource);
            var score5000 = createScore5000Animation(resource.resource);
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
                inkyEyesRight,
                bigPie,
                smallPie,
                life,
                bonusCherry,
                bonusBerry,
                bonusPlum,
                bonusApple,
                bonusFrunze,
                bonusGalaxian,
                bonusBell,
                bonusKey,
                score200,
                score400,
                score800,
                score1600,
                score100,
                score300,
                score500,
                score700,
                score1000,
                score2000,
                score3000,
                score5000
            ];
            var update = function() {
                var time = window.performance.now();
                var context = canvas.getContext();
                var frame;
                var frames;
                var y = 0;
                var left = 0;

                canvas.clear();
                context.fillRect(0, 0, width, height);
                
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

                    context.drawImage(
                        frame.image,
                        frame.x,
                        frame.y,
                        frame.width,
                        frame.height,
                        left * 25 + frame.shiftX,
                        y * 16 + frame.shiftY,
                        frame.width,
                        frame.height
                    );
            
                    left++;
                    
                    if (i > 0 && i % 18 === 0) {
                        y++;
                        left = 0;
                    }
                }
                
                frame = ready.getFrame(time);
                context.drawImage(frame.image, frame.x, frame.y, frame.width, frame.height, 100, 200, frame.width, frame.height);

                frames = text.getFrames(time);
                
                for (let i = 0, len = frames.length; i < len; i++) {
                    context.drawImage(
                        frames[i].image,
                        frames[i].x,
                        frames[i].y,
                        frames[i].width,
                        frames[i].height,
                        100 + frames[i].shiftX,
                        100 + frames[i].shiftY,
                        frames[i].width,
                        frames[i].height);
                }
                
                frame = up1.getFrame(time);
                context.drawImage(
                    frame.image,
                    frame.x,
                    frame.y,
                    frame.width,
                    frame.height,
                    50,
                    50,
                    frame.width,
                    frame.height
                );
        
                frame = up2.getFrame(time);
                context.drawImage(
                    frame.image,
                    frame.x,
                    frame.y,
                    frame.width,
                    frame.height,
                    50,
                    70,
                    frame.width,
                    frame.height
                );
                frame = gameOver.getFrame(time);
                context.drawImage(
                    frame.image,
                    frame.x,
                    frame.y,
                    frame.width,
                    frame.height,
                    50,
                    90,
                    frame.width,
                    frame.height
                );

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
            ready.startAnimation('ready');
            up1.startAnimation('1up');
            up2.startAnimation('2up');
            gameOver.startAnimation('gameOver');
            bigPie.startAnimation('bigPie');
            smallPie.startAnimation('smallPie');
            life.startAnimation('life');
            bonusCherry.startAnimation('cherry');
            bonusBerry.startAnimation('strawberry');
            bonusPlum.startAnimation('plum');
            bonusApple.startAnimation('apple');
            bonusFrunze.startAnimation('frunze');
            bonusGalaxian.startAnimation('galaxian');
            bonusBell.startAnimation('bell');
            bonusKey.startAnimation('key');
            score200.startAnimation('score200');
            score400.startAnimation('score400');
            score800.startAnimation('score800');
            score1600.startAnimation('score1600');
            score100.startAnimation('score100');
            score300.startAnimation('score300');
            score500.startAnimation('score500');
            score700.startAnimation('score700');
            score1000.startAnimation('score1000');
            score2000.startAnimation('score2000');
            score3000.startAnimation('score3000');
            score5000.startAnimation('score5000');

            text.showText('012345678901234567890123456789');

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
        new Frame(62, 162, 15, 15, 150)
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
        new Frame(62, 162, 15, 15, 150)
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
        new Frame(62, 162, 15, 15, 150)
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
        new Frame(62, 162, 15, 15, 150)
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

function createReadyAnimation(image) {
    var ready = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrame(new Frame(202, 1, 47, 8, 0));
    
    ready.addAnimation('ready', frameSet);
    
    return ready;
}

function createTextLayer(image) {
    var text = new TextLayer();
    var frameBuilder = new FrameBuilder(image);
    
    text.setFrameBuilder(frameBuilder);
    text.setTextMap({
        0: {x: 12, y: 181, width: 8, height: 8},
        1: {x: 22, y: 181, width: 8, height: 8},
        2: {x: 32, y: 181, width: 8, height: 8},
        3: {x: 42, y: 181, width: 8, height: 8},
        4: {x: 52, y: 181, width: 8, height: 8},
        5: {x: 62, y: 181, width: 8, height: 8},
        6: {x: 72, y: 181, width: 8, height: 8},
        7: {x: 82, y: 181, width: 8, height: 8},
        8: {x: 92, y: 181, width: 8, height: 8},
        9: {x: 102, y: 181, width: 8, height: 8}
    });
    
    return text;
}

function create1UPAnimation(image) {
    var up1 = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrame(new Frame(215, 71, 23, 8, 0));
    
    up1.addAnimation('1up', frameSet);
    
    return up1;
}

function create2UPAnimation(image) {
    var up2 = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrame(new Frame(214, 81, 24, 8, 0));
    
    up2.addAnimation('2up', frameSet);
    
    return up2;
}

function createGameOverAnimation(image) {
    var gameOver = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrame(new Frame(12, 191, 80, 8, 0));
    
    gameOver.addAnimation('gameOver', frameSet);
    
    return gameOver;
}

function createBigPieAnimation(image) {
    var bigPie = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(1, 181, 9, 9, 150),
        new Frame(0, 0, 0, 0, 150)
    ]);
    
    bigPie.addAnimation('bigPie', frameSet);
    
    return bigPie;
}

function createSmallPieAnimation(image) {
    var smallPie = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(3, 183, 3, 3, 0)
    ]);
    
    smallPie.addAnimation('smallPie', frameSet);
    
    return smallPie;
}

function createLifeAnimation(image) {
    var life = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(84, 163, 11, 12, 0)
    ]);
    
    life.addAnimation('life', frameSet);
    
    return life;
}

function createBonusCherryAnimation(image) {
    var cherry = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(171, 163, 13, 13, 0)
    ]);
    
    cherry.addAnimation('cherry', frameSet);
    
    return cherry;
}

function createBonusStrawberryAnimation(image) {
    var strawberry = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(172, 183, 12, 13, 0)
    ]);
    
    strawberry.addAnimation('strawberry', frameSet);
    
    return strawberry;
}

function createBonusPlumAnimation(image) {
    var plum = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(172, 203, 12, 13, 0)
    ]);
    
    plum.addAnimation('plum', frameSet);
    
    return plum;
}

function createBonusAppleAnimation(image) {
    var apple = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(171, 223, 13, 13, 0)
    ]);
    
    apple.addAnimation('apple', frameSet);
    
    return apple;
}

function createBonusFrunzeAnimation(image) {
    var frunze = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(212, 162, 12, 15, 0)
    ]);
    
    frunze.addAnimation('frunze', frameSet);
    
    return frunze;
}

function createBonusGalaxianAnimation(image) {
    var galaxian = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(212, 184, 12, 12, 0)
    ]);
    
    galaxian.addAnimation('galaxian', frameSet);
    
    return galaxian;
}

function createBonusBellAnimation(image) {
    var bell = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(211, 202, 13, 14, 0)
    ]);
    
    bell.addAnimation('bell', frameSet);
    
    return bell;
}

function createBonusKeyAnimation(image) {
    var key = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(214, 223, 8, 14, 0)
    ]);
    
    key.addAnimation('key', frameSet);
    
    return key;
}

function createScore200Animation(image) {
    var score200 = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(2, 225, 16, 8, 0)
    ]);
    
    score200.addAnimation('score200', frameSet);
    
    return score200;
}

function createScore400Animation(image) {
    var score400 = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(22, 225, 16, 8, 0)
    ]);
    
    score400.addAnimation('score400', frameSet);
    
    return score400;
}

function createScore800Animation(image) {
    var score800 = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(42, 225, 16, 8, 0)
    ]);
    
    score800.addAnimation('score800', frameSet);
    
    return score800;
}

function createScore1600Animation(image) {
    var score1600 = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(61, 225, 17, 8, 0)
    ]);
    
    score1600.addAnimation('score1600', frameSet);
    
    return score1600;
}

function createScore100Animation(image) {
    var score100 = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(171, 5, 14, 8, 0)
    ]);
    
    score100.addAnimation('score100', frameSet);
    
    return score100;
}

function createScore300Animation(image) {
    var score300 = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(169, 25, 16, 8, 0)
    ]);
    
    score300.addAnimation('score300', frameSet);
    
    return score300;
}

function createScore500Animation(image) {
    var score500 = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(169, 45, 16, 8, 0)
    ]);
    
    score500.addAnimation('score500', frameSet);
    
    return score500;
}

function createScore700Animation(image) {
    var score700 = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(169, 65, 16, 8, 0)
    ]);
    
    score700.addAnimation('score700', frameSet);
    
    return score700;
}

function createScore1000Animation(image) {
    var score1000 = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(169, 85, 19, 8, 0)
    ]);
    
    score1000.addAnimation('score1000', frameSet);
    
    return score1000;
}

function createScore2000Animation(image) {
    var score2000 = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(167, 105, 21, 8, 0)
    ]);
    
    score2000.addAnimation('score2000', frameSet);
    
    return score2000;
}

function createScore3000Animation(image) {
    var score3000 = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(167, 125, 21, 8, 0)
    ]);
    
    score3000.addAnimation('score3000', frameSet);
    
    return score3000;
}

function createScore5000Animation(image) {
    var score5000 = new MiscLayer();
    var frameSet = new FrameSet(image);
    
    frameSet.addFrames([
        new Frame(167, 145, 21, 8, 0)
    ]);
    
    score5000.addAnimation('score5000', frameSet);
    
    return score5000;
}
