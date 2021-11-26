export var SCREEN_WIDTH = 0;
export var SCREEN_HEIGHT = 0;

import Game, {GAMESTATE} from "./Game.js";

let Background = document.getElementById("gameScreen");
let firstlayer =[...Background.parentElement.children].find(c=>c.id==="firstLayer") ;
let Bctx = Background.getContext("2d");
let FLctx = firstlayer.getContext("2d");

resize();
let menubuttons=[...Background.parentElement.children].find(c=>c.id==="leftMenubuttons");
console.log(menubuttons.id);
const Engine = new Game();
let lastime = 0;


function gameloop(timestamp) {
    let dt = timestamp - lastime;
    lastime = timestamp;

    FLctx.clearRect(0, 0, FLctx.width, FLctx.height);
    Engine.update(dt);
    Engine.draw(FLctx);

    if (Engine.gameState === GAMESTATE.GameOver) return;
    requestAnimationFrame(gameloop);
}

function resize() {
    SCREEN_WIDTH = document.documentElement.clientWidth;
    SCREEN_HEIGHT = document.documentElement.clientHeight;
    //Background
    Background.width = SCREEN_WIDTH;
    Background.height = SCREEN_HEIGHT;
    //First Layer
    firstlayer.height= SCREEN_HEIGHT ;
    firstlayer.width = SCREEN_WIDTH*0.76;
    firstlayer.style.left = ((SCREEN_WIDTH * 0.24));
}

window.addEventListener('resize', resize);
requestAnimationFrame(gameloop);
