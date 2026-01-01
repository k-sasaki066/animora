"use client";

import { motion } from "framer-motion";

export default function JigglyButton() {

    return (
        <motion.div
            className="
                rounded-full
                bg-linear-to-r from-yellow-500 via-red-500 to-pink-500
                w-38 h-12
                cursor-pointer
            "
            animate={{
                scaleX: [1, 1.15, 0.9, 1.05, 1],
                scaleY: [1, 0.85, 1.2, 0.95, 1],
            }}
            transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
}