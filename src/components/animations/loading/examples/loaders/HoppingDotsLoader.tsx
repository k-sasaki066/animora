"use client"

import { motion } from "framer-motion";

export default function HoppingDotsLoader() {

    return (
        <motion.div
            className="relative w-12.5 h-7"
            animate={{
                translateX: ["0%", "-33%"],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            {/* 中央ドット */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 rounded-full bg-[#7aaed1]"
                animate={{
                    y: [0, 0, 12, 0, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.28, 0.33, 0.38, 1],
                }}
            />

            {/* 右ドット */}
            <motion.div
                className="absolute right-0 top-0 w-3 h-3 rounded-full bg-[#7aaed1]"
                animate={{
                    y: [0, 0, 12, 0, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.6, 0.66, 0.72, 1],
                }}
            />

            {/* 動く弾 */}
            <motion.div
                className="absolute top-0 left-0 w-3 h-3 rounded-full bg-[#7aaed1]"
                animate={{
                    x: [0, 57],
                    y: [0, -0.1],
                }}
                transition={{
                    x: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                    },
                    y: {
                        duration: 0.5,
                        repeat: Infinity,
                        ease: [0, 200, 0.8, 200],
                    },
                }}
                style={{ willChange: "transform" }}
            />
        </motion.div>
    );
}