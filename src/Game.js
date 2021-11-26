
import InputHandler from "./Input.js";

import * as Circles from "./Builds.js"

import {SCREEN_HEIGHT,SCREEN_WIDTH} from "./index.js";

export const GAMESTATE = {
    Paused: 0,
    Running: 1,
    reset:2,
    idle:3
}
export default class Game {
    constructor() {
        this.gameState = GAMESTATE.Menu;
        this.gameWidth = SCREEN_WIDTH*0.76;
        this.gameHeight = SCREEN_HEIGHT;
        new InputHandler(this);
        this.lives = 3;
        this.gameObjects=[];
        this.level=0;
        this.rotation=0;
        this.c1=new Circles.C1();
    }

    start() {
        if(this.gameState!==GAMESTATE.Menu)return;
        this.gameState = GAMESTATE.Running;

        this.gameObjects = [this.Ball, this.paddle]

    }

    update(dt) {
        if (this.gameState === GAMESTATE.Paused || this.gameState === GAMESTATE.Menu || this.gameState === GAMESTATE.GameOver||this.gameState === GAMESTATE.Win) return;
        if (!this.lives) this.gameState = GAMESTATE.GameOver;
        this.gameObjects.forEach(object => object.update(dt));
        this.rotation=(this.rotation+dt)%3.1415
    }

    drawCircles(ctx){
        let r1=((this.gameHeight/2)-60);
        let r2=((this.gameHeight/2)-60)*0.7071;
        let r3=((this.gameHeight/2)-60)*0.4082;
        ctx.fillStyle="#0FF";
        ctx.beginPath();
        ctx.arc(this.gameWidth/2,this.gameHeight/2,r1,0,2*3.141)
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.gameWidth/2,this.gameHeight/2,r2,0,2*3.141)
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.gameWidth/2,this.gameHeight/2,r3,0, 2*3.141)
        ctx.stroke();

        this.c1.draw(ctx,r3,{x:this.gameWidth/2,y:this.gameHeight/2});
    }

    draw(ctx) {
        this.drawCircles(ctx)
        this.gameObjects.forEach(object => object.draw(ctx));

    }



    togglePause() {
        if (this.gameState === GAMESTATE.Menu ) {return}
        if (this.gameState === GAMESTATE.Paused ) {
            this.gameState = GAMESTATE.Running;
        } else {
            this.gameState = GAMESTATE.Paused;
        }
    }
    resize(){
        console.log("resized did")

    }
}