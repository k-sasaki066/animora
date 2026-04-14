import { motion, Variants } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function StepCircleLoader({
    paused = false,
    speed = 2,
    size = 48,
    color = "#f8b01c",
}: LoaderProps) {
    const backgroundVariants: Variants = {
        animate: {
            background: [
                `conic-gradient(${color} 0deg,#0000 0deg)`,
                `conic-gradient(${color} 45deg,#0000 46deg)`,
                `conic-gradient(${color} 90deg,#0000 91deg)`,
                `conic-gradient(${color} 135deg,#0000 136deg)`,
                `conic-gradient(${color} 180deg,#0000 181deg)`,
                `conic-gradient(${color} 225deg,#0000 226deg)`,
                `conic-gradient(${color} 270deg,#0000 271deg)`,
                `conic-gradient(${color} 315deg,#0000 316deg)`,
                `conic-gradient(${color} 360deg,#0000 360deg)`,
            ],
            transition: {
                duration: speed,
                ease: "linear",
                repeat: Infinity,
            },
        },
        paused: {
            background: `conic-gradient(${color} 315deg,#0000 316deg)`,
        },
    };

    return (
        <motion.div
            className="rounded-full"
            style={{
                width: size,
                height: size,
            }}
            variants={backgroundVariants}
            animate={paused ? "paused" : "animate"}
        />
    );
}
