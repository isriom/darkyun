import {ButtonsDiv} from "./index.js";

export default class buttons{
    constructor(id,info) {
        this.index=id;
        this.html=document.createElement("button");
        this.amount=0;
        this.info=info;
        this.html.innerText=this.info.name;
        this.html.className="builds";
        this.html.style.width=(-1+ButtonsDiv.offsetWidth/2).toString()+"px";
        this.html.style.height=(-1+ButtonsDiv.offsetHeight/11).toString()+"px";
        this.html.style.left=(ButtonsDiv.offsetWidth/2).toString()+"px";
        this.html.style.top=((ButtonsDiv.offsetHeight/11*id)).toString()+"px";
        console.log(ButtonsDiv.offsetTop)
        console.log(this.html.clientHeight)
        console.log(this.html.style.top)
        console.log(id)
        this.domref=ButtonsDiv.appendChild(this.html);
    }
    click(){

    }
}
export class build{

}