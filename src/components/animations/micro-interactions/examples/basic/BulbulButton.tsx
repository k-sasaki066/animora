"use client";

import { motion } from "framer-motion";

export default function BulbulButton() {

    return (
        <motion.div
            className="text-white rounded-full bg-lime-500 w-40 h-12 cursor-pointer px-8 py-4"
            animate={{
                x: [0, 0, -6, 8, -2, 8, 0],
            }}
            transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear",
            }}
        >
        </motion.div>
    );
}