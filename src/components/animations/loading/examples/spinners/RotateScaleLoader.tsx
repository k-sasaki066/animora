"use client"

import { motion } from "framer-motion";

export default function RotateScaleLoader() {

    return (
        <motion.div
            className="w-12 h-12 border-4 border-t-purple-600 border-gray-300 rounded-full"
            animate={{
                rotate: 360,
                scale: [1, 1.3, 1]
            }}
            transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "linear"
            }}
        />
    );
}