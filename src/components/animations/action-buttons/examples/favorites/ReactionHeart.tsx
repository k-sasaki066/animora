import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HEART_PATH } from "@/assets/svg/heartPath";
import { useContainerSize } from "@/hooks/useContainerSize";

// 基準サイズ（px）
const BASE_WIDTH = 350;
const HEART_SIZE = 50;
const BROKEN_HEART_SIZE = 48;
const HAPPY_Y = 110;
const BROKEN_X = 50;
const BROKEN_Y = 110;

type HeartState = "idle" | "happy" | "broken";

export default function ReactionHeart() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [state, setState] = useState<HeartState>("idle");

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1.3)
        : 1;

    const handleClick = () => {
        if (isAnimating) return; // ← 連打防止

        setIsAnimating(true);
        setState((prev) =>
            prev === "happy" ? "broken" : "happy"
        );
    };

    return (
        <div ref={ref} className="flex justify-center items-end w-full h-full">
            <motion.button
                type="button"
                aria-pressed={state === "happy"}
                onClick={handleClick}
                disabled={isAnimating}
                className="relative"
                style={{
                    width: HEART_SIZE,
                    height: HEART_SIZE,
                    transformOrigin: "center",
                }}
                animate={{ scale }}
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
                                y: [
                                    -HAPPY_Y * 0.7,
                                    -HAPPY_Y * 0.85,
                                    -HAPPY_Y,
                                ],
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
                                className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2"
                                style={{
                                    width: BROKEN_HEART_SIZE,
                                    height: BROKEN_HEART_SIZE ,
                                    clipPath: isLeft
                                        ? "inset(0 50% 0 0)"
                                        : "inset(0 0 0 50%)",
                                }}
                                initial={{
                                    opacity: 1,
                                    x: 0,
                                    y: 0,
                                    rotate: 0,
                                    scale: 3,
                                }}
                                animate={{
                                    opacity: [1, 0.5, 0],
                                    x: [
                                        0,
                                        (isLeft ? -1 : 1) * BROKEN_X,
                                        (isLeft ? -1 : 1) * BROKEN_X,
                                    ],
                                    y: [
                                        -BROKEN_Y,
                                        -BROKEN_Y,
                                        -BROKEN_Y * 0.45,
                                    ],
                                    rotate: [
                                        0,
                                        (isLeft ? -25 : 25),
                                        (isLeft ? -30 : 30),
                                    ],
                                }}
                                transition={{ duration: 1 }}
                            >
                                <path d={HEART_PATH} fill="#d1d5db" />
                            </motion.svg>
                        );
                    })}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}