"use client"

import { motion } from "framer-motion";

export default function SlideTextLoader() {
    const text = ["L", "o", "a", "d", "i", "n", "g"];

    return (
        <div className="relative text-3xl font-bold uppercase tracking-[5px]">
            <span className="text-black">
                {text}
            </span>

            <motion.span
                className="absolute top-0 left-0 text-[#be7cba] border-r-4 border-[#be7cba] whitespace-nowrap overflow-hidden"
                initial={{
                    width: 0
                }}
                animate={{
                    width: ["0%", "100%", "0%"]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {text}
            </motion.span>
        </div>
    );
}