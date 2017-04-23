import Scene from './scene';

export default class SceneLoading extends Scene {
    render(context) {
        context.fillRect(0, 0, 224, 288);
    }
}