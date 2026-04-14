import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function FadeLoader({
    paused = false,
    speed = 1.5,
    size = 48,
    color = "#66a6ff",
}: LoaderProps) {

    return (
        <motion.div
            className="rounded-full"
            style={{
                width: size,
                height: size,
                backgroundColor: color,
            }}
            animate={
                paused
                    ? { opacity: 0.6 }
                    : { opacity: [0, 1, 0] }
            }
            transition={
                paused
                    ? { duration: 0 }
                    : {
                        repeat: Infinity,
                        duration: speed
                    }
            }
        />
    );
}