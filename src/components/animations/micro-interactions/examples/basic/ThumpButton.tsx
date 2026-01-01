"use client";

import { motion } from "framer-motion";

export default function ThumpButton() {

    return (
        <motion.div
            className="rounded-full bg-fuchsia-400 w-40 h-12 cursor-pointer px-8 py-4"
            animate={{
                scale: [1, 1.1, 1, 1, 1.1, 1]
            }}
            transition={{
                duration: 1.3,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
        </motion.div>
    );
}