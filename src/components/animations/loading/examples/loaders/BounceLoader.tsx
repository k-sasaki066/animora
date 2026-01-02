"use client"

import { motion } from "framer-motion";

export default function BounceLoader() {

    return (
        <motion.div
            className="w-12 h-12 text-purple-600 bg-purple-600 rounded-full"
            animate={{
                y: [0, -10, 0]
            }}
            transition={{
                repeat: Infinity,
                duration: 1.5
            }}
        />
    );
}