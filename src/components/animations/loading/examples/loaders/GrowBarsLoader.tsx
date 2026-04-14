import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function GrowBarsLoader({
    paused = false,
    speed = 1,
    size = 35,
    color = "#ff758c",
}: LoaderProps) {
    const pausedScales = [0.3, 0.5, 0.7, 1];

    return (
        <div
            className="flex items-center justify-between"
            style={{
                width: size,
                height: size * 0.9,
            }}
        >
            {[ -0.45, -0.3, -0.15, 0 ].map((delay, i) => (
                <motion.div
                    key={i}
                    style={{
                        width: size * 0.1,
                        height: "100%",
                        borderRadius: "2px",
                        backgroundColor: color,
                    }}
                    animate={
                        paused
                            ? { scaleY: pausedScales[i] }
                            : { scaleY: [0.3, 1, 0.3] }
                    }
                    transition={
                        paused
                            ? { duration: 0 }
                            : {
                                duration: speed,
                                ease: "easeInOut",
                                repeat: Infinity,
                                delay: delay,
                            }
                    }
                />
            ))}
        </div>
    );
}