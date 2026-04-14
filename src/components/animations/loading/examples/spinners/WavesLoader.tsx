import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function WavesLoader({
    paused = false,
    speed = 0.6,
    size = 48,
    color = "#fdba74",
    scale = 1.5,
}: LoaderProps) {
    const delays = [0, 0.3];
    const pausedScales = [0.8, 1.2];
    const pausedOpacity = [0.3, 0.6];

    return (
        <div
            className="relative rounded-full flex items-center justify-center"
            style={{
                width: size,
                height: size,
            }}
        >
            {delays.map((delay, i) => (
                <motion.div
                    key={i}
                    className="absolute w-full h-full border-2 rounded-full"
                    style={{
                        borderColor: color,
                    }}
                    initial={{
                        scale: 0.5,
                        opacity: 0
                    }}
                    animate={
                        paused
                            ? {
                                scale: pausedScales[i],
                                opacity: pausedOpacity[i]
                            }
                            : {
                                scale: [0.5, 1, scale],
                                opacity: [0, 1, 0]
                            }
                    }
                    transition={
                        paused
                            ? { duration: 0 }
                            : {
                                repeat: Infinity,
                                duration: speed,
                                delay,
                                ease: "linear",
                            }
                    }
                />
            ))}
        </div>
    );
}