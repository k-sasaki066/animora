"use client"

import { motion } from "framer-motion";

export default function CubeMetronomeLoader() {

    return (
        <div className="flex items-center justify-center w-12 h-12 relative">
            <motion.div
                className="absolute bg-purple-600 rounded-sm"
                style={{ width: 14, height: 14 }}
                animate={{
                    x: [-8, 0, 8, 0, -8],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}