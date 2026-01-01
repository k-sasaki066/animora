"use client";

import { motion } from "framer-motion";

export default function SpinButton() {

    return (
        <motion.div
            className="bg-zinc-500 w-40 h-12 cursor-pointer px-8 py-4"
            animate={{
                rotateX: [0, 0, 180,],
                scale: [1, 1, 1],
            }}
            transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
            }}
        />
    );
}