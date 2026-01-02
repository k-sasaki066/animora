"use client"

import { motion } from "framer-motion";

const colors = [
    "bg-cyan-300/50",
    "bg-sky-300/50",
    "bg-blue-500/50",
];

export default function WaveDotsLoader() {
    return (
        <div className="flex items-center justify-center">
            {colors.map((color, i) => (
                <div
                    key={i}
                    className={`relative w-3 h-3 m-2 rounded-full ${color}`}
                >
                    {/* 波紋 */}
                    <motion.span
                        className={`absolute inset-0 rounded-full ${color}`}
                        animate={{
                            scale: [1, 2.5, 2.5],
                            opacity: [1, 1, 0],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeOut",
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                </div>
            ))}
        </div>
    );
}