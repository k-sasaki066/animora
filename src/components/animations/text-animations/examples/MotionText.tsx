"use client";

import { motion } from "framer-motion";

const text = "ANIMATION";

const getCharWidth = (char: string) => {
    if (char === "I") return "w-[0.4em]";
    if (char === "W" || char === "M") return "w-[1.2em]";
    return "w-[0.85em]";
};

export default function VerticalRotationText() {
    return (
        <motion.div
            className="inline-flex cursor-pointer overflow-hidden"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
                hover: {
                    transition: {
                        staggerChildren: 0.03,
                    },
                },
                rest: {
                    transition: {
                        staggerChildren: 0.03,
                        staggerDirection: 1,
                    },
                },
            }}
        >
            {text.split("").map((char, i) => {
                const isEven = i % 2 === 0;

                return (
                    <div
                        key={i}
                        className={`relative overflow-hidden h-[1em] ${getCharWidth(char)} text-[3vw]`}
                    >
                        {/* 上の文字 */}
                        <motion.span
                            className="absolute inset-0 flex items-center justify-center font-bold"
                            variants={{
                                rest: {
                                    y: "-1em",
                                    opacity: 0,
                                },
                                hover: {
                                    y: "0em",
                                    opacity: 1,
                                    color: isEven ? "#dc2626" : "#2563eb",
                                },
                            }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            {char}
                        </motion.span>

                        {/* 中央の文字 */}
                        <motion.span
                            className="absolute inset-0 flex items-center justify-center font-bold"
                            variants={{
                                rest: {
                                    x: 0,
                                    y: 0,
                                    opacity: 1,
                                    color: "#000000",
                                },
                                hover: {
                                    x: isEven ? "-1em" : 0,
                                    y: isEven ? 0 : "1em",
                                    opacity: 1,
                                },
                            }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            {char}
                        </motion.span>
                    </div>
                );
            })}
        </motion.div>
    );
}