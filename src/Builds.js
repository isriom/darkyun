export class C1 {
    static builds = [];
    static amount = 5;

    constructor() {
        this.angleRange = 3 * Math.PI / C1.amount;
        this.positions = [
            {x: -0.078, y: 0.9969},
            {x: -0.972, y: 0.2334},
            {x: -0.522, y: -0.852},
            {x: 0.6494, y: -0.76},
            {x: 0.9238, y: 0.3826}]
        }


    draw(ctx, radius,center) {
        this.positions.forEach((n, i) => {
            ctx.beginPath();
            ctx.arc(center.x+(radius * n.x), center.y+(radius * n.y), 30, 0, 2 * 3.141)
            ctx.stroke();
            if (C1.builds[i] !== undefined) C1.builds[i].draw(ctx, n, radius);
        })
    }
}
