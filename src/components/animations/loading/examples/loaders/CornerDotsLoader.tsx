"use client"

import { motion, Variants } from "framer-motion";

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

export default function CornerDotsLoader() {

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
                animate="animate"
                custom={["tl", "tr", "tr", "br"]}
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
                animate="animate"
                custom={["bl", "bl", "tl", "tl"]}
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
                animate="animate"
                custom={["br", "br", "br", "bl"]}
                transition={{
                    delay: (cycle / 3) * 2
                }}
            />
        </div>
    );
}