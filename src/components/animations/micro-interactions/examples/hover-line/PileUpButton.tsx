"use client";

import { motion } from "framer-motion";

export default function PileUpButton() {

    return (
        <motion.button
            className="relative px-8 py-4 w-40 h-12 cursor-pointer"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            {/* 枠線1 */}
            <motion.div
                className="absolute border border-black z-20"
                variants={{
                    rest: {
                        top: -3,
                        left: -3,
                        width: "100%",
                        height: "100%"
                    },
                    hover: {
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    },
                }}
                transition={{
                    duration: 0.2,
                    ease: "easeInOut"
                }}
            />

            {/* 枠線2： */}
            <motion.div
                className="absolute border border-black z-20"
                variants={{
                    rest: {
                        top: 3,
                        left: 3,
                        width: "100%",
                        height: "100%"
                    },
                    hover: {
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    },
                }}
                transition={{
                    duration: 0.2,
                    ease: "easeInOut"
                }}
            />

            {/* テキスト */}
            <motion.div className="relative w-full h-full z-10 flex justify-center items-center">
                <span className="text-black">
                    Button
                </span>
            </motion.div>
        </motion.button>
    );
}