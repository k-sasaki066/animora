"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HEART_PATH } from "@/assets/svg/heartPath";

type HeartState = "idle" | "happy" | "broken";

export default function ReactionHeart() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [state, setState] = useState<HeartState>("idle");

    const handleClick = () => {
        if (isAnimating) return; // ← 連打防止

        setIsAnimating(true);
        setState((prev) =>
            prev === "happy" ? "broken" : "happy"
        );
    };

    return (
        <div className="flex justify-center items-center w-full h-full">
            <button
                type="button"
                aria-pressed={state === "happy"}
                onClick={handleClick}
                disabled={isAnimating}
                className="relative w-16 h-16"
            >
                <span className="sr-only">Like</span>

                {/* メインハート */}
                <motion.svg
                    key={state}
                    viewBox="0 0 24 24"
                    className={`w-full h-full cursor-pointer ${ isAnimating ? "pointer-events-none" : "" }`}
                    whileHover={{ scale: 1.1 }}
                    animate={{
                        scale: state === "happy" ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    onAnimationComplete={() => {
                        setIsAnimating(false);
                    }}
                >
                    <motion.path
                        d={HEART_PATH}
                        fill={state === "happy" ? "#b91c1c" : "#9ca3af"}
                    />
                </motion.svg>

                {/* HAPPY */}
                <AnimatePresence>
                    {state === "happy" && (
                        <motion.svg
                            viewBox="0 0 24 24"
                            className="absolute inset-0 w-full h-full"
                            initial={{
                                opacity: 0,
                                y: -60,
                                rotate: 15,
                                scale: 1
                            }}
                            animate={{
                                opacity: [0, 0.8, 0],
                                y: [-80, -90, -110],
                                rotate: [15, -15, 15],
                                scale: [1, 2, 2],
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <path d={HEART_PATH} fill="#da4453" />
                        </motion.svg>
                    )}
                </AnimatePresence>

                {/* BROKEN */}
                <AnimatePresence>
                {state === "broken" &&
                    ["left", "right"].map((direction) => {
                        const isLeft = direction === "left";

                        return (
                            <motion.svg
                                key={direction}
                                viewBox="0 0 24 24"
                                className="absolute left-1/2 top-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2"
                                initial={{
                                    opacity: 1,
                                    x: 0,
                                    y: 0,
                                    rotate: 0,
                                    scale: 3,
                                }}
                                animate={{
                                    opacity: [1, 0.5, 0],
                                    x: [0, isLeft ? -50 : 50, isLeft ? -50 : 50],
                                    y: [-110, -110, -50],
                                    rotate: [0, isLeft ? -25 : 25, isLeft ? -30 : 30],
                                }}
                                transition={{ duration: 1 }}
                                style={{
                                    clipPath: isLeft
                                    ? "inset(0 50% 0 0)"
                                    : "inset(0 0 0 50%)",
                                }}
                            >
                                <path d={HEART_PATH} fill="#d1d5db" />
                            </motion.svg>
                        );
                    })}
                </AnimatePresence>
            </button>
        </div>
    );
}