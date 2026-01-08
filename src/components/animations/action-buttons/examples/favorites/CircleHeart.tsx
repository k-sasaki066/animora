"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HEART_PATH } from "@/assets/svg/heartPath";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 350;

// 基準サイズ（px）
const HEART_SIZE = 72;
const CIRCLE_SIZE = 100;
const CIRCLE_BORDER = 5;

export default function CircleHeart() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.3)
        : 1;

    const handleClick = () => {
        if (isAnimating) return;
        setIsActive(prev => !prev);
        setIsAnimating(true);
    };

    return (
        <div ref={ref} className="w-full h-full overflow-hidden flex justify-center items-center">
            <button
                type="button"
                aria-pressed={isActive}
                onClick={handleClick}
                disabled={isAnimating}
                className="relative"
                style={{
                    width: HEART_SIZE * scale,
                    height: HEART_SIZE * scale,
                }}
            >
                <span className="sr-only">Like</span>

                {/* 円エフェクト */}
                <AnimatePresence>
                    {isActive && (
                        <motion.span
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full border-pink-300"
                            style={{
                                width: CIRCLE_SIZE * scale,
                                height: CIRCLE_SIZE * scale,
                                borderWidth: CIRCLE_BORDER * scale,
                            }}
                            initial={{
                                scale: 0.2,
                                opacity: 0
                            }}
                            animate={{
                                scale: [ 0.2, 0.5, 1, 1.3 ],
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
        </div>
    );
}