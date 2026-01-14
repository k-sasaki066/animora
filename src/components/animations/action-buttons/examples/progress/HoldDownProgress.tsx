"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

// 基準サイズ（px）
const BASE_WIDTH = 350;
const HOLD_DURATION = 1600;

export default function HoldDownProgress() {
    const progress = useMotionValue(0);
    const timeoutRef = useRef<number | null>(null);

    const [isHolding, setIsHolding] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const strokeOffset = useTransform(progress, [0, 1], [52, 0]);

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.3)
        : 1;

    useEffect(() => {
        if (!isSuccess) return;

        const t = setTimeout(reset, 2000);
        return () => clearTimeout(t);
    }, [isSuccess]);

    const startHold = () => {
        if (isSuccess) {
            reset();
            return;
        }

        setIsHolding(true);
        animate(progress, 1, { duration: HOLD_DURATION / 1000, ease: "linear" });

        timeoutRef.current = window.setTimeout(() => {
            setIsSuccess(true);
            setIsHolding(false);
        }, HOLD_DURATION);
    };

    const cancelHold = () => {
        if (isSuccess) return;

        setIsHolding(false);
        progress.stop();
        progress.set(0);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    const reset = () => {
        setIsSuccess(false);
        setIsHolding(false);
        progress.stop();
        progress.set(0);
    };

    return (
        <div ref={ref} className="w-full h-full overflow-hidden flex justify-center items-center">
            <button
                onPointerDown={startHold}
                onPointerUp={cancelHold}
                onPointerLeave={cancelHold}
                className="flex items-center gap-2 rounded-full bg-[#2B3044] px-6 py-3 text-white shadow-lg select-none"
                style={{scale}}
            >
                {/* ICON AREA */}
                <div className="relative h-4 w-4">
                    {/* Arrow Icon */}
                    <motion.svg
                        viewBox="0 0 16 16"
                        className="absolute inset-0"
                        animate={{
                            opacity: isHolding || isSuccess ? 0 : 1,
                            scale: isHolding ? 0.6 : 1,
                            y: isHolding ? -4 : 0,
                        }}
                    >
                        <polygon
                            fill="currentColor"
                            points="1.3,6.7 2.7,8.1 7,3.8 7,16 9,16 9,3.8 13.3,8.1 14.7,6.7 8,0"
                        />
                    </motion.svg>

                    {/* Progress Ring */}
                    {!isSuccess && (
                        <motion.svg
                            viewBox="0 0 32 32"
                            className="absolute inset-0 -rotate-90"
                        >
                            <motion.circle
                                cx="16"
                                cy="16"
                                r="8"
                                fill="none"
                                stroke="white"
                                strokeWidth="16"
                                strokeDasharray="52"
                                style={{ strokeDashoffset: strokeOffset }}
                            />
                        </motion.svg>
                    )}

                    {/* Check */}
                    <motion.svg
                        viewBox="0 0 24 24"
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isSuccess ? 1 : 0 }}
                    >
                        <motion.polyline
                            points="6,12 11,16 18,7"
                            fill="none"
                            stroke="#5C86FF"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray="18"
                            initial={{
                                strokeDashoffset: 18
                            }}
                            animate={{
                                strokeDashoffset: isSuccess ? 0 : 18
                            }}
                            transition={{
                                duration: 0.45,
                                delay: 0.2
                            }}
                        />
                    </motion.svg>
                </div>

                Publish
            </button>
        </div>
    );
}