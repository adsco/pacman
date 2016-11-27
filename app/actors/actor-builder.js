import Pacman from './pacman';
import Blinky from './blinky';
import Pinky from './pinky';
import Inky from './inky';
import Clyde from './clyde';
import Frame from './../animation/frame';
import FrameSet from './../animation/frame-set';
import pacmanConfig from './pacman-animation-config';
import blinkyConfig from './blinky-animation-config';
import pinkyConfig from './pinky-animation-config';
import inkyConfig from './inky-animation-config';
import clydeConfig from './clyde-animation-config';

function createActor(id) {
    var actor;

    switch (id) {
        case 'pacman': {
            actor = new Pacman();
            break;
        }
        case 'blinky': {
            actor = new Blinky();
            break;
        }
        case 'pinky': {
            actor = new Pinky();
            break;
        }
        case 'inky': {
            actor = new Inky();
            break;
        }
        case 'clyde': {
            actor = new Clyde();
            break;
        }
    }
    
    return actor;
}

function getActorCofig(id) {
    var config;

    switch (id) {
        case 'pacman': {
            config = pacmanConfig;
            break;
        }
        case 'blinky': {
            config = blinkyConfig;
            break;
        }
        case 'pinky': {
            config = pinkyConfig;
            break;
        }
        case 'inky': {
            config = inkyConfig;
            break;
        }
        case 'clyde': {
            config = clydeConfig;
            break;
        }
    }
    
    return config;
}

var createFrames = function(framesConfig) {
    var frames = [];
    
    for (let i = 0, len = framesConfig.length; i < len; i++) {
        frames.push(
            new Frame(
                framesConfig[i].x,
                framesConfig[i].y,
                framesConfig[i].width,
                framesConfig[i].height,
                framesConfig[i].duration,
                framesConfig[i].offsetX,
                framesConfig[i].offsetY
            )
        );
    }
    
    return frames;
}

var build = function(actorId, sprite) {
    var actor = createActor(actorId);
    var config = getActorCofig(actorId);
    var animations = config.animations;
    var frameSet;
    
    for (let i = 0, len = animations.length; i < len; i++) {
        frameSet = new FrameSet(sprite);

        frameSet.addFrames(createFrames(animations[i].frames));
        
        actor.addAnimation(animations[i].id, frameSet);
    }
    
    return actor;
};

export default {
    build
}
