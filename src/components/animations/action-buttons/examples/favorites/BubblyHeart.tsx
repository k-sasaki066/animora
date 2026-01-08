"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HEART_PATH } from "@/assets/svg/heartPath";

export default function BubblyHeart() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        if (isAnimating) return; // ← 連打防止
        setIsActive(prev => !prev);
        setIsAnimating(true);
    }; //アニメーション中は何もしない

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
                {/* バブル */}
                <AnimatePresence>
                    {isActive && (
                        <>
                            {[...Array(25)].map((_, i) => {
                                const size = ["w-1 h-1", "w-1.5 h-1.5", "w-2.5 h-2.5"][
                                Math.floor(Math.random() * 3)
                                ];

                                return (
                                    <motion.span
                                        key={i}
                                        className={`absolute rounded-full bg-pink-400 ${size}`}
                                        style={{
                                            left: "50%",
                                            top: "50%",
                                        }}
                                        initial={{
                                            x: 0,
                                            y: 0,
                                            scale: 0,
                                            opacity: 1,
                                        }}
                                        animate={{
                                            x: (Math.random() - 0.5) * 180,
                                            y: (Math.random() - 0.5) * 180,
                                            scale: 1,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            duration: 0.7,
                                            ease: "easeOut",
                                        }}
                                    />
                                );
                            })}
                        </>
                    )}
                </AnimatePresence>

                {/* ハート */}
                <motion.svg
                    key={isActive ? "active" : "inactive"}
                    className={`w-full h-full  cursor-pointer ${ isAnimating ? "pointer-events-none" : "" }`}
                    viewBox="0 0 24 24"
                    animate={{
                        scale: isActive ? [0, 0, 1.2, 1, 1.1, 0.95, 1] : 0.8,
                        y: isActive ? [0, 0, 0, -25, 5, -3, 0] : 0,
                        fill: isActive ? "red" : "gray",
                    }}
                    transition={{ duration: 1 }}
                    onAnimationComplete={() => {
                        setIsAnimating(false);
                    }}
                >
                    <path d={HEART_PATH} />
                </motion.svg>
            </button>
        </div>
    );
}