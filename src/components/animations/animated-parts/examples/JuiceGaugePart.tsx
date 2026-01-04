"use client"

import { motion } from "framer-motion";

export default function JuiceGaugePart() {

    return (
        <div className="relative w-8 h-16">
            {/* 容器 */}
            <div className="absolute inset-0 rounded-sm bg-[#e4e0d7] overflow-hidden border-t border-[#bbb6aa] border-b-4" />

            {/* 液体 */}
            <motion.div
                className="absolute bottom-1 left-1 right-1 bg-[#612329] z-10"
                style={{
                    height: "85%", transformOrigin: "bottom"
                }}
                animate={{
                    scaleY: [1, 0.05],
                }}
                transition={{
                    duration: 2.2,
                    repeatDelay: 0.5,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* 注ぎ口 */}
            <div className="absolute -top-4.5 left-1/2 -translate-x-1/2 w-1 h-[calc(100%+14px)] bg-[#eb6b3e] origin-bottom rotate-[8deg]"
            />
        </div>
    );
}