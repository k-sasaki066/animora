import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

function hexToHsl(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s, l = (max + min) / 2;

    const d = max - min;

    if (d !== 0) {
        s = d / (1 - Math.abs(2 * l - 1));

        switch (max) {
            case r: h = ((g - b) / d) % 6; break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h = Math.round(h * 60);
    } else {
        s = 0;
    }

    return { h, s: s * 100, l: l * 100 };
}

export default function WaveDotsLoader({
    paused = false,
    speed = 2,
    size = 12,
    color = "#67e8f9",
    delayStep = 0.2,
    scale = 2.5
}: LoaderProps) {

    const count = 3;

    return (
        <div className="flex items-center justify-center">
            {Array.from({ length: count }).map((_, i) => {
                const { h, s, l } = hexToHsl(color);
                const gradientColor = `hsl(${h + i * 10}, ${s}%, ${l - i * 5}%)`;
                const pausedScale = 1 + (i * 0.5);
                const pausedOpacity = 1 - i * 0.3;

                return (
                    <div
                        key={i}
                        className={`relative rounded-full`}
                        style={{
                            width: size,
                            height: size,
                            margin: size! * 0.4,
                            backgroundColor: gradientColor,
                        }}
                    >
                        {/* 波紋 */}
                        <motion.span
                            className={`absolute inset-0 rounded-full`}
                            style={{
                                backgroundColor: gradientColor,
                            }}
                            animate={
                                paused
                                    ? {
                                        scale: pausedScale,
                                        opacity: pausedOpacity
                                    }
                                    : {
                                        scale: [1, scale, scale],
                                        opacity: [0.6, 0.6, 0],
                                    }
                            }
                            transition={
                                paused
                                    ? { duration: 0 }
                                    : {
                                        duration: speed,
                                        ease: "easeOut",
                                        times: [0, 0.6, 1],
                                        repeat: Infinity,
                                        delay: i * delayStep,
                                    }
                            }
                        />
                    </div>
                );
            })}
        </div>
    );
}