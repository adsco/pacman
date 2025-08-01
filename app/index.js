import App from './app';

window.onload = function() {
    var app = new App(document.getElementById('game-viewport'));

    app.run();
    
    window.app = app;
}
