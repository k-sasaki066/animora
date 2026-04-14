import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function RotateScaleLoader({
    paused = false,
    speed = 1.2,
    size = 48,
    color = "#80ac4c",
    scale = 1.3,
}: LoaderProps) {

    return (
        <motion.div
            className="border-5 border-gray-300 rounded-full"
            style={{
                width: size,
                height: size,
                borderTopColor: color,
            }}
            animate={
                paused
                    ? { rotate: 0, scale: 1 }
                    : {
                        rotate: [0, 360],
                        scale: [1, scale, 1]
                    }
            }
            transition={
                paused
                    ? { duration: 0 }
                    : {
                        repeat: Infinity,
                        duration: speed,
                        ease: "linear"
                    }
            }
        />
    );
}