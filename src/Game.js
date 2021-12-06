import {ButtonsDiv, SCREEN_HEIGHT, SCREEN_WIDTH} from "./index.js";

console.log("index import (Game) ")

import buttons from "./Buttons.js";

console.log("buttons import (Game)")

import InputHandler from "./Input.js";

console.log("Input import (Game)")

import Resources from "./Resource.js";

console.log("Resources import (Game)")

console.log("Creating resources")

export var Food = new Resources(0, "FOOD", 1);
export var Know = new Resources(1, "KNOW", 1);
export var Yun = new Resources(2, "YUN", 0);
console.log("Finish resources")
console.log(Food)
console.log(Know)
console.log(Yun)

import Circle, {basicBuild, Wave, update as Breload} from "./Builds.js"

console.log("Builds import (Game)")
// JS import import before init and cicular import need to update when all import did, better solutions is a data global where all import load their data and collect from to avoid circular imports
Breload()
console.log("Reload Builds")
// runtime data
import {data} from "./Data.js"

export let SelectedBuild = {index: -1};


//GameLoad
export var upgrades = {
    WaveC1: undefined, WaveC2: undefined, WaveC3: undefined
}
export var Specialbuilds = {}

export default class Game {
    constructor() {
        this.gameWidth = SCREEN_WIDTH * 0.76;
        this.gameHeight = SCREEN_HEIGHT;
        new InputHandler(this);
        if (this.load()) {
            return;
        }
        this.gameObjects = [];
        this.rotation = 0;

        this.r3 = ((this.gameHeight / 2) - 60);
        this.r2 = ((this.gameHeight / 2) - 60) * 0.7071;
        this.r1 = ((this.gameHeight / 2) - 60) * 0.4082;
        this.c1 = new Circle(5, this.r1);
        this.c2 = new Circle(7, this.r2);
        this.c3 = new Circle(11, this.r3);
        this.c3.wave = new Wave();
        this.c2.wave = new Wave();
        this.c1.wave = new Wave();

        this.circles = [this.c1, this.c2, this.c3];

        this.resources = [Food, Know, Yun]
        this.resources.forEach(object => object.resize());

        this.buttons = [];

        [...basicBuild].forEach((n, index) => this.buttons[index] = (new buttons(index, n)));

    }

    load() {

    }

    start() {
    }


    update(dt) {
        this.gameObjects.forEach(object => object.update(dt));
        this.rotation = dt / 1000;
        this.circles.forEach(circle => circle.update(this.rotation));
        this.resources.forEach((n) => n.update(dt));
    }

    drawCircles(ctx) {
        this.c1.draw(ctx, {x: this.gameWidth / 2, y: this.gameHeight / 2});
        this.c2.draw(ctx, {x: this.gameWidth / 2, y: this.gameHeight / 2});
        this.c3.draw(ctx, {x: this.gameWidth / 2, y: this.gameHeight / 2});
    }

    draw(ctx, Mctx) {
        this.drawCircles(ctx)
        this.gameObjects.forEach(object => object.draw(ctx));
        this.resources.forEach(object => object.draw(Mctx));
    }

    resize(ctx) {
        this.resources.forEach(object => object.draw(ctx));
    }
}