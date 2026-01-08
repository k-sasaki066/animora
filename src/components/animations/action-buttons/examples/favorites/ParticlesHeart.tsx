"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HEART_PATH } from "@/assets/svg/heartPath";

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
    const [isAnimating, setIsAnimating] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        if (isAnimating) return; // ← 連打防止
        setIsActive(prev => !prev);
        setIsAnimating(true);
    }; //アニメーション中は何もしない

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
        <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
            <button
                type="button"
                aria-pressed={isActive}
                onClick={handleClick}
                disabled={isAnimating}
                className="relative w-20 h-20"
            >
                <span className="sr-only">Like</span>

                <motion.svg
                    key={isActive ? "active" : "inactive"}
                    className={`w-full h-full cursor-pointer ${ isAnimating ? "pointer-events-none" : "" }`}
                    viewBox="0 0 24 24"
                    animate={{
                        scale: isActive
                            ? [0, 0, 1.2, 1, 1.1, 0.95, 1]
                            : 0.8,
                        y: isActive
                            ? [0, 0, 0, -25, 5, -3, 0]
                            : 0,
                        fill: isActive ? "red" : "gray",
                    }}
                    transition={{ duration: 1 }}
                    onAnimationComplete={() => {
                        setIsAnimating(false);
                    }}
                >
                    <path d={HEART_PATH} />
                </motion.svg>

                <AnimatePresence>
                    {isActive &&
                    particles.map((p, i) => (
                        <motion.div
                        key={i}
                        className="absolute w-3 h-3 rounded-full"
                        style={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            backgroundColor: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
                        }}
                        initial={{ x: 0, y: 0, opacity: 0 }}
                        animate={{
                            x: [0, p.x1],
                            y: [0, p.y1, p.y1 - 20],
                            opacity: [0, 1, 0],
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                    ))}
                </AnimatePresence>
            </button>
        </div>
    );
}