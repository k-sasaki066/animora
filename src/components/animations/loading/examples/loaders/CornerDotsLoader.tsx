import { motion, Variants } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function CornerDotsLoader({
    paused = false,
    speed = 1.2,
    size = 12,
    color = "#f498f1",
}: LoaderProps) {
    const boxSize = size * 3;

    const positions = {
        tl: { x: 0, y: 0 },
        tr: { x: boxSize - size, y: 0 },
        br: { x: boxSize - size, y: boxSize - size },
        bl: { x: 0, y: boxSize - size },
    };

    const dots = [
        {
            path: ["tl", "tr", "tr", "br"] as const,
            delay: 0,
        },
        {
            path: ["bl", "bl", "tl", "tl"] as const,
            delay: speed / 3,
        },
        {
            path: ["br", "br", "br", "bl"] as const,
            delay: (speed / 3) * 2,
        },
    ];

    const dotVariants: Variants = {
        paused: (pos: keyof typeof positions) => ({
            x: positions[pos].x,
            y: positions[pos].y,
        }),

        animate: (path: (keyof typeof positions)[]) => ({
            x: path.map(p => positions[p].x),
            y: path.map(p => positions[p].y),
            transition: {
                duration: speed,
                ease: "linear",
                repeat: Infinity,
            },
        }),
    };

    return (
        <div
            className="relative"
            style={{ width: boxSize, height: boxSize }}
        >
            {/* Dots */}
            {dots.map((dot, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: size,
                        height: size,
                        backgroundColor: color,
                    }}
                    variants={dotVariants}
                    animate={paused ? "paused" : "animate"}
                    custom={paused ? dot.path[0] : dot.path}
                    transition={{
                        delay: dot.delay,
                    }}
                />
            ))}
        </div>
    );
}