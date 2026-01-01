"use client";

import { motion } from "framer-motion";

export default function StopSwipeButton() {

    return (
        <motion.div
            className="relative px-8 py-4 rounded-sm border border-orange-400  overflow-hidden w-40 h-12 cursor-pointer"
            whileHover="hovered"
            initial="initial"
            animate="initial"
        >
            {/* 斜め背景1 */}
            <motion.div
                className="absolute -top-40 h-full bg-orange-400"
                style={{
                    width: "200%",
                    height: "200%",
                    rotate: "45deg",
                    transformOrigin: "left center"
                }}
                variants={{
                    initial: { left: "-150%" },
                    hovered: { left: "-38%" }
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                }}
            />

            {/* テキスト */}
            <motion.span
                className="absolute inset-0 z-10 flex justify-center items-center"
                variants={{
                    initial: { color: "#f97316" },
                    hovered: { color: "#fff" },
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut"
                }}
            >
                HOVER
            </motion.span>
        </motion.div>
    );
}