export var Resources=[food, Knowledge, darkyun]
function Calculate(object){
    if(object.CalculateM==="function"){
        this.multy+=object.CalculateM;
    }else{
        this.multy+=object.CalculateA;

    }
}
export class food{
    static amount=0;

    constructor(add) {
        this.addAmount=add;
        this.bonus=[];
        this.upgrades=[]
    }
    add(){
        let totalBonus= {multy:1, addy:0};
        totalBonus.Calculate=Calculate;
        this.bonus.forEach(element=>totalBonus.Calculate(element))
        food.amount=+this.addAmount*totalBonus.multy+totalBonus.addy;
    }



}
export class Knowledge {
    static amount=0;
    constructor(add) {
        this.addAmount=add;
        this.bonus=[];
        this.upgrades=[]
    }
    add(){
        let totalBonus= {multy:1, addy:0};
        totalBonus.Calculate=Calculate;
        this.bonus.forEach(element=>totalBonus.Calculate(element))
        food.amount=+this.addAmount*totalBonus.multy+totalBonus.addy;
    }
}
export class darkyun{
    static amount=0;
    constructor(add) {
        this.addAmount=add;
        this.bonus=[];
        this.upgrades=[]
    }
    add(){
        let totalBonus= {multy:1, addy:0};
        totalBonus.Calculate=Calculate;
        this.bonus.forEach(element=>totalBonus.Calculate(element))
        food.amount=+this.addAmount*totalBonus.multy+totalBonus.addy;
    }
}