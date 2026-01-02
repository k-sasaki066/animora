"use client"

import { motion } from "framer-motion";

export default function FadeLoader() {

    return (
        <motion.div
            className="w-12 h-12 bg-purple-600 rounded-full"
            animate={{
                opacity: [0, 1, 0]
            }}
            transition={{
                repeat: Infinity,
                duration: 1
            }}
        />
    );
}