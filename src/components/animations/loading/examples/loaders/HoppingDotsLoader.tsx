import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function HoppingDotsLoader({
    paused = false,
    speed = 1.5,
    size = 12,
    color = "#7aaed1",
}: LoaderProps) {
    const play = !paused;

    const jumpKeyframes = [
        0,
        0,
        size,
        0,
        0,
    ];

    return (
        <motion.div
            className="relative"
            style={{
                width: size * 4.15,
                height: size * 2.3,
            }}
            animate={
                play
                    ? { translateX: ["0%", "-33%"] }
                    : undefined
            }
            transition={
                play
                    ? {
                        duration: speed,
                        repeat: Infinity,
                        ease: "linear",
                    }
                    : undefined
            }
        >
            {/* 中央ドット */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-0 rounded-full"
                style={{
                    width: size,
                    height: size,
                    backgroundColor: color,
                }}
                animate={
                    play
                        ? { y: jumpKeyframes }
                        : undefined
                }
                transition={
                    play
                        ? {
                            duration: speed,
                            repeat: Infinity,
                            ease: "linear",
                            times: [0, 0.28, 0.33, 0.38, 1],
                        }
                        : undefined
                }
            />

            {/* 右ドット */}
            <motion.div
                className="absolute right-0 top-0 rounded-full"
                style={{
                    width: size,
                    height: size,
                    backgroundColor: color,
                }}
                animate={
                    play
                        ? { y: jumpKeyframes }
                        : undefined
                }
                transition={
                    play
                        ? {
                            duration: speed,
                            repeat: Infinity,
                            ease: "linear",
                            times: [0, 0.6, 0.66, 0.72, 1],
                        }
                        : undefined
                }
            />

            {/* 動く弾 */}
            <motion.div
                className="absolute top-0 left-0 rounded-full"
                style={{
                    width: size,
                    height: size,
                    backgroundColor: color,
                    willChange: "transform"
                }}
                animate={
                    play
                        ? {
                            x: [0, size * 4.8],
                            y: [0, -0.1],
                        }
                        : { y: -size * 0.75 }
                }
                transition={
                    play
                        ? {
                            x: {
                                duration: speed,
                                repeat: Infinity,
                                ease: "linear",
                            },
                            y: {
                                duration: speed / 3,
                                repeat: Infinity,
                                ease: [0, 200, 0.8, 200],
                            },
                        }
                        : undefined
                }
            />
        </motion.div>
    );
}