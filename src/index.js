export var SCREEN_WIDTH = document.documentElement.clientWidth;
export var SCREEN_HEIGHT = document.documentElement.clientHeight;
export var ButtonsDiv = document.getElementById("leftMenubuttons");

import Game, {GAMESTATE} from "./Game.js";
//Canvas
let Background = [...ButtonsDiv.parentElement.children].find(c => c.id === "gameScreen");
export let firstlayer = [...Background.parentElement.children].find(c => c.id === "firstLayer");
let menu = [...Background.parentElement.children].find(c => c.id === "MenuLayer");

let Bctx = Background.getContext("2d");
let FLctx = firstlayer.getContext("2d");
let Menuctx = menu.getContext("2d");

//Background
var BackImage = new Image();
BackImage.src = "/assets/Bakcground 1.png";
BackImage.addEventListener("load", function () {
    Bctx.drawImage(BackImage, 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

})


resize();

const Engine = new Game();

let lastime = 0;


function gameloop(timestamp) {
    let dt = timestamp - lastime;
    lastime = timestamp;

    FLctx.clearRect(0, 0, firstlayer.width, firstlayer.height);
    Menuctx.clearRect(0, 0, menu.width, menu.height);

    Engine.update(dt);
    Engine.draw(FLctx, Menuctx);

    requestAnimationFrame(gameloop);
}

function resize() {
    // SCREEN_WIDTH = document.documentElement.clientWidth;
    // SCREEN_HEIGHT = document.documentElement.clientHeight;
    //Background
    Background.width = SCREEN_WIDTH;
    Background.height = SCREEN_HEIGHT;
    Bctx.drawImage(BackImage, 0, 0, Background.width, Background.height);
    //First Layer
    firstlayer.height = SCREEN_HEIGHT;
    firstlayer.width = SCREEN_WIDTH * 0.76;
    firstlayer.style.left = (SCREEN_WIDTH * 0.24).toString()+"px";
    //Menu Layer
    menu.width = SCREEN_WIDTH * 0.24;
    menu.height = SCREEN_HEIGHT;
    // Buttons div
    ButtonsDiv.style.left=(SCREEN_WIDTH * 0.025).toString()+"px"
    ButtonsDiv.style.top=(SCREEN_HEIGHT * 0.202).toString()+"px"
    ButtonsDiv.style.width=(SCREEN_WIDTH * 0.21).toString()+"px"
    ButtonsDiv.style.height=(SCREEN_HEIGHT * 0.76).toString()+"px"
    //Redraw
    try {
        Engine.draw(FLctx);
        Engine.resize(Menuctx);
    } catch (error) {
    }

}

window.addEventListener('resize', resize);
requestAnimationFrame(gameloop);
