"use client";

import { motion, AnimatePresence, Transition } from "framer-motion";
import { useState } from "react";
import { HEART_PATH } from "@/assets/svg/heartPath";
import { bubbles } from "./bubbles";
import { useContainerSize } from "@/hooks/useContainerSize";

// 基準サイズ（px）
const BASE_WIDTH = 350;
const HEART_SIZE = 72;
const CIRCLE_SIZE = 24;
const BASE_BORDER = 5;
const DONUT_EXPAND = 40;

export default function BurstCircleHeart() {
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

    const bubbleTransition: Transition = {
        duration: 1,
        times: [0, 0.5, 0.75, 0.85, 0.9, 1],
        ease: "easeInOut",
    };

    return (
        <div ref={ref} className="w-full h-full overflow-hidden flex justify-center items-center">
            <motion.button
                type="button"
                aria-pressed={isActive}
                onClick={handleClick}
                disabled={isAnimating}
                className="relative isolate"
                style={{
                    width: HEART_SIZE,
                    height: HEART_SIZE,
                    transformOrigin: "center",
                }}
                animate={{ scale }}
            >
                <span className="sr-only">Like</span>

                {/* HEART */}
                <motion.svg
                    key={isActive ? "active" : "inactive"}
                    viewBox="0 0 24 24"
                    className={`relative z-10 w-full h-full cursor-pointer ${ isAnimating ? "pointer-events-none" : "" }`}
                    animate={
                        isActive
                        ? {
                            scale: [1, 1, 0, 0, 1],
                            }
                        : { scale: 1 }
                    }
                    transition={{
                        duration: 1,
                        times: [0, 0.4, 0.6, 0.75, 1],
                        ease: "easeInOut"
                    }}
                    onAnimationComplete={() => {
                        setIsAnimating(false);
                    }}
                >
                    <path
                        d={HEART_PATH}
                        fill={isActive ? "#dc2626" : "#e2ebf0"}
                    />
                </motion.svg>

                {/* DONUT */}
                <motion.div
                    className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10"
                    animate={
                        isActive
                        ? { scale: [1, 1.5, 1, 1], opacity: 1 }
                        : { scale: 1, opacity: 0 }
                    }
                    transition={{
                        duration: 1,
                        times: [0, 0.5, 0.75, 1],
                        ease: "easeInOut",
                    }}
                >
                    <motion.div
                        className="rounded-full border-pink-300"
                        animate={
                        isActive
                            ? {
                                borderWidth: [
                                    BASE_BORDER,
                                    DONUT_EXPAND,
                                    BASE_BORDER,
                                    BASE_BORDER,
                                ]
                            }
                            : { borderWidth: BASE_BORDER }
                        }
                        transition={{
                            duration: 1,
                            times: [0, 0.5, 0.75, 1],
                            ease: "easeInOut",
                        }}
                        style={{
                            width: CIRCLE_SIZE,
                            height: CIRCLE_SIZE,
                            borderStyle: "solid",
                        }}
                    />
                </motion.div>

                {/* BUBBLES */}
                <AnimatePresence>
                    {isActive &&
                        bubbles.map((bubble, i) => (
                        <motion.span
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-red-600 rounded-full"
                            initial={{ opacity: 0 }}
                            animate={bubble}
                            transition={bubbleTransition}
                        />
                    ))}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}