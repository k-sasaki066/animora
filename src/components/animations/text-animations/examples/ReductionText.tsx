"use client";

import { motion } from "framer-motion";

export default function ReductionText() {

    return (
        <div className="w-full px-4 flex items-center justify-center overflow-hidden">
            <motion.div
                className="font-mono font-bold uppercase text-[3vw] origin-left"
                initial={{
                    opacity: 0,
                    x: "20vw",
                    scaleX: 1,
                    scaleY: 1,
                    skewX: -60,
                }}
                animate={{
                    opacity: [0, 1, 1],
                    x: ["20vw", "0vw", "0vw"],
                    scaleX: [1, 0.45, 1],
                    scaleY: [1, 1.15, 1],
                    skewX: [-60, 0, 0],
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.165, 0.84, 0.44, 1],
                    times: [0, 0.6, 1],
                    repeat: Infinity,
                    repeatDelay: 1.5,
                }}
            >
                Text Animation
            </motion.div>
        </div>
    );
}