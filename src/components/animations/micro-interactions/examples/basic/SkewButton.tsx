"use client";

import { motion } from "framer-motion";

export default function SkewButton() {

    return (
        <motion.div
            className="rounded-full bg-pink-300 w-40 h-12 cursor-pointer px-8 py-4"
            animate={{
                skewX: [-20, 20, -20]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    );
}