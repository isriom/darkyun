import { SCREEN_HEIGHT, SCREEN_WIDTH } from "./index.js";

console.log("Index import (Resoruces)")

function Calculate(object) {
    if (object.CalculateM === "function") {
        this.multy += object.CalculateM();
    } else {
        this.addy += object.CalculateA();
    }
}

export default class Resources {
    constructor(id, name, amount) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.image = undefined;
        this.addAmount = 0;
        this.bonus = [];
        this.upgrades = [];
        this.builds = [];
        this.position = { x: 0, y: 0 };
        this.layout = { fontSize: 10, maxWidth: 0 };
        console.log(name + "created");
    }

    add(dt) {
        let totalBonus = { multy: 1, addy: 0 };
        totalBonus.Calculate = Calculate;
        this.bonus.forEach(element => totalBonus.Calculate(element))
        this.amount += (this.addAmount * totalBonus.multy + totalBonus.addy) * dt;
    }

    reset() {
        this.addAmount = 0;
        this.bonus = [];
        this.upgrades = [];
        this.builds = [];
    }


    resize() {
        this.position = { x: SCREEN_HEIGHT * 0.050 + 75 * this.id, y: SCREEN_HEIGHT * 0.060 };
        this.layout = {
            fontSize: Math.max(10, Math.min(18, Math.floor(SCREEN_HEIGHT / 50))),
            maxWidth: Math.max(40, Math.floor(SCREEN_HEIGHT * 0.11)),
            valueY: SCREEN_HEIGHT * 0.095,
        };
    }

    update(dt) {
        this.recalculateBase()
        this.add(dt);
    }

    recalculateBase() {
        this.addAmount = 0;
        this.builds.forEach((n) => this.addAmount += n.production[this.id]())
    }

    draw(ctx) {
        const { fontSize, maxWidth, valueY } = this.layout;
        let fittedFontSize = fontSize;
        ctx.font = `${fittedFontSize}pt Robotto`;
        ctx.textBaseline = "top";
        ctx.textAlign = "left";

        while (ctx.measureText(this.name).width > maxWidth && fittedFontSize > 10) {
            fittedFontSize = Math.max(10, fittedFontSize - 1);
            ctx.font = `${fittedFontSize}pt Robotto`;
        }

        ctx.shadowBlur = 1;
        ctx.shadowColor = "#e0cd8d";
        ctx.strokeText(this.name, this.position.x, this.position.y);
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#FFF"
        ctx.fillText(this.name, this.position.x, this.position.y);
        ctx.fillStyle = "#FFF"
        ctx.shadowColor = "#FFF";
        ctx.fillText(parseInt(this.amount.toFixed(2)).toPrecision(4), this.position.x, valueY);
        // ctx.drawImage(this.image, this.position.x, this.position.y, SCREEN_HEIGHT * 0.07, SCREEN_HEIGHT * 0.07)
    }

    drawImage(ctx) {

    }

}
