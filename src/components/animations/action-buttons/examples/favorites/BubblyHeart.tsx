import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HEART_PATH } from "@/assets/svg/heartPath";
import { useContainerSize } from "@/hooks/useContainerSize";

// 基準サイズ（px）
const BASE_WIDTH = 350;
const HEART_SIZE = 72;
const DISTANCE = 180;

export default function BubblyHeart() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.3)
        : 1;

    const handleClick = () => {
        if (isAnimating) return; // 連打防止
        setIsActive(prev => !prev);
        setIsAnimating(true);
    };

    return (
        <div ref={ref} className="relative w-full h-full overflow-hidden flex justify-center items-center">
            <motion.button
                type="button"
                aria-pressed={isActive}
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
                {/* バブル */}
                <AnimatePresence>
                    {isActive && (
                        <>
                            {[...Array(25)].map((_, i) => {
                                const size = [4, 6, 10][Math.floor(Math.random() * 3)];
                                const distance = DISTANCE * scale; //演出量のみscale

                                return (
                                    <motion.span
                                        key={i}
                                        className={`absolute rounded-full bg-pink-400 ${size}`}
                                        style={{
                                            width: size,
                                            height: size,
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
                                            x: (Math.random() - 0.5) * distance,
                                            y: (Math.random() - 0.5) * distance,
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
                        scale: isActive
                            ? [ 0, 0, 1.2, 1, 1.1, 0.95, 1 ] : 0.8,
                        y: isActive
                            ? [ 0, 0, 0, -25, 5, -3, 0 ] : 0,
                        fill: isActive ? "#ef4444" : "#9ca3af",
                    }}
                    transition={{ duration: 1 }}
                    onAnimationComplete={() => {
                        setIsAnimating(false);
                    }}
                >
                    <path d={HEART_PATH} />
                </motion.svg>
            </motion.button>
        </div>
    );
}