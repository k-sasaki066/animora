"use client";

import { motion } from "framer-motion";

export default function ColorIntoCenterButton() {

    return (
        <motion.div
            className="relative px-8 py-4 rounded-sm border-2 overflow-hidden w-40 h-12 cursor-pointer"
            whileHover="hovered"
            initial="initial"
            animate="initial"
            variants={{
                initial: {
                    borderColor: "#9f9fa9"
                },
                hovered: {
                    borderColor: "#52525c"
                },
            }}
            transition={{
                duration: 0.2,
                ease: "easeInOut"
            }}
        >
            {/* 背景上 */}
            <motion.div
                className="absolute left-0 w-full h-full bg-zinc-600"
                variants={{
                    initial: { top: "-100%" },
                    hovered: { top: 0 }
                }}
                transition={{
                    duration: 0.2,
                    ease: "easeInOut"
                }}
            />

            {/* 背景右 */}
            <motion.div
                className="absolute top-0 h-full w-full bg-zinc-600"
                variants={{
                    initial: { right: "-100%" },
                    hovered: { right: 0 },
                }}
                transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                }}
            />

            {/* 背景下 */}
            <motion.div
                className="absolute left-0 w-full h-full bg-zinc-600"
                variants={{
                    initial: { bottom: "-100%" },
                    hovered: { bottom: 0 },
                }}
                transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                }}
            />

            {/* 背景左 */}
            <motion.div
                className="absolute top-0 h-full w-full bg-zinc-600"
                variants={{
                    initial: { left: "-100%" },
                    hovered: { left: 0 },
                }}
                transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                }}
            />

            {/* テキスト */}
            <motion.span
                className="absolute inset-0 z-10 flex justify-center items-center"
                variants={{
                    initial: { color: "#52525c" },
                    hovered: { color: "#fff" },
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