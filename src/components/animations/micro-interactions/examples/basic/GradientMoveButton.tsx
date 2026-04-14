import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import type { ButtonParams } from "../../button-animation";

function hexToHsl(hex: string) {
    hex = hex.replace("#", "");

    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0;
    const l = (max + min) / 2;

    const d = max - min;

    if (d !== 0) {
        s = d / (1 - Math.abs(2 * l - 1));

        switch (max) {
            case r:
                h = ((g - b) / d) % 6;
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h = Math.round(h * 60);
        if (h < 0) h += 360;
    }

    return { h, s: s * 100, l: l * 100 };
}

function hslToString(h: number, s: number, l: number) {
    return `hsl(${h}, ${s}%, ${l}%)`;
}

function createGradient(color: string) {
    const { h, s, l } = hexToHsl(color);

    const c1 = hslToString(
        (h + 20) % 360,
        Math.min(s + 10, 100),
        Math.min(l + 10, 95)
    );

    const c2 = hslToString(
        h,
        s,
        l
    );

    const c3 = hslToString(
        (h - 20 + 360) % 360,
        Math.min(s + 5, 100),
        Math.max(l - 10, 5)
    );

    return `linear-gradient(90deg, ${c1}, ${c2}, ${c3})`;
}

export default function GradientMoveButton({
    speed = 4,
    color = "#fb7185",
}: ButtonParams) {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            backgroundPositionX: ["0%", "100%"],  // 横方向にアニメーション
            backgroundPositionY: ["50%", "50%"], // 縦は固定
            transition: {
                duration: speed,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }
        });
    }, [speed]);

    const gradient = createGradient(color || "#fb7185");

    return (
        <motion.div
            className="rounded-full w-40 h-12 cursor-pointer px-8 py-4"
            style={{
                backgroundImage: gradient,
                backgroundSize: "500% 500%",
                backgroundPosition: "0% 50%",
            }}
            animate={controls}
        />
    );
}