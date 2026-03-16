import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const color: "red" | "gray" = "red";

export default function HexBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;
        const ctx = context;

        let w = canvas.width = canvas.parentElement!.clientWidth;
        let h = canvas.height = 400;

        const opts = {
            side: 16,
            picksPerTick: 1,
            baseTime: 120,
            addedTime: 20,
            colors:
                color === "red"
                ? ["rgba(206,23,41,alp)", "rgba(193,23,43,alp)"]
                : ["rgba(245,245,245,alp)", "rgba(229,229,229,alp)"],
            strokeColor:
                color === "red"
                ? "rgba(206,23,41,alp)"
                : "rgba(245,245,245,alp)",
        };

        const difX = (Math.sqrt(3) * opts.side) / 2;
        const difY = (opts.side * 3) / 2;
        const rad = Math.PI / 6;
        const cos = Math.cos(rad) * opts.side;
        const sin = Math.sin(rad) * opts.side;

        class Hex {
            x: number;
            y: number;
            picked = false;
            time = 0;
            targetTime = 0;
            xs: number[];
            ys: number[];

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.xs = [
                x + cos, x, x - cos,
                x - cos, x, x + cos,
                ];
                this.ys = [
                y - sin, y - opts.side, y - sin,
                y + sin, y + opts.side, y + sin,
                ];
            }

            pick() {
                this.picked = true;
                this.time = 0;
                this.targetTime =
                opts.baseTime + opts.addedTime * Math.random();
            }

            step() {
                ctx.beginPath();
                ctx.moveTo(this.xs[0], this.ys[0]);
                for (let i = 1; i < this.xs.length; i++) {
                    ctx.lineTo(this.xs[i], this.ys[i]);
                }
                ctx.closePath();

                if (this.picked) {
                    this.time++;
                    const prop = this.time / this.targetTime;

                    const alpha = Math.sin(prop * Math.PI);

                    ctx.strokeStyle = opts.strokeColor.replace(
                        "alp",
                        alpha.toString()
                    );
                    ctx.lineWidth = 1.2;
                    ctx.stroke();

                    if (this.time >= this.targetTime) {
                        this.picked = false;
                    }
                }
            }
        }

        let hexes: Hex[] = [];
        for (let x = 0; x < w; x += difX * 2) {
            let i = 0;
            for (let y = 0; y < h; y += difY) {
                hexes.push(new Hex(x + difX * (i++ % 2), y));
            }
        }

        function loop() {
            ctx.fillStyle =
                color === "red"
                ? "rgba(232,28,47,0.25)"
                : "rgba(225,225,225,0.05)";
            ctx.fillRect(0, 0, w, h);

            for (let i = 0; i < opts.picksPerTick; i++) {
                hexes[(Math.random() * hexes.length) | 0].pick();
            }

            hexes.forEach(h => h.step());
            requestAnimationFrame(loop);
        }

        loop();

        const resize = () => {
            w = canvas.width = canvas.parentElement!.clientWidth;
            h = canvas.height = 400;
        };

        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, [color]);

    return (
        <motion.canvas
            ref={canvasRef}
            className="w-full aspect-video rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />
    );
}