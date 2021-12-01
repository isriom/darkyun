import {SelectedBuild} from "./Game.js";
import {firstlayer} from "./index.js";

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
            // let builddata=game.buttons[SelectedBuild.index].info;
            let r=-60+firstlayer.height/2;

            let mouse={x:event.offsetX,y:event.offsetY}
            let center={x:firstlayer.width/2,y:firstlayer.height/2};
            let vec={x:mouse.x-center.x,y:center.y-mouse.y}

            let distance= (((Math.abs(vec.x))**2)+(Math.abs(vec.y)**2))**(1/2)
            let index= Math.floor(-0.6+3*distance/r)
            let angle=Math.acos(vec.x/distance)!==Math.asin(vec.y/distance)?(Math.acos(-vec.x/distance)+Math.PI)%(2*Math.PI):Math.asin(vec.y/distance);
            console.log("i"+index);
            console.log("c:x"+center.x+"c:y"+center.y);
            console.log("m:x"+mouse.x+"m:y"+mouse.y);
            console.log("v:x"+vec.x+"v:y"+vec.y);
            console.log("r"+r);
            console.log("d"+distance);
            console.log("a"+angle);
            if(index<1.35 ){
                game.c1;
            }else if(index<2.05){
                game.c2;
            }else{
                game.c3;
            }

        })


    };


}
