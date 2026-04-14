import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function QuadSpinLoader({
    paused = false,
    speed = 1,
    size = 48,
}: LoaderProps) {

    return (
        <div
            className="relative grid place-items-center"
            style={{
                width: size,
                height: size,
            }}
        >
            {[0, 1].map((idx) => {
                const pausedRotate = idx === 0 ? 45 : 90;

                return (
                    <motion.div
                        key={idx}
                        className="absolute"
                        style={{
                            background:
                                `radial-gradient(farthest-side,#25b09b 92%,transparent) 50% 0,` +
                                `radial-gradient(farthest-side,#25b09b 92%,transparent) 50% 100%,` +
                                `radial-gradient(farthest-side,#25b09b 92%,transparent) 100% 50%,` +
                                `radial-gradient(farthest-side,#25b09b 92%,transparent) 0 50%`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: idx === 0 ? `${size * 0.17}px ${size * 0.17}px` : `${size * 0.25}px ${size * 0.25}px`,
                            filter: idx === 0 ? "hue-rotate(45deg)" : "none",
                            width: idx === 0 ? "85%" : "100%",
                            height: idx === 0 ? "85%" : "100%",
                        }}
                        animate={
                            paused
                                ? { rotate: pausedRotate }
                                : { rotate: [0, 180] }
                        }
                        transition={
                            paused
                                ? { duration: 0 }
                                : {
                                    duration: speed,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: idx === 0 ? "linear" : [0.4, 0.4, 0.3, 1],
                                }
                        }
                    />
                );
            })}
        </div>
    );
}