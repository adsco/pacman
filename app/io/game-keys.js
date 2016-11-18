import Input from '../enums/input';
import KeyMap from './input-key-map';

var gameKeys = {};

gameKeys[Input.UP] = [KeyMap.W, KeyMap.UP];
gameKeys[Input.RIGHT] = [KeyMap.D, KeyMap.RIGHT];
gameKeys[Input.DOWN] = [KeyMap.S, KeyMap.DOWN];
gameKeys[Input.LEFT] = [KeyMap.A, KeyMap.LEFT];
gameKeys[Input.ESC] = [KeyMap.ESC];
gameKeys[Input.ENTER] = [KeyMap.ENTER];

export default gameKeys;