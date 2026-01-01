"use client";

import { motion } from "framer-motion";

export default function HiddenTextButton() {

    return (
        <motion.div
            className="relative px-8 py-4  overflow-hidden w-40 h-12 cursor-pointer"
            whileHover="hovered"
            initial="initial"
            animate="initial"
        >
            {/* 背景 */}
            <motion.div
                className="absolute left-0 w-full h-full bg-pink-300 flex justify-center items-center"
                variants={{
                    initial: { bottom: "-100%" },
                    hovered: { bottom: 0 }
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut"
                }}
            >
                <span className="text-white font-semibold">
                    Hover
                </span>
            </motion.div>
            {/* テキスト */}
            <motion.div
                className="absolute w-full h-full left-0 border border-pink-300 flex justify-center items-center"
                variants={{
                    initial: { top: 0 },
                    hovered: { top: "-100%" }
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut"
                }}
            >
                <span className="text-center">
                    Button
                </span>
            </motion.div>
        </motion.div>
    );
}