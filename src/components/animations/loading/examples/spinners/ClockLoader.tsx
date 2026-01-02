"use client"

import { motion } from "framer-motion";

export default function ClockLoader() {
    const size = 56;
    const handHeight = size / 2 - 2;
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
                style={{
                    width: 2,
                    height: handHeight,
                    backgroundColor: "#eee",
                    position: "absolute",
                    top: 2,
                    left: `calc(50% - ${thickness / 2}px)`,
                    transformOrigin: `50% ${handHeight}px`,
                }}
                animate={{
                    rotate: [0, 360]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear"
                }}
            />
        </div>
    );
}