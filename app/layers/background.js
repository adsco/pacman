import BaseLayout from './base';

export default class BackgroundLayer extends BaseLayout {
    constructor() {
        super();
    }
    
    render(context) {
        if (!this.image) {
            return;
        }

        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}
