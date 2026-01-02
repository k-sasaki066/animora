"use client"

import { motion } from "framer-motion";

export default function SlicesLoader() {

    return (
        <motion.div
            className="w-12 h-12 border-20 border-purple-600 rounded-full"
            animate={{
                borderTopColor: [
                    "rgba(128,0,128,0.75)",
                    "rgba(128,0,128,0.25)",
                    "rgba(128,0,128,0.25)",
                    "rgba(128,0,128,0.25)",
                    "rgba(128,0,128,0.75)"
                ],
                borderRightColor: [
                    "rgba(128,0,128,0.25)",
                    "rgba(128,0,128,0.75)",
                    "rgba(128,0,128,0.25)",
                    "rgba(128,0,128,0.25)",
                    "rgba(128,0,128,0.25)"
                ],
                borderBottomColor: [
                    "rgba(128,0,128,0.25)",
                    "rgba(128,0,128,0.25)",
                    "rgba(128,0,128,0.75)",
                    "rgba(128,0,128,0.25)",
                    "rgba(128,0,128,0.25)"
                ],
                borderLeftColor: [
                    "rgba(128,0,128,0.25)",
                    "rgba(128,0,128,0.25)",
                    "rgba(128,0,128,0.25)",
                    "rgba(128,0,128,0.75)",
                    "rgba(128,0,128,0.25)"
                ],
                rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
                repeat: Infinity,
                duration: 1,
                ease: "linear",
            }}
        />
    );
}