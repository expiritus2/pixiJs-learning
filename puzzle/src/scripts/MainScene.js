import * as PIXI from 'pixi.js';
import { Globals } from './Globals';
import { PuzzleGrid } from './PuzzleGrid';

export class MainScene {
    constructor() {
        this.container = new PIXI.Container();
        // Globals.resources.music.sound.play({
        //     loop: true,
        //     volume: 0.1
        // });
        this.createBackground();
        this.createPuzzleGrid();
    }

    createBackground() {
        console.log(Globals.resources);
        this.bg = new PIXI.Sprite(Globals.resources['bg'].texture);
        this.bg.width = window.innerWidth;
        this.bg.height = window.innerHeight;

        this.bg.anchor.set(0);

        console.log(this.bg);
        this.container.addChild(this.bg);
    }

    createPuzzleGrid() {
        const grid = new PuzzleGrid();
        this.container.addChild(grid.container)
    }
}
