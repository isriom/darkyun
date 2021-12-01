import {Yun} from "./Game.js";

export default class upgrades {

}

export class Effects {
    constructor(inf, func) {
        this.resource = inf.resource;
        this.func = func;
        this.dependenty = inf.dependenty;
        this.aument = function () {
            this.func(this.dependenty)
        };
    }
}

export class Timer {
    constructor(defBool) {
        this.bol = defBool;
    }

    switch() {
        this.bol = !this.bol;
    }

    time(secs) {
        window.setTimeout(this.switch, secs)
    }
}

var effects = {
    double5sec: {
        resource: Yun, func: Duplicate, dependenty: new Timer()
    }
}

function Duplicate(object, bool) {
    var condition = bool;
    if (condition === undefined) {

    } else {

        if (condition === "function") condition = bool();
        if (condition.bol === Boolean) condition=condition.bol;
    }
}
