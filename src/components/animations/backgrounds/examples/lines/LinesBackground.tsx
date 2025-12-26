"use client";

import { motion, Variants } from "framer-motion";
import { redLines, blueLines, lightBlueLines } from "./linesData";

const showVariant: Variants = {
    animate: {
        opacity: [0.15, 0.2, 0.15],
        transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        },
    },
};

const drawVariant: Variants = {
    initial: {
        strokeDasharray: 200,
        strokeDashoffset: 800,
    },
    animate: {
        strokeDashoffset: [800, 0, -800],
        transition: {
        duration: 4,
            ease: ["easeInOut", "linear"],
        times: [0, 0.7, 1],
        repeat: Infinity,
        },
    },
};

export default function LinesBackground() {
    return (
        <motion.svg
            viewBox="0 0 1820 1080"
            className="w-full aspect-video"
            preserveAspectRatio="xMidYMid slice"
        >
            {/* red lines */}
            <motion.g
                variants={showVariant}
                animate="animate"
                className="stroke-[#CE1B5F]"
                fill="none"
                strokeWidth={12}
            >
                {redLines.map((line, i) => (
                    <line key={i} {...line} />
                ))}
            </motion.g>

            {/* blue lines */}
            <motion.g
                variants={showVariant}
                animate="animate"
                className="stroke-[#06A1C4]"
                fill="none"
                strokeWidth={12}
            >
                {blueLines.map((line, i) => (
                    <motion.line key={i} {...line} />
                ))}
            </motion.g>

            {/* light-blue drawing lines */}
            <motion.g
                variants={drawVariant}
                initial="initial"
                animate="animate"
                className="stroke-[#def3f7]"
                fill="none"
                strokeWidth={6}
                opacity={0.5}
            >
                {lightBlueLines.map((line, i) => (
                    <motion.line key={i} {...line} />
                ))}
            </motion.g>
        </motion.svg>
    );
}