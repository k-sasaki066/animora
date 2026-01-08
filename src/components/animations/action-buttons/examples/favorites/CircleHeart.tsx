"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HEART_PATH } from "@/assets/svg/heartPath";

export default function CircleHeart() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        if (isAnimating) return;
        setIsActive(prev => !prev);
        setIsAnimating(true);
    };

    return (
        <button
            type="button"
            aria-pressed={isActive}
            onClick={handleClick}
            disabled={isAnimating}
            className="relative w-18 h-18 flex items-center justify-center"
        >
            <span className="sr-only">Like</span>

            {/* 円エフェクト */}
            <AnimatePresence>
                {isActive && (
                    <motion.span
                        className="absolute w-30 h-30 rounded-full border-[5px] border-pink-300"
                        initial={{
                            scale: 0.2,
                            opacity: 0
                        }}
                        animate={{
                            scale: [0.2, 0.5, 1, 1.3],
                            opacity: [0, 0.8, 0],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    />
                )}
            </AnimatePresence>

            {/* ハート */}
            <motion.svg
                key={isActive ? "active" : "inactive"}
                viewBox="0 0 24 24"
                className={`w-full h-full cursor-pointer z-10 ${ isAnimating ? "pointer-events-none" : "" }`}
                animate={{
                    fill: isActive ? "#FA9797" : "#e2ebf0",
                    scale: isActive ? [1, 0.5, 1] : 1,
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut"
                }}
                onAnimationComplete={() => {
                    setIsAnimating(false);
                }}
            >
                <path d={HEART_PATH} />
            </motion.svg>
        </button>
    );
}