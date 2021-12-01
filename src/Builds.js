import {SCREEN_HEIGHT} from "./index.js";

export default class Circle {
    builds = [];
    amount;

    constructor(amount, r) {
        this.amount = amount;
        this.angleRange = 3 * Math.PI / amount;
        this.positions = []
        this.builds = new Array(amount);
        this.radious = r;
        this.wave = undefined;
        for (let i = 0; i < this.amount; i++) {
            this.positions.push({
                x: Math.cos(i * (2 * Math.PI / this.amount)),
                y: Math.sin(i * (2 * Math.PI / this.amount))
            })
        }
    }
    update(rotation){
        this.wave.update(rotation/this.angleRange);

    }


    draw(ctx, center) {
        ctx.strokeStyle = "#030303";
        ctx.beginPath();
        ctx.arc(center.x, center.y , this.radious, 0, 2 * 3.141)
        ctx.stroke();
        ctx.closePath();

        this.positions.forEach((n, i) => {
            ctx.beginPath();
            ctx.arc(center.x + (this.radious * n.x), center.y + (this.radious * n.y), 30, 0, 2 * 3.141)
            ctx.stroke();
            ctx.closePath();

            if (this.builds[i] !== undefined) this.builds[i].draw(ctx, n, this.radious);
        })

        if (this.wave !== undefined) this.wave.draw(ctx, this.radious, center);
    }
}
export class Wave {
    constructor(Effect) {
        this.start=0;
        this.end=2*Math.PI/11;
    }
    update(rotation){
        this.start-=rotation;
        this.end-=rotation;
    }
    upgrade(level){
        this.end=2*Math.PI/(11-level);
    }
    draw(ctx, radius, center){
        ctx.strokeStyle = "#"+(radius*800).toPrecision(6)+"FF";
        ctx.beginPath();
        ctx.arc(center.x , center.y , radius+30, this.start, this.end)
        ctx.stroke();
        ctx.closePath();
    }
}
export class Build{

}
import {Food, Know, Yun} from "./Game.js";

export const HumanBuild = [
    {
        name: "House",
        resource: Know,
        amount: 10,
        cost: 10, image: "https://via.placeholder.com/55"
    }, {
        name: "School",
        resource: Know,
        amount: 100,
        cost: 90, image: "https://via.placeholder.com/55"
    }, {
        name: "Laboratory",
        resource: Food,
        amount: 100,
        cost: 70, image: "https://via.placeholder.com/55"
    }]

export const basicBuild = [
    {
        name: "Farm",
        resource: Food,
        amount: 1,
        cost: 1, image: "https://via.placeholder.com/55"
    }
    , {
        name: "Plains",
        resource: Know,
        amount: 1,
        cost: 6, image: "https://via.placeholder.com/55"
    },
    {
        name: "Mountains",
        resource: Know,
        amount: 3.3,
        cost: 11, image: "https://via.placeholder.com/55"
    },
    {
        name: "DarkTree",
        resource: Yun,
        amount: 3,
        cost: 40, image: "https://via.placeholder.com/55"
    }
]
