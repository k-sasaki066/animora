import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function StripeSlideLoader({
    paused = false,
    speed = 2,
    size = 80,
    color = "#6f86d6",
}: LoaderProps) {

    const width = size * 1.4;

    return (
        <motion.div
            className="rounded"
            style={{
                width,
                height: size * 0.15,
                background: `repeating-linear-gradient(-45deg, ${color} 0 15px, transparent 0 20px)`,
                backgroundSize: "200% 100%",
            }}
            animate={
                !paused
                    ? { backgroundPosition: ["0% 0%", "100% 0%"] }
                    : undefined
            }
            transition={
                paused
                    ? { duration: 0 }
                    : {
                        repeat: Infinity,
                        duration: speed,
                        ease: "linear",
                    }
            }
        />
    );
}