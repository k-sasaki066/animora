import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HEART_PATH } from "@/assets/svg/heartPath";
import { useContainerSize } from "@/hooks/useContainerSize";

// 基準サイズ（px）
const BASE_WIDTH = 350;
const HEART_SIZE = 72;
const PARTICLE_SIZE = 10;

const PARTICLE_COUNT = 14;
const BASE_RADIUS = 100; // ハート周りの半径
const ANGLE_JITTER = 0.08 * Math.PI * 2;
const BASE_RADIUS_JITTER = 15;

const PARTICLE_COLORS = [
    "#8ceac4",
    "#b2e7c7",
    "#a4c9fb",
    "#d093f6",
    "#e0a0bd",
    "#dc94d2",
    "#90d2fc",
];

export default function ParticlesHeart() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.3)
        : 1;

    const spreadScale = scale;

    const finalRadius = BASE_RADIUS * spreadScale;
    const radiusJitter = BASE_RADIUS_JITTER * spreadScale;

    const handleClick = () => {
        if (isAnimating) return; // 連打防止
        setIsActive(prev => !prev);
        setIsAnimating(true);
    };

    // パーティクルの座標を計算
    const particles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
        const angleSeed = (i * 137) % 360;
        const radiusSeed = (i * 161) % 100;

        const angleOffset = ((angleSeed / 360) - 0.5) * 2 * ANGLE_JITTER;
        const radiusOffset = ((radiusSeed / 100) - 0.5) * 2 * radiusJitter;

        const angle = (i / PARTICLE_COUNT) * 2 * Math.PI + angleOffset;
        const finalR = finalRadius + radiusOffset;

        return {
            x1: finalR * Math.cos(angle),
            y1: finalR * Math.sin(angle),
        };
    });

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

                <motion.svg
                    key={isActive ? "active" : "inactive"}
                    className={`w-full h-full cursor-pointer ${ isAnimating ? "pointer-events-none" : "" }`}
                    viewBox="0 0 24 24"
                    animate={{
                        scale: isActive
                            ? [0, 0, 1.2, 1, 1.1, 0.95, 1]
                            : 0.8,
                        y: isActive
                            ? [0, 0, 0, -25, 5, -3, 0]
                            : 0,
                        fill: isActive ? "red" : "gray",
                    }}
                    transition={{ duration: 1 }}
                    onAnimationComplete={() => {
                        setIsAnimating(false);
                    }}
                >
                    <path d={HEART_PATH} />
                </motion.svg>

                {/* パーティクル */}
                <AnimatePresence>
                    {isActive &&
                    particles.map((p, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                width: PARTICLE_SIZE,
                                height: PARTICLE_SIZE,
                                backgroundColor: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
                            }}
                            initial={{
                                x: 0,
                                y: 0,
                                opacity: 0
                            }}
                            animate={{
                                x: [0, p.x1],
                                y: [0, p.y1, p.y1 - 20 * spreadScale],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 0.6, ease: "easeOut"
                            }}
                        />
                    ))}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}