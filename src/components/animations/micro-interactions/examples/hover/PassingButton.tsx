"use client";

import { motion } from "framer-motion";

export default function PassingButton() {

    return (
        <motion.div
            className="relative px-8 py-4 rounded-sm border border-indigo-500 overflow-hidden w-40 h-12 cursor-pointer"
            whileHover="hover"
            initial="initial"
            animate="initial"
        >
            {/* 背景 */}
            <motion.div
                className="absolute top-0 w-full h-full bg-indigo-400 z-0"
                variants={{
                    initial: { left: "-100%" },
                    hover: { left: "100%" }
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut"
                }}
            />
            {/* テキスト */}
            <span
                className="absolute inset-0 z-10 flex justify-center items-center"
            >
                HOVER
            </span>
        </motion.div>
    );
}