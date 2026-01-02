"use client"

import { motion } from "framer-motion";

export default function ClockLoader() {
    const size = 56;
    const handHeight = size * 0.35;
    const thickness = 2;

    return (
        <div
            className="relative rounded-full bg-purple-600"
            style={{
                width: size,
                height: size,
                border: `2px solid #eee`,
                borderRadius: "50%",
            }}
        >
            {/* 時計の針 */}
            <motion.div
                className="absolute w-0.5 left-1/2 top-1.5 -translate-x-1/2 bg-[#eee]"
                style={{
                    height: handHeight,
                    transformOrigin: "50% 100%",
                }}
                animate={{
                    rotate: [0, 360]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "linear"
                }}
            />
        </div>
    );
}