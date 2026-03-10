import { motion, Variants } from "framer-motion";

interface Props {
    paused?: boolean;
}

const size = 35;
const dotSize = 12;
const cycle = 1.2;

const positions = {
    tl: { x: 0, y: 0 },
    tr: { x: size - dotSize, y: 0 },
    br: { x: size - dotSize, y: size - dotSize },
    bl: { x: 0, y: size - dotSize },
};

const dotVariants: Variants = {
    paused: (pos: keyof typeof positions) => ({
        x: positions[pos].x,
        y: positions[pos].y,
    }),

    animate: (path: (keyof typeof positions)[]) => ({
        x: path.map(p => positions[p].x),
        y: path.map(p => positions[p].y),
        transition: {
            duration: cycle,
            ease: "linear",
            repeat: Infinity,
        },
    }),
};

export default function CornerDotsLoader({ paused = false }: Props) {
    const animateState = paused ? "paused" : "animate";

    return (
        <div
            className="relative"
            style={{ width: size, height: size }}
        >
            {/* Dot 1 */}
            <motion.div
                className="absolute rounded-full bg-[#f498f1]"
                style={{
                    width: dotSize,
                    height: dotSize
                }}
                variants={dotVariants}
                animate={animateState}
                custom={paused ? "tl" : ["tl", "tr", "tr", "br"]}
                transition={{
                    delay: 0
                }}
            />

            {/* Dot 2 */}
            <motion.div
                className="absolute rounded-full bg-[#f498f1]"
                style={{
                    width: dotSize,
                    height: dotSize
                }}
                variants={dotVariants}
                animate={animateState}
                custom={paused ? "bl" : ["bl", "bl", "tl", "tl"]}
                transition={{
                    delay: cycle / 3
                }}
            />

            {/* Dot 3 */}
            <motion.div
                className="absolute rounded-full bg-[#f498f1]"
                style={{
                    width: dotSize,
                    height: dotSize
                }}
                variants={dotVariants}
                animate={animateState}
                custom={paused ? "br" : ["br", "br", "br", "bl"]}
                transition={{
                    delay: (cycle / 3) * 2
                }}
            />
        </div>
    );
}