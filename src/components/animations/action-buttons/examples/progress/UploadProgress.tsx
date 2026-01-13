"use client";

import { motion, Transition } from "framer-motion";
import { useEffect, useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

// 基準サイズ（px）
const BASE_WIDTH = 350;

const shapeTransition: Transition = {
    type: "spring",
    stiffness: 280,
    damping: 20,
};

const getProgressBg = (progress: number) => {
    return `linear-gradient(
        to top,
        #2f8aff ${progress}%,
        #085dc9 ${progress}%
    )`;
};

type Phase = "idle" | "loading" | "complete" | "success" | "resetting";

export default function UploadProgress() {
    const [phase, setPhase] = useState<Phase>("idle");
    const [progress, setProgress] = useState<number>(0);
    const [bounce, setBounce] = useState(false);

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.3)
        : 1;

    /* Upload simulation */
    useEffect(() => {
        if (phase !== "loading") return;

        let p = 0;
        let intervalId: NodeJS.Timeout | null = null;

        const timeoutId = setTimeout(() => {
            intervalId = setInterval(() => {
                p += 1;
                setProgress(p);

                if (p >= 100) {
                    if (intervalId) clearInterval(intervalId);
                    setBounce(true);
                    setTimeout(() => {
                        setBounce(false);
                        setPhase("complete");
                    }, 300);
                }
            }, 20);
        }, 400);

        return () => {
            clearTimeout(timeoutId);
            if (intervalId) clearInterval(intervalId);
        };
    }, [phase]);

    /* Phase chaining */
    useEffect(() => {
        if (phase !== "complete") return;

        const t = setTimeout(() => {
            setPhase("success");
        }, 800);

        return () => clearTimeout(t);
    }, [phase]);

    const reset = () => {
        setPhase("resetting");

        setTimeout(() => {
            setProgress(0);
            setPhase("idle");
        }, 600);
    };

    /* Derived flags */
    const isCircle = phase === "loading" || phase === "complete";
    const isDisabled = phase !== "idle";

    const effectScale =
    bounce
        ? [1, 1.12, 0.96, 1.04, 1]
        : phase === "success"
        ? [1, 1.15, 0.9, 1.05, 1]
        : 1;

    return (
        <div ref={ref} className="w-full h-full overflow-hidden flex justify-center items-center">
            <motion.button
                className={`relative font-bold text-white outline-none ${
                    isDisabled ? "pointer-events-none" : "" }`}
                onClick={() => {
                    if (phase !== "idle") return;
                    setProgress(0);
                    setPhase("loading");
                }}
                style={{
                    background:
                        phase === "loading" || phase === "complete"
                            ? getProgressBg(progress)
                            : phase === "success"
                            ? "#52b500"
                            : "#2f8aff",
                }}
                animate={{
                    width: isCircle ? 100 : 140,
                    height: isCircle ? 100 : 60,
                    borderRadius: isCircle ? "50%" : "20% / 50%",
                    backgroundColor:
                        phase === "success"
                            ? "#52b500"
                            : isCircle
                            ? "#085dc9"
                            : "#2f8aff",
                    scale: Array.isArray(effectScale)
                        ? effectScale.map(v => v * scale)
                        : effectScale * scale,
                }}
                transition={{
                    width: { ...shapeTransition, delay: 0.1 },
                    height: { ...shapeTransition, delay: 0.1 },
                    borderRadius: shapeTransition,
                    backgroundColor: { duration: 0.25 },
                    scale: bounce
                        ? { duration: 0.45, ease: "easeOut" }
                        : {
                            duration: 0.8,
                            ease: [0.7, -0.55, 0.3, 1.55],
                        },
                }}
            >
                {/* Text / Progress */}
                {(phase === "idle" ||
                    phase === "loading" ||
                    phase === "complete") && (
                    <motion.div className="flex flex-col items-center justify-center leading-none select-none">
                        <motion.span
                            animate={{
                                fontSize:
                                    phase === "idle" ? "1.2rem" : "0.75rem",
                                opacity: phase === "idle" ? 1 : 0.9,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            Upload
                        </motion.span>

                        {(phase === "loading" || phase === "complete") && (
                            <motion.span
                                className="text-2xl font-bold"
                                key={progress}
                            >
                                {progress}%
                            </motion.span>
                        )}
                    </motion.div>
                )}

                {/* Check mark */}
                {phase === "success" && (
                    <motion.svg
                        width="52"
                        height="40"
                        viewBox="0 0 52 40"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                        <motion.path
                            d="M4 22 L20 36 L48 4"
                            fill="none"
                            stroke="white"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{
                                pathLength: 0,
                                opacity: 0
                            }}
                            animate={{
                                pathLength: 1,
                                opacity: 1
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.5,
                                ease: "easeInOut",
                            }}
                            onAnimationComplete={() => {
                                setTimeout(() => {
                                    reset();
                                }, 700);
                            }}
                        />
                    </motion.svg>
                )}
            </motion.button>
        </div>
    );
}