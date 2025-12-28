"use client"

import { motion } from "framer-motion";

export default function DashedBorderImage() {
    return (
        <motion.div
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            <img src="/sea.jpg"
                className="w-full h-full object-cover"
            />

            <motion.svg
            className="absolute inset-0 pointer-events-none w-full h-full"
            >
                <motion.rect
                    x="2"
                    y="2"
                    width="calc(100% - 4px)"
                    height="calc(100% - 4px)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeDasharray="8 6"
                    variants={{
                        rest: {
                            strokeDashoffset: 0,
                            opacity: 0,
                        },
                        hover: {
                            strokeDashoffset: -180,
                            opacity: 1,
                        },
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                />
            </motion.svg>
        </motion.div>
    );
}