import { motion } from "framer-motion";

const colors = [
    "bg-cyan-300/50",
    "bg-sky-300/50",
    "bg-blue-500/50",
];

interface Props {
    paused?: boolean;
}

export default function WaveDotsLoader({ paused = false }: Props) {
    return (
        <div className="flex items-center justify-center">
            {colors.map((color, i) => {
                const pausedScale = 1 + (i * 0.5);
                const pausedOpacity = 1 - i * 0.3;

                return (
                    <div
                        key={i}
                        className={`relative w-3 h-3 m-2 rounded-full ${color}`}
                    >
                        {/* 波紋 */}
                        <motion.span
                            className={`absolute inset-0 rounded-full ${color}`}
                            animate={
                                paused
                                    ? {
                                        scale: pausedScale,
                                        opacity: pausedOpacity
                                    }
                                    : {
                                        scale: [1, 2.5, 2.5],
                                        opacity: [1, 1, 0],
                                    }
                            }
                            transition={
                                paused
                                    ? { duration: 0 }
                                    : {
                                        duration: 2,
                                        ease: "easeOut",
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }
                            }
                        />
                    </div>
                );
            })}
        </div>
    );
}