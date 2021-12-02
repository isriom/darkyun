import {ButtonsDiv, SCREEN_HEIGHT, SCREEN_WIDTH} from "./index.js";

console.log("index import (Game) ")

import buttons from "./Buttons.js";
console.log("buttons import (Game)")

import InputHandler from "./Input.js";
console.log("Input import (Game)")

import Resources from "./Resource.js";
console.log("Resources import (Game)")

console.log("Creating resources")

export var Food = new Resources(0, "FOOD",1);
export var Know = new Resources(1, "KNOW",1);
export var Yun = new Resources(2, "YUN",0);
console.log("Finish resources")
console.log(Food)
console.log(Know)
console.log(Yun)

import Circle, {basicBuild, Wave, update as Breload} from "./Builds.js"
console.log("Builds import (Game)")

// runtime data
export const GAMESTATE = {
    Paused: 0,
    Running: 1,
    reset: 2,
    idle: 3,
    Menu: 4
}

export let SelectedBuild = {index: -1};



//GameLoad
export var GameData = {
    race: undefined,
    c1Builds: undefined,
    c2Builds: undefined,
    c3Builds: undefined,
    Food: 0,
    Know: 0,
    Yun: 0,

}
export var upgrades = {
    WaveC1: undefined, WaveC2: undefined, WaveC3: undefined
}
export var Specialbuilds = {}

export default class Game {
    constructor() {
        this.gameState = GAMESTATE.Menu;
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
        if (this.gameState !== GAMESTATE.Menu) return;
        this.gameState = GAMESTATE.Running;

        this.gameObjects = [this.Ball, this.paddle]

    }

    update(dt) {
        this.gameObjects.forEach(object => object.update(dt));
        this.rotation = dt / 1000;
        this.circles.forEach(circle => circle.update(this.rotation));
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