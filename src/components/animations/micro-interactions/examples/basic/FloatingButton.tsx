"use client";

import { motion } from "framer-motion";

export default function FloatingButton() {

    return (
        <motion.div
            className="rounded-full bg-rose-400 w-40 h-12 cursor-pointer px-8 py-4"
            animate={{
                y: [0, -10, 0]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
            }}
            >
        </motion.div>
    );
}