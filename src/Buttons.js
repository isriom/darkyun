import {ButtonsDiv} from "./index.js";
console.log("index import (Buttons)")

import {SelectedBuild} from "./Game.js";
console.log("Game import (Buttons)")

export default class buttons {
    constructor(id, info) {
        this.index = id;
        this.amount = 0;
        this.info = info;

        this.html = document.createElement("button");
        this.html.innerText = this.info.name;
        this.html.className = "builds";
        this.html.onclick = this.onclick
        this.html.buildid=id;
        this.html.disabled=false;

        this.html.style.width = (-1 + ButtonsDiv.offsetWidth / 2).toString() + "px";
        this.html.style.height = (-1 + ButtonsDiv.offsetHeight / 11).toString() + "px";

        this.html.style.left = (ButtonsDiv.offsetWidth / 2).toString() + "px";
        this.html.style.top = ((ButtonsDiv.offsetHeight / 11 * id)).toString() + "px";

        this.domref = ButtonsDiv.appendChild(this.html);
    }
    onclick() {
        [...ButtonsDiv.children].forEach(n=>n.disabled=false);
        SelectedBuild.index = this.buildid;
        this.disabled=true;
    }

}

export class build {

}