"use client";

import { motion } from "framer-motion";

export default function CircleOutButton() {

    return (
        <motion.div
            className="relative px-8 py-4 rounded-sm border border-gray-300  overflow-hidden w-40 h-12 cursor-pointer"
            whileHover="hover"
            initial="initial"
            animate="initial"
        >
            {/* 円エフェクト */}
            <motion.div
                className="absolute bg-gray-400 rounded-full w-5 h-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                variants={{
                    initial: {
                        scale: 0,
                        opacity: 0
                    },
                    hover: {
                        scale: 10,
                        opacity: 1
                    },
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeOut",
                }}
            />

            {/* テキスト */}
            <motion.span
                className="absolute inset-0 z-10 flex justify-center items-center"
                variants={{
                    initial: { color: "#4a5565" },
                    hover: { color: "#fff" },
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
            >
                HOVER
            </motion.span>
        </motion.div>
    );
}