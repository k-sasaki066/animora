"use client"

import { motion } from "framer-motion";

export default function MarchingDotsLoader() {
    return (
        <div className="relative w-3 aspect-square">
            {/* 水平移動 */}
            <motion.div
                className="absolute inset-0 rounded-full bg-[#77db9a]"
                style={{
                    boxShadow: "-20px 0 0 #77db9a",
                }}
                animate={{
                    x: [0, 20],
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* 飛び越えるドット */}
            <motion.div
                className="absolute inset-0 rounded-full bg-[#77db9a]"
                transformTemplate={({ rotate }) =>
                    `rotate(${rotate}) translateX(20px)`
                }
                animate={{
                    rotate: [0, -180]
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    );
}