import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function WeaveCircleLoader({
    paused = false,
    speed = 3,
    size = 120,
}: LoaderProps) {
    const textSize = Math.min(size / 6, 24);

    const circles = [
        { color: "bg-blue-400", opacity: 0.4, duration: speed },
        { color: "bg-yellow-400", opacity: 0.2, duration: speed * 1.6 },
        { color: "bg-purple-400", opacity: 0.4, duration: speed * 0.83 },
    ];

    const pausedRotations = [30, 120, 210];

    return (
        <div
            className="flex items-center justify-center w-full h-full bg-gray-50"
        >
            <div
                className="relative select-none"
                style={{
                    width: size,
                    height: size
                }}
            >
                {/* 背景グラデーション */}
                <motion.div
                    className="absolute w-full h-full rounded-[40%] bg-linear-to-b from-pink-400 to-pink-200 z-10"
                    animate={{ opacity: [0.9, 0.6, 0.9] }}
                    transition={{
                        repeat: Infinity,
                        duration: speed,
                        ease: "linear"
                    }}
                />

                {/* 円 */}
                {circles.map((circle, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-full h-full rounded-[40%] ${circle.color} opacity-${circle.opacity * 100} origin-[50%_47%] z-${20 + i * 10}`}
                        animate={
                            paused
                                ? { rotate: pausedRotations[i]}
                                : { rotate: [0, 360] }
                        }
                        transition={
                            paused
                                ? { duration: 0 }
                                : {
                                    repeat: Infinity,
                                    duration: circle.duration,
                                    ease: "linear",
                                }
                        }
                    />
                ))}

                {/* 点滅ラベル */}
                <motion.span
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full text-center text-white font-bold tracking-widest z-50"
                    style={{ fontSize: textSize }}
                    animate={
                        paused
                            ? { opacity: 0.8 }
                            : { opacity: [1, 0.8, 0.9, 0.6, 1] }}
                    transition={
                        paused
                            ? { duration: 0 }
                            : {
                                repeat: Infinity,
                                duration: 1
                            }
                    }
                >
                    LOADING
                </motion.span>
            </div>
        </div>
    );
}