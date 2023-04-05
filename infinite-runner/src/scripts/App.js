import * as PIXI from 'pixi.js';
import { Loader } from './Loader';
import { MainScene } from './MainScene';
import TWEEN from '@tweenjs/tween.js';

export class App {
    run() {
        this.app = new PIXI.Application({ resizeTo: window });
        document.body.appendChild(this.app.view);

        this.loader = new Loader(this.app.loader);
        this.loader.preload().then(() => this.start());
    }

    start() {
        this.scene = new MainScene();
        this.app.stage.addChild(this.scene.container);

        this.app.ticker.add((dt) => {
            // TWEEN.update();
            this.scene.update(dt);
        });
    }
}
