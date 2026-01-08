"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PARTICLE_COUNT = 14;
const FINAL_RADIUS = 100; // ハート周りの半径
const ANGLE_JITTER = 0.08 * Math.PI * 2;
const RADIUS_JITTER = 15;
const PARTICLE_COLORS = [
    "#8ceac4",
    "#b2e7c7",
    "#a4c9fb",
    "#d093f6",
    "#e0a0bd",
    "#dc94d2",
    "#90d2fc",
];

export default function ParticlesHeart() {

    const [clicked, setClicked] = useState(false);

    // パーティクルの座標を計算
    const particles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
        const angleSeed = (i * 137) % 360;
        const radiusSeed = (i * 161) % 100;

        const angleOffset = ((angleSeed / 360) - 0.5) * 2 * ANGLE_JITTER;
        const radiusOffset = ((radiusSeed / 100) - 0.5) * 2 * RADIUS_JITTER;

        const angle = (i / PARTICLE_COUNT) * 2 * Math.PI + angleOffset;
        const finalR = FINAL_RADIUS + radiusOffset;

        return {
            x1: finalR * Math.cos(angle),
            y1: finalR * Math.sin(angle),
        };
    });

    return (
        <div className="relative w-full aspect-video overflow-hidden flex justify-center items-center">
            {/* ハート */}
            <motion.svg
                className="absolute w-20 h-20 cursor-pointer"
                viewBox="0 0 24 24"
                animate={{
                    scale: clicked ? [0, 0, 1.2, 1, 1.1, 0.95, 1] : 0.8,
                    y: clicked ? [0, 0, 0, -25, 5, -3, 0] : 0,
                    fill: clicked ? "red" : "gray",
                }}
                transition={{ duration: 1 }}
                onClick={() => setClicked(!clicked)}
            >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </motion.svg>

            {/* パーティクル */}
            <AnimatePresence>
            {clicked &&
                particles.map((p, i) => {
                    const color = PARTICLE_COLORS[i % PARTICLE_COLORS.length];

                    return (
                        <motion.div
                            key={i}
                            className="absolute w-3 h-3 rounded-full"
                            style={{
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                backgroundColor: color
                            }}
                            initial={{
                                x: 0,
                                y: 0,
                                opacity: 0
                            }}
                            animate={{
                                x: [0, p.x1],
                                y: [0, p.y1, p.y1 - 20],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                times: [0, 0.6, 1],
                            }}
                        />
                    );
                })}
            </AnimatePresence>
        </div>
    );
}