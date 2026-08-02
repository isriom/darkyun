import {SCREEN_HEIGHT} from "./index.js";

console.log("index import (Builds)")
import {Food, Know, Yun} from "./Game.js";
var resources=[Food,Know,Yun]
console.log("Food,Know,Yun import (Builds)")
import {data} from "./Data.js"


export default class Circle {
    constructor(amount, r) {
        this.amount = amount;
        this.angleRange = 2 * Math.PI / (amount - 1);
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

    buildUp(info, subindex) {
        if ((info.cost() > Food.amount)) {
            return
        }
        let index = ((((subindex / (2 * Math.PI)) * (this.amount - 1)) + ((this.amount - 1) * this.angleRange / (2 * 2 * Math.PI))) % (this.amount - 1));
        if (index < 0.75) {
            index = 0;
        }
        index = Math.round(index)
        index = index < 0.75 ? 0 : Math.abs((this.amount) - index) % this.amount
        if (this.builds[index] === undefined) {
            Food.amount -= info.cost();
            this.builds[index] = new Build(info);
        }
    }

    update(rotation) {
        this.wave.update(1000 * rotation / this.angleRange);

    }

    draw(ctx, center) {
        let subradious = 30
        ctx.strokeStyle = "#030303";
        ctx.beginPath();
        ctx.arc(center.x, center.y, this.radious, 0, 2 * 3.141)
        ctx.stroke();
        ctx.closePath();

        this.positions.forEach((n, i) => {
            let x = center.x + (this.radious * n.x)
            let y = center.y + (this.radious * n.y)
            ctx.beginPath();
            ctx.arc(x, y, subradious, 0, 2 * 3.141)
            ctx.stroke();
            ctx.closePath();

            if (this.builds[i] !== undefined) this.builds[i].draw(ctx, subradious, {x: x, y: y});
        })

        if (this.wave !== undefined) this.wave.draw(ctx, this.radious, center);
    }
}

export class Wave {
    constructor(Effect) {
        this.start = 0;
        this.end = 2 * Math.PI / 11;
        this.effect = Effect;
    }

    update(rotation) {
        this.start -= rotation;
        this.end -= rotation;
    }

    upgrade(level) {
        this.end = 2 * Math.PI / (11 - (level + 0.03));
    }

    draw(ctx, radius, center) {
        ctx.strokeStyle = "#" + ((radius * 800) << 2).toPrecision(6) + "FF";
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius + 30, this.start, this.end)
        ctx.stroke();
        ctx.closePath();
    }
}

export class Build {
    constructor(info) {
        this.type = info.name;
        this.production = info.amount;
        this.image = info.image;

        info.resource.forEach((n,i)=>{n.builds.push(this);n.addAmount+=this.production[i]})
    }

    draw(ctx, r, center) {
        ctx.strokeStyle = "#030303";
        ctx.rect(center.x - r / 2, center.y - r / 2, r + 2, r + 2);
        ctx.stroke();
    }
}


export var HumanBuild = [
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

export var basicBuild;

export function update() {
    basicBuild = [
        {
            name: "Farm",
            resource: [Food],
            amount: [function(){return 1},function(){return 0},function(){return 0}],
            cost:  function () {
                return Math.E ** (Food.builds.length) / 2
            }, image: "https://via.placeholder.com/55"
        }
        , {
            name: "Plains",
            resource: [Know],
            amount: [function(){return 1},function(){return 0},function(){return 0}],
            cost: function () {
                return 6*Math.E ** (Food.builds.length) / (1+Know.builds.length)
            }, image: "https://via.placeholder.com/55"
        },
        {
            name: "Mountains",
            resource: [Food],
            amount: [function(){return 3.3},function(){return 0},function(){return 0}],
            cost:function () {
                return 9.5*Math.E ** (Food.builds.length) / 2
            }, image: "https://via.placeholder.com/55"
        },
        {
            name: "DarkTree",
            resource: [Yun],
            amount:[function () {
                return [Yun.amount / (Food.amount + 100)]
            },function () {
                return [Yun.amount / (Know.amount + 100)]
            },function () {
                return [Know.amount / (Yun.amount + 100)]
            }],
            cost:function () {
                return 40*Math.E ** (Food.builds.length) / 2
            }, image: "https://via.placeholder.com/55"
        }
    ]
    console.log(basicBuild);
}
