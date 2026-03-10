import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function HoppingDotsLoader({ paused = false }: Props) {
    const play = !paused;

    return (
        <motion.div
            className="relative w-12.5 h-7"
            animate={
                play
                    ? { translateX: ["0%", "-33%"] }
                    : undefined
            }
            transition={
                play
                    ? {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                    }
                    : undefined
            }
        >
            {/* 中央ドット */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 rounded-full bg-[#7aaed1]"
                animate={
                    play
                        ? { y: [0, 0, 12, 0, 0] }
                        : undefined
                }
                transition={
                    play
                        ? {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                            times: [0, 0.28, 0.33, 0.38, 1],
                        }
                        : undefined
                }
            />

            {/* 右ドット */}
            <motion.div
                className="absolute right-0 top-0 w-3 h-3 rounded-full bg-[#7aaed1]"
                animate={
                    play
                        ? { y: [0, 0, 12, 0, 0] }
                        : undefined
                }
                transition={
                    play
                        ? {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                            times: [0, 0.6, 0.66, 0.72, 1],
                        }
                        : undefined
                }
            />

            {/* 動く弾 */}
            <motion.div
                className="absolute top-0 left-0 w-3 h-3 rounded-full bg-[#7aaed1]"
                animate={
                    play
                        ? {
                            x: [0, 57],
                            y: [0, -0.1],
                        }
                        : { y: -10 }
                }
                transition={
                    play
                        ? {
                            x: {
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "linear",
                            },
                            y: {
                                duration: 0.5,
                                repeat: Infinity,
                                ease: [0, 200, 0.8, 200],
                            },
                        }
                        : undefined
                }
                style={{ willChange: "transform" }}
            />
        </motion.div>
    );
}