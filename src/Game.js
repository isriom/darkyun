import buttons from "./Buttons.js";

import InputHandler from "./Input.js";

import Resources from "./Resource.js";

import Circle,{basicBuild} from "./Builds.js"


import {ButtonsDiv, SCREEN_HEIGHT, SCREEN_WIDTH} from "./index.js";
// runtime data
export const GAMESTATE = {
    Paused: 0,
    Running: 1,
    reset: 2,
    idle: 3,
    Menu:4
}

export var Food=new Resources(0,"FOOD");
export var Know=new Resources(1,"KNOW");
export var Yun=new Resources(2,"YUN");

//GameLoad
export var GameData={
    race:undefined,
    c1Builds:undefined,
    c2Builds:undefined,
    c3Builds:undefined,
    FoodAmount:0,
    Know:0,
    Yun:0,

}
export var upgrades={

}
export var Specialbuilds={

}

export default class Game {
    constructor() {
        this.gameState = GAMESTATE.Menu;
        this.gameWidth = SCREEN_WIDTH * 0.76;
        this.gameHeight = SCREEN_HEIGHT;
        new InputHandler(this);
        if(this.load()){ return;
        }
        this.lives = 3;
        this.gameObjects = [];
        this.level = 0;
        this.rotation = 0;
        this.c1 = new Circle(5);
        this.c2 = new Circle(7);
        this.c3 = new Circle(11);
        this.resources=[Food,Know,Yun]
        this.resources.forEach(object => object.resize());
        this.buttons=[];
        // this.buildResources();
        let a=document.createElement("button");
        let B=document.createElement("button");
        a.style.width=(-1+ButtonsDiv.offsetWidth/2).toString()+"px";
        B.style.width=(-1+ButtonsDiv.offsetWidth/2).toString()+"px";
        a.style.height=(-1+ButtonsDiv.offsetHeight/11).toString()+"px";
        B.style.height=(-1+ButtonsDiv.offsetHeight/11).toString()+"px";
        B.className="upgrades";
        a.className="upgrades";
        ButtonsDiv.appendChild(B);
        ButtonsDiv.appendChild(a);
        [...basicBuild].forEach((n,index)=>this.buttons[index]=(new buttons(index,n)));

    }
    load(){

    }
    start() {
        if (this.gameState !== GAMESTATE.Menu) return;
        this.gameState = GAMESTATE.Running;

        this.gameObjects = [this.Ball, this.paddle]

    }

    update(dt) {
        if (this.gameState === GAMESTATE.Paused || this.gameState === GAMESTATE.Menu || this.gameState === GAMESTATE.GameOver || this.gameState === GAMESTATE.Win) return;
        this.gameObjects.forEach(object => object.update(dt));
        this.rotation = (this.rotation + dt) % 3.1415
    }

    drawCircles(ctx) {
        let r3 = ((this.gameHeight / 2) - 60);
        let r2 = ((this.gameHeight / 2) - 60) * 0.7071;
        let r1 = ((this.gameHeight / 2) - 60) * 0.4082;
        ctx.fillStyle = "#0FF";
        ctx.beginPath();
        ctx.arc(this.gameWidth / 2, this.gameHeight / 2, r1, 0, 2 * 3.141)
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.gameWidth / 2, this.gameHeight / 2, r2, 0, 2 * 3.141)
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.gameWidth / 2, this.gameHeight / 2, r3, 0, 2 * 3.141)
        ctx.stroke();

        this.c1.draw(ctx, r1, {x: this.gameWidth / 2, y: this.gameHeight / 2});
        this.c2.draw(ctx, r2, {x: this.gameWidth / 2, y: this.gameHeight / 2});
        this.c3.draw(ctx, r3, {x: this.gameWidth / 2, y: this.gameHeight / 2});
    }

    draw(ctx,Mctx) {
        this.drawCircles(ctx)
        this.gameObjects.forEach(object => object.draw(ctx));
        this.resources.forEach(object => object.draw(Mctx));
    }


    togglePause() {
        if (this.gameState === GAMESTATE.Menu) {
            return
        }
        if (this.gameState === GAMESTATE.Paused) {
            this.gameState = GAMESTATE.Running;
        } else {
            this.gameState = GAMESTATE.Paused;
        }
    }

    resize() {
        console.log("resized did")
        this.resources.forEach(object => object.draw(Mctx));
    }

    buildResources(){
        //Resources
        var FoodImg = new Image()
        var DarkyunImg = new Image()
        var KnowledgeImg = new Image()
        FoodImg.src = "/assets/Food.png"
        DarkyunImg.src = "/assets/Darkyun.png"
        KnowledgeImg.src = "/assets/Knowdledge.png"
        this.food.image=FoodImg;
        this.daryun.image=DarkyunImg;
        this.know.image=KnowledgeImg;

    }
}