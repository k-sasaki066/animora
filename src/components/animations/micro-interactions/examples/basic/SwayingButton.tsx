"use client";

import { motion } from "framer-motion";

export default function SwayingButton() {

    return (
        <motion.div
            className="rounded-full bg-indigo-400 w-40 h-12 cursor-pointer px-8 py-4"
            animate={{
                rotate: [0, -2, 0, 2, 0]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    );
}