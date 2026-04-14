import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function BallsScaleLoader({
    paused = false,
    speed = 1,
    size = 16,
    color = "#9810fa",
    delayStep = 0.33
}: LoaderProps) {
    const opacities = paused ? [1, 0.5, 0.25] : [];
    const count = 3;

    return (
        <div className="flex justify-center items-center space-x-2">
            {Array.from({ length: count }).map((_, i) => (
                <motion.div
                    key={i}
                    className="rounded-full"
                    style={{
                        width: size * 0.65,
                        height: size,
                        backgroundColor: color,
                    }}
                    animate={
                        paused
                            ? { opacity: opacities[i] }
                            : { opacity: [1, 0.25, 0.25, 1] }
                    }
                    transition={
                        paused
                            ? { duration: 0 }
                            : {
                                repeat: Infinity,
                                duration: speed,
                                ease: "linear",
                                times: [0, 0.33, 0.66, 1],
                                delay: i * delayStep,
                            }
                    }
                />
            ))}
        </div>
    );
}