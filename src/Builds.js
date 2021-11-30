export default class Circle {
    builds = [];
    amount;

    constructor(amount) {
        this.amount = amount;
        this.angleRange = 3 * Math.PI / amount;
        this.positions = []
        this.builds=new Array(amount);
        for (let i = 0; i < this.amount; i++) {
            this.positions.push({
                x: Math.cos(i * (2 * Math.PI / this.amount)),
                y: Math.sin(i * (2 * Math.PI / this.amount))
            })
        }
    }


    draw(ctx, radius, center) {
        this.positions.forEach((n, i) => {
            ctx.beginPath();
            ctx.arc(center.x + (radius * n.x), center.y + (radius * n.y), 30, 0, 2 * 3.141)
            ctx.stroke();
            if (this.builds[i] !== undefined) this.builds[i].draw(ctx, n, radius);
        })
    }
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
