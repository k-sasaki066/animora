import { useEffect, useRef } from "react";

type Props = {
    isOpen?: boolean; // モーダル用
};

export default function LiquidButton({ isOpen = true }: Props) {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const wrapperRef = useRef<HTMLButtonElement | null>(null);
    const rafRef = useRef<number | null>(null);
    const intervalRef = useRef<number | null>(null);

    const state = useRef({
        pointsA: [] as any[],
        pointsB: [] as any[],
        mouseX: 0,
        mouseY: 0,
        relMouseX: 0,
        relMouseY: 0,
        lastX: 0,
        lastY: 0,
        speedX: 0,
        speedY: 0,
        dirX: 0,
        dirY: 0,
    });

    const config = {
        points: 8,
        viscosity: 20, //粘度
        mouseDist: 70, //マウス影響範囲
        damping: 0.03, //揺れの収束(止まるまでの余韻の長さ)
    };

    class Point {
        x: number;
        y: number;
        ix: number;
        iy: number;
        vx = 0;
        vy = 0;
        level: number;

        constructor(x: number, y: number, level: number) {
            this.x = this.ix = 50 + x;
            this.y = this.iy = 50 + y;
            this.level = level;
        }

        move() {
            const s = state.current;

            this.vx += (this.ix - this.x) / (config.viscosity * this.level);
            this.vy += (this.iy - this.y) / (config.viscosity * this.level);

            const dx = this.ix - s.relMouseX;
            const dy = this.iy - s.relMouseY;
            const relDist =
                1 - Math.sqrt(dx * dx + dy * dy) / config.mouseDist;

            //X方向
            if (
                (s.dirX > 0 && s.relMouseX > this.x) || (s.dirX < 0 && s.relMouseX < this.x)
            ) {
                if (relDist > 0 && relDist < 1) { this.vx = (s.speedX / 6) * relDist; }
            }

            // Y方向
            if (
                (s.dirY > 0 && s.relMouseY > this.y) || (s.dirY < 0 && s.relMouseY < this.y)
            ) {
                if (relDist > 0 && relDist < 1) { this.vy = (s.speedY / 6) * relDist; }
            }

            this.vx *= 1 - config.damping;
            this.vy *= 1 - config.damping;

            this.x += this.vx;
            this.y += this.vy;
        }
    }

    useEffect(() => {
        if (!isOpen) return;

        const canvas = canvasRef.current;
        const wrapper = wrapperRef.current;
        if (!canvas || !wrapper) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // モーダル対策：2フレーム遅延
        const init = () => {
            const rect = wrapper.getBoundingClientRect();

            canvas.width = rect.width + 100;
            canvas.height = rect.height + 100;

            state.current.pointsA = [];
            state.current.pointsB = [];

            const addPoint = (x: number, y: number) => {
                state.current.pointsA.push(new Point(x, y, 1));
                state.current.pointsB.push(new Point(x, y, 2));
            };

            const w = rect.width;
            const h = rect.height;
            const x = h / 2;

            for (let i = 1; i < config.points; i++) {
                addPoint(x + ((w - h) / config.points) * i, 0);
            }
            addPoint(w - h / 5, 0);
            addPoint(w + h / 10, h / 2);
            addPoint(w - h / 5, h);
            for (let i = config.points - 1; i > 0; i--) {
                addPoint(x + ((w - h) / config.points) * i, h);
            }
            addPoint(h / 5, h);
            addPoint(-h / 10, h / 2);
            addPoint(h / 5, 0);
        };

        requestAnimationFrame(() => {
            requestAnimationFrame(init);
        });

        /* -------- Mouse -------- */
        const onMove = (e: MouseEvent) => {
            const s = state.current;
            s.dirX = e.clientX > s.mouseX ? 1 : -1;
            s.dirY = e.clientY > s.mouseY ? 1 : -1;
            s.mouseX = e.clientX;
            s.mouseY = e.clientY;

            const r = canvas.getBoundingClientRect();
            s.relMouseX = s.mouseX - r.left;
            s.relMouseY = s.mouseY - r.top;
        };

        window.addEventListener("pointermove", onMove);
        window.addEventListener("pointerdown", onMove);

        intervalRef.current = window.setInterval(() => {
            const s = state.current;
            s.speedX = s.mouseX - s.lastX;
            s.speedY = s.mouseY - s.lastY;
            s.lastX = s.mouseX;
            s.lastY = s.mouseY;
        }, 50);

        const render = () => {
            rafRef.current = requestAnimationFrame(render);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const s = state.current;
            [...s.pointsA, ...s.pointsB].forEach(p => p.move());

            const gx = Math.min(Math.max(s.relMouseX, 0), canvas.width);
            const gy = Math.min(Math.max(s.relMouseY, 0), canvas.height);

            const grad = ctx.createRadialGradient(gx, gy, 300, gx, gy, 0);
            grad.addColorStop(0, "#102ce5");
            grad.addColorStop(1, "#E406D6");

            [s.pointsA, s.pointsB].forEach((group, i) => {
                if (!group.length) return;

                ctx.fillStyle = i === 0 ? "#1CE2D8" : grad;
                ctx.beginPath();
                ctx.moveTo(group[0].x, group[0].y);

                group.forEach((p, idx) => {
                    const n = group[idx + 1] || group[0];
                    const cx = (p.x + n.x) / 2;
                    const cy = (p.y + n.y) / 2;
                    ctx.bezierCurveTo(p.x, p.y, cx, cy, cx, cy);
                });

                ctx.fill();
            });
        };

        render();

        return () => {
            window.addEventListener("pointermove", onMove);
            window.addEventListener("pointerdown", onMove);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isOpen]);


    return (
        <button
            ref={wrapperRef}
            className="relative inline-block w-40 h-12 px-8 py-4 rounded-full text-white font-bold text-sm tracking-widest uppercase text-center leading-12"
        >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 z-10">BUTTON</span>
            <canvas
                ref={canvasRef}
                className="absolute -top-12.5 -left-12.5"
            />
        </button>
    );
}
