import {ButtonsDiv} from "./index.js";
import {SelectedBuild} from "./Game.js";

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


        this.html.style.width = (-1 + ButtonsDiv.offsetWidth / 2).toString() + "px";
        this.html.style.height = (-1 + ButtonsDiv.offsetHeight / 11).toString() + "px";

        this.html.style.left = (ButtonsDiv.offsetWidth / 2).toString() + "px";
        this.html.style.top = ((ButtonsDiv.offsetHeight / 11 * id)).toString() + "px";


        this.domref = ButtonsDiv.appendChild(this.html);
    }
    onclick() {
        SelectedBuild.index = this.buildid;
        console.log(SelectedBuild)
    }

}

export class build {

}