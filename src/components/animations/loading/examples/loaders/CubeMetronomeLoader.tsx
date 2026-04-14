import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function CubeMetronomeLoader({
    paused = false,
    speed = 2,
    size = 14,
    color = "#ec6ead",
    xRange = 8,
}: LoaderProps) {

    return (
        <div className="relative flex items-center justify-center">
            <motion.div
                className="absolute rounded-sm"
                style={{
                    width: size,
                    height: size,
                    backgroundColor: color,
                }}
                animate={
                    paused
                        ? { x: 0 }
                        : { x: [-xRange, 0, xRange, 0, -xRange] }
                }
                transition={
                    paused
                        ? { duration: 0 }
                        : {
                            duration: speed,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }
                }
            />
        </div>
    );
}