import {SCREEN_HEIGHT,SCREEN_WIDTH} from "./index.js";
console.log("Index import (Resoruces)")

function Calculate(object) {
    if (object.CalculateM === "function") {
        this.multy += object.CalculateM();
    } else {
        this.multy += object.CalculateA();

    }
}

export default class Resources {
    constructor(id, name,amount) {
        this.id = id;
        this.name = name;
        this.position = {x: SCREEN_HEIGHT * 0.075 + 90 * id, y: SCREEN_WIDTH * 0.04};
        this.amount = amount;
        this.image = undefined;
        this.addAmount = 0;
        this.bonus = [];
        this.upgrades = [];
        this.builds = [];
        console.log(name+"created");
    }

    add() {
        let totalBonus = {multy: 1, addy: 0};
        totalBonus.Calculate = Calculate;
        this.bonus.forEach(element => totalBonus.Calculate(element))
        this.amount += this.addAmount * totalBonus.multy + totalBonus.addy;
    }

    reset() {
        this.addAmount = 0;
        this.bonus = [];
        this.upgrades = [];
        this.builds = [];
    }


    resize() {
        this.position = {x: SCREEN_HEIGHT * 0.075 + 90 * this.id, y: SCREEN_WIDTH * 0.04};

    }

    update() {

    }

    draw(ctx) {
        ctx.font = "19pt Robotto"
        ctx.shadowBlur = 1;
        ctx.shadowColor = "#e0cd8d";
        ctx.strokeText(this.name, this.position.x, this.position.y);
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#FFF"
        ctx.fillText(this.name, this.position.x, this.position.y);
        ctx.fillStyle = "#FFF"
        ctx.shadowColor = "#FFF";
        ctx.fillText(this.amount, this.position.x + 20, this.position.y * 1.6);
        // ctx.drawImage(this.image, this.position.x, this.position.y, SCREEN_HEIGHT * 0.07, SCREEN_HEIGHT * 0.07)
    }

    drawImage(ctx) {

    }

}
