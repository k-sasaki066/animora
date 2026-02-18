"use client";

import { motion } from "framer-motion";

export default function DoubleLine() {
    return (
        <motion.div
            className="w-[60%] h-0.75 origin-left"
            style={{
                backgroundImage:
                    `linear-gradient(to right, #ffc3a0, #ffafbd)`,
                WebkitMaskImage:
                    `linear-gradient(
                        to bottom,
                        black 0%,
                        black 35%,
                        transparent 35%,
                        transparent 65%,
                        black 65%,
                        black 100%)`,
            }}
            initial={{ scaleX: 0, y: 0 }}
            animate={{
                scaleX: 1,
                y: [0, -3, 0],
            }}
            transition={{
                scaleX: {
                    duration: 0.9,
                    ease: [0.4, 0, 0.2, 1],
                },
                y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
            }}
        />
    );
}