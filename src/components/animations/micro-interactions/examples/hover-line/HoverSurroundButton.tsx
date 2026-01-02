"use client";

import { motion } from "framer-motion";

export default function HoverSurroundButton() {

    return (
        <motion.button
            className="relative font-semibold px-8 py-4 w-40 h-12 cursor-pointer"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            {/* 線1 */}
            <motion.span
                className="absolute bottom-0 right-0 h-0.5 bg-orange-400 z-20"
                variants={{
                    rest: { width: 24 },
                    hover: { width: "100%" },
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                }}
            />

            {/* 線2： */}
            <motion.span
                className="absolute bottom-0 right-0 w-0.5 bg-orange-400 z-20"
                variants={{
                    rest: { height: 24 },
                    hover: { height: "100%" },
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut"
                }}
            />

            {/* 線3： */}
            <motion.span
                className="absolute top-0 left-0 h-0.5 bg-orange-400 z-20"
                variants={{
                    rest: { width: 24 },
                    hover: { width: "100%" },
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                }}
            />

            {/* 線4 */}
            <motion.span
                className="absolute top-0 left-0 w-0.5 bg-orange-400 z-20"
                variants={{
                    rest: { height: 24 },
                    hover: { height: "100%" },
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut"
                }}
            />

            {/* 背景 & テキスト変化 */}
            <motion.div
                className="absolute w-38 h-10 top-1 left-1 z-0 flex justify-center items-center"
                variants={{
                    rest: { backgroundColor: "#e5e7eb" },
                    hover: { backgroundColor: "#fb923c" },
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut"
                }}
            >
                <motion.span
                    className="z-10"
                    variants={{
                        rest: { color: "#99a1af" },
                        hover: { color: "#fff" },
                    }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut"
                    }}
                >
                    Button
                </motion.span>
            </motion.div>
        </motion.button>
    );
}