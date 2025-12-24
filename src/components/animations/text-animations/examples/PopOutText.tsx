"use client";

import { motion } from "framer-motion";

const textLines = [
    "RIDE",
    "THE",
    "WAVE",
];

const D = 4; // ずらし量(px)
const DURATION = 1;
const EASE = [0.86, 0, 0.07, 1] as const;

export default function PopOutText() {
    return (
        <div className="space-y-2 text-center font-black text-[3vw] leading-none">
            {textLines.map((line, lineIndex) => (
                <div key={lineIndex} className="flex justify-center gap-1">
                    {line.split("").map((char, i) => (
                        <motion.span
                            key={`${char}-${i}`}
                            className="inline-block text-black"
                            animate={{
                                x: [0, 0, D, D],
                                y: [0, 0, -D, -D],
                                textShadow: [
                                    "0px 0px 0px lightblue",
                                    "0px 0px 0px lightblue",
                                    `-${D}px ${D}px 0px lightblue`,
                                    `-${D}px ${D}px 0px lightblue`,
                                ],
                            }}
                            transition={{
                                duration: DURATION,
                                ease: EASE,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: (i + lineIndex) * 0.08,
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            ))}
        </div>
    );
}