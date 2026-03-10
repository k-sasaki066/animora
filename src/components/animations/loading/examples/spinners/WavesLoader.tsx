import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function WavesLoader({ paused = false }: Props) {
    const delays = [0, 0.3];
    const pausedScales = [0.8, 1.2];
    const pausedOpacity = [0.3, 0.6];

    return (
        <div className="relative w-12 h-12 rounded-full flex items-center justify-center">
            {delays.map((delay, i) => (
                <motion.div
                    key={i}
                    className="absolute w-full h-full border-2 border-orange-300 rounded-full"
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
                                scale: [0.5, 1, 1.5],
                                opacity: [0, 1, 0]
                            }
                    }
                    transition={
                        paused
                            ? { duration: 0 }
                            : {
                                repeat: Infinity,
                                duration: 0.6,
                                delay,
                                ease: "linear",
                            }
                    }
                />
            ))}
        </div>
    );
}