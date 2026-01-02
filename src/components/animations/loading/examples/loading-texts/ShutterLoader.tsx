"use client"

import { motion } from "framer-motion";

export default function ShutterLoader() {
    const letters = ["L", "O", "A", "D", "I", "N", "G"];
    return (
        <div
            className="relative flex aspect-7/2 overflow-hidden bg-zinc-700 text-white font-semibold text-3xl"
        >
            {/* 文字 */}
            {letters.map((letter, i) => (
                <div
                    key={i}
                    className="relative w-12 h-full flex items-center justify-center"
                >
                    <motion.span
                        className="absolute z-10 select-none"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 0, 0],
                        }}
                        transition={{
                            duration: 2,
                            times: [0, 0.16, 0.5, 1],
                            ease: "easeInOut",
                            repeat: Infinity,
                            delay: i * 0.142857,
                        }}
                    >
                        {letter}
                    </motion.span>

                    {/* カバー */}
                    <motion.div
                        className="absolute inset-0 z-30 bottom-0 left-0 w-full bg-linear-to-b from-white to-zinc-100"
                        initial={{
                            height: "100%",
                            y: "0%",
                        }}
                        animate={{
                            y: ["0%", "-100%", "0%", "0%"],
                            height: ["100%", "100%", "100%", "100%"],
                        }}
                        transition={{
                            duration: 2,
                            times: [0, 0.16, 0.5, 1],
                            ease: "easeInOut",
                            repeat: Infinity,
                            delay: i * 0.142857,
                        }}
                    />
                </div>
            ))}
        </div>
    );
}