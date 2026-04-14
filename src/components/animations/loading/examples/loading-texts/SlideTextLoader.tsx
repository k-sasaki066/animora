import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function SlideTextLoader({
    paused = false,
    speed = 4,
    size = 30,
    color = "#be7cba",
}: LoaderProps) {
    const text = ["L", "o", "a", "d", "i", "n", "g"];

    return (
        <div
            className="relative font-bold uppercase tracking-[5px]"
            style={{ fontSize: size }}
        >
            <span className="text-black">
                {text}
            </span>

            <motion.span
                className="absolute top-0 left-0 border-r-4 whitespace-nowrap overflow-hidden"
                style={{
                    color: color,
                    borderColor: color
                }}
                initial={{
                    width: 0
                }}
                animate={
                    paused
                        ? { width: "50%" }
                        : { width: ["0%", "100%", "0%"] }
                }
                transition={
                    paused
                        ? { duration: 0 }
                        : {
                            duration: speed,
                            repeat: Infinity,
                            ease: "linear",
                        }
                }
            >
                {text}
            </motion.span>
        </div>
    );
}