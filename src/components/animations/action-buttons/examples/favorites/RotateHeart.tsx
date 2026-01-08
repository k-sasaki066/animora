"use client";

import { motion, cubicBezier } from "framer-motion";
import { useState } from "react";
import { HEART_PATH } from "@/assets/svg/heartPath";

export default function RotateHeart() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        if (isAnimating) return;
        setIsActive(prev => !prev);
        setIsAnimating(true);
    };

    const easeInQuart = cubicBezier(0.5, 0, 0.75, 0);
    const easeOutQuart = cubicBezier(0.25, 1, 0.5, 1);

    return (
        <button
            type="button"
            aria-pressed={isActive}
            onClick={handleClick}
            disabled={isAnimating}
            className="relative w-16.5 h-16.5 flex items-center justify-center"
        >
            <span className="sr-only">Like</span>

            <motion.svg
                key={isActive ? "active" : "inactive"}
                viewBox="0 0 24 24"
                className={`w-full h-full cursor-pointer ${ isAnimating ? "pointer-events-none" : "" }`}
                initial={{ scale: 1 }}
                animate={
                isActive
                    ? { scale: [1, 0.6, 1.4, 1],rotateY: 360 }
                    : { scale: 1 }
                }
                transition={
                isActive
                    ? {
                        duration: 0.5,
                        times: [0, 0.3, 0.5, 1],
                        ease: [easeInQuart, easeOutQuart, easeInQuart],
                    }
                    : { duration: 0 }
                }
                onAnimationComplete={() => {
                    setIsAnimating(false);
                }}
            >
                <motion.path
                    d={HEART_PATH}
                    fill={isActive ? "#ffafbd" : "#ebedee"}
                    transition={{ duration: 0.2 }}
                />
            </motion.svg>
        </button>
    );
}