"use client";

import { motion } from "framer-motion";

export default function SparklingButton() {

    return (
        <motion.div
            className="w-40 h-12 cursor-pointer px-8 py-4 overflow-hidden bg-amber-400 relative rounded-full"
        >
            <motion.div
                className="absolute top-0 left-18 w-50 h-full bg-white rounded-full"
                animate={{
                    scale: [0, 0, 0, 8],
                    rotate: [45, 45, 45, 45],
                    opacity: [0, 0.5, 1, 0],
                }}
                transition={{
                    duration: 3,
                    ease: "easeInOut", repeat: Infinity
                }}
            />
        </motion.div>
    );
}