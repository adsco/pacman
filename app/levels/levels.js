export default class Levels {
    constructor() {
        this._maxLevel = 255;
        this._ghostModes = [{
            levelRange: {
                min: 1,
                max: 1
            },
            modeTime: [{
                scatter: 7,
                chase: 20
            }, {
                scatter: 7,
                chase: 20
            }, {
                scatter: 5,
                chase: 20
            }, {
                scatter: 5,
                chase: 0
            }]
        }, {
            levelRange: {
                min: 2,
                max: 4
            },
            modeTime: [{
                scatter: 7,
                chase: 20
            }, {
                scatter: 7,
                chase: 20
            }, {
                scatter: 5,
                chase: 1033
            }, {
                scatter: 1 / 60,
                chase: 0
            }]
        }, {
            levelRange: {
                min: 5,
                max: this._maxLevel
            },
            modeTime: [{
                scatter: 5,
                chase: 20
            }, {
                scatter: 5,
                chase: 20
            }, {
                scatter: 5,
                chase: 1037
            }, {
                scatter: 1 / 60,
                chase: 0
            }]
        }];
        this._actorSpeed = [{
            levelRange: {
                min: 1,
                max: 1
            },
            speed: {
                pacman: {
                    base: 0.8,
                    fright: 0.9
                },
                ghosts: {
                    base: 0.75,
                    fright: 0.5,
                    tunnel: 0.4
                }
            }
        }, {
            levelRange: {
                min: 2,
                max: 4
            },
            speed: {
                pacman: {
                    base: 0.9,
                    fright: 0.95
                },
                ghosts: {
                    base: 0.85,
                    fright: 0.55,
                    tunnel: 0.45
                }
            }
        }, {
            levelRange: {
                min: 5,
                max: 20
            },
            speed: {
                pacman: {
                    base: 1,
                    fright: 1
                },
                ghosts: {
                    base: 0.95,
                    fright: 0.6,
                    tunnel: 0.5
                }
            }
        }, {
            levelRange: {
                min: 21,
                max: this._maxLevel
            },
            speed: {
                pacman: {
                    base: 0.9,
                    fright: 1
                },
                ghosts: {
                    base: 0.95,
                    fright: 0.6,
                    tunnel: 0.5
                }
            }
        }];
    }
    
    getLevel(levelNumber) {
        var mode;
        var speed;

        if (levelNumber < 1 || levelNumber > this._maxLevel) {
            return null;
        }

        mode = this._getConfigForLevel(this._ghostModes, levelNumber);
        speed = this._getConfigForLevel(this._actorSpeed, levelNumber);
        
        return {
            mode,
            speed
        };
    }
    
    _getConfigForLevel(config, levelNumber) {
        var levelConfig = null;

        for (let i = 0, len = config.length; i < len; i++) {
            if (config[i].levelRange.min >= levelNumber && config[i].levelRange.max <= levelNumber) {
                levelConfig = config[i];
            }
        }

        return levelConfig;
    }
}