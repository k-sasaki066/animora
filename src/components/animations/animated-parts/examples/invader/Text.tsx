"use client"

import { motion } from "framer-motion";

export function Text() {
    const duration = 2;
    const bars = [
        {
            side: "left",
            hit: 0.25,
            vanish: 0.251,
            className: "left-0 origin-left",
        },
        {
            side: "right",
            hit: 0.75,
            vanish: 0.751,
            className: "right-0 origin-right",
        },
    ];

    return (
        <div className="relative flex items-center overflow-hidden">
            {bars.map(({ side, hit, vanish, className }) => (
                <motion.div
                    key={side}
                    className={`absolute top-0 h-full bg-black ${className}`}
                    style={{ width: "50%" }}
                    animate={{
                        scaleX: [1, 1, 0, 0],
                        opacity: [1, 1, 0, 0],
                    }}
                    transition={{
                        duration,
                        times: [0, hit, vanish, 1],
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}

            {/* テキスト */}
            <span className="relative px-2 font-mono font-bold">
                Loading
            </span>
        </div>
    );
}