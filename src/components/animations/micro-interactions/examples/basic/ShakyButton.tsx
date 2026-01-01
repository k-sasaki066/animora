"use client";

import { motion } from "framer-motion";

export default function ShakyButton() {

    return (
        <motion.div
            className="rounded-full bg-sky-400 w-40 h-12 cursor-pointer px-8 py-4"
            animate={{
                y: [0, 2, 2, 2, 0],
                rotate: [0, 1, 0, -1, 0]
            }}
            transition={{
                duration: 0.1,
                repeat: Infinity,
                ease: "linear"
            }}
        >
        </motion.div>
    );
}