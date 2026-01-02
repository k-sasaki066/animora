"use client"

import { motion } from "framer-motion";

export default function BouncyLoader() {

    return (
        <div className="flex justify-between items-end w-12 h-6 relative">
            {[0, 0.36, 0.2].map((delay, i) => (
                <motion.div
                    key={i}
                    className="w-3 h-3"
                    style={{
                        borderRadius: "25%", backgroundColor: "#9333ea"
                    }}
                    animate={{
                        y: [0, 0, -20, 0],
                        scaleY: [1, 1, 0.6, 1.15, 1],
                        scaleX: [1, 1, 1.3, 0.9, 1],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.75,
                        ease: "easeInOut",
                        delay: -1.75 * delay,
                    }}
                />
            ))}
        </div>
    );
}