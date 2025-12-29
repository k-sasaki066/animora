import p5 from "p5";
import { GlitchEffect } from "./glitchEffect";

type SketchOptions = {
    width: number;
    height: number;
    imgSrc?: string;
};

export const glitchSketch =
    ({ width, height, imgSrc }: SketchOptions) =>
    (p: p5) => {
        let glitch: GlitchEffect | null = null;
        let canvasEl: HTMLCanvasElement | null = null;

        // 外部から参照できるようにする
        (p as any).glitch = glitch;

        p.setup = () => {
            const canvas = p.createCanvas(width, height);
            canvasEl = canvas.elt as HTMLCanvasElement;

            canvasEl.getContext("2d", {
                willReadFrequently: true,
            });

            p.pixelDensity(1);

            if (!imgSrc) return;

            p.loadImage(imgSrc, (img) => {
                glitch = new GlitchEffect(p, img);
                (p as any).glitch = glitch;
            });
        };

        p.draw = () => {
            p.clear();
            p.background(0);
            glitch?.show();
        };

        p.windowResized = () => {
            if (!canvasEl) return;

            const parent = canvasEl.parentElement;
            if (!parent) return;

            const w = parent.clientWidth;
            const h = parent.clientHeight;

            glitch?.resizeCanvasAndImage(w, h);
        };
    };