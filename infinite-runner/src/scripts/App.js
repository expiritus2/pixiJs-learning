import * as PIXI from 'pixi.js';
import { Loader } from './Loader';
import { Globals } from './Globals';
import { SceneManager } from './SceneManager';
import { MainScene } from './MainScene';

export class App {
    run() {
        this.app = new PIXI.Application({ resizeTo: window });
        document.body.appendChild(this.app.view);

        Globals.scene = new SceneManager();
        this.app.stage.addChild(Globals.scene.constainer);
        this.app.ticker.add((dt) => {
            // TWEEN.update();
            Globals.scene.update(dt);
        });

        this.loader = new Loader(this.app.loader);
        this.loader.preload().then(() => {
            Globals.scene.start(new MainScene())
        });
    }
}
