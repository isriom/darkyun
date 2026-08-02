import {SelectedBuild} from "./Game.js";

console.log("game import (Input)")

import {firstlayer} from "./index.js";

console.log("index import (Input)")


export default class InputHandler {

    constructor(game) {
        document.addEventListener("keydown", event => {
            switch (event.code) {
            }
        })

        document.addEventListener("keyup", event => {
            switch (event.code) {
            }

        })
        firstlayer.addEventListener("mousedown", event => {
            let builddata = undefined
            try {
                builddata = game.buttons[SelectedBuild.index].info;
            } catch (a) {
                console.log(a);
            }

            let mouse = {x: event.offsetX, y: event.offsetY}
            let center = {x: firstlayer.width / 2, y: firstlayer.height / 2};
            let vec = {x: mouse.x - center.x, y: center.y - mouse.y}

            let distance = (((Math.abs(vec.x)) ** 2) + (Math.abs(vec.y) ** 2)) ** (1 / 2)
            let angle = vec.y > 0 ? Math.acos(vec.x / distance) : (Math.acos(-vec.x / distance) + Math.PI) % (2 * Math.PI)

            if (!builddata) {
                return
            }
            if(distance + 30 < game.r1){game.resources[0].amount+=1}
            else if (distance - 30 < game.r1) {
                game.c1.buildUp(builddata, angle);
            } else if (distance - 30 < game.r2) {
                game.c2.buildUp(builddata, angle);
            } else if(distance-30>game.r3+30){
                return;
            } else{
                game.c3.buildUp(builddata, angle);

            }

        })


    };


}
