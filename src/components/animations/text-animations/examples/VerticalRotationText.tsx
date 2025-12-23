"use client";

import { motion } from "framer-motion";

const text = "ANIMATION";

export default function VerticalRotationText() {
    return (
        <motion.div
            className="inline-flex gap-2 cursor-pointer overflow-hidden"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
                hover: {
                    transition: {
                        staggerChildren: 0.05,
                    },
                },
                rest: {
                    transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                    },
                },
            }}
        >
            {text.split("").map((char, i) => (
                <div
                    key={i}
                    className="relative overflow-hidden h-[1em] text-[3vw]"
                >
                    <motion.div
                    className="flex flex-col font-bold leading-none text-black"
                    variants={{
                        rest: { y: "-1em" },
                        hover: { y: "0em" },
                    }}
                    transition={{
                        duration: 0.1,
                        ease: "easeOut",
                    }}
                    >
                        {/* 上の文字 */}
                        <span className="h-[1em] flex items-center justify-center">
                            {char}
                        </span>

                        {/* 下の文字 */}
                        <span className="h-[1em] flex items-center justify-center">
                            {char}
                        </span>
                    </motion.div>
                </div>
            ))}
        </motion.div>
    );
}