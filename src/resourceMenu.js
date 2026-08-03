import { SCREEN_HEIGHT } from "./index.js";

export default class ResourceMenu {
    draw(ctx) {
        const baseX = SCREEN_HEIGHT * 0.055 + 75;
        const topY = SCREEN_HEIGHT * 0.060 - 2;
        const bottomY = SCREEN_HEIGHT * 0.095 + SCREEN_HEIGHT * 0.02;

        ctx.save();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.55)";

        for (let i = 0; i < 2; i++) {
            const separatorX = baseX + 75 * i - 12;

            ctx.beginPath();
            ctx.moveTo(separatorX, topY);
            ctx.lineTo(separatorX, bottomY);
            ctx.stroke();

            ctx.strokeStyle = "rgba(0, 0, 0, 0.6)";
            ctx.beginPath();
            ctx.moveTo(separatorX + 2, topY);
            ctx.lineTo(separatorX + 2, bottomY);
            ctx.stroke();

            ctx.strokeStyle = "rgba(255, 255, 255, 0.55)";
        }

        ctx.restore();
    }
}
