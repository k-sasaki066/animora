"use client"

import { motion } from "framer-motion";

export default function CloudLoader() {

    return (
        <motion.div
            className="
                relative w-15 h-7 bg-purple-400 rounded-full
                before:content-[''] before:absolute before:w-8 before:h-8
                before:bg-purple-400 before:rounded-full before:left-0 before:-top-1
                after:content-[''] after:absolute after:w-7 after:h-7
                after:bg-purple-400 after:rounded-full after:left-5 after:-top-2.5
            "
            animate={{
                scale: [1, 1.06, 1],
                y: [0, -2, 0],
            }}
            transition={{
                repeat: Infinity,
                duration: 2.2,
                ease: "easeInOut",
            }}
        >
            <div className="absolute w-6 h-6 bg-purple-400 rounded-full left-4 -bottom-1.5" />
        </motion.div>
    );
}