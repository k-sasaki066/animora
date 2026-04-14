import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function MarchingDotsLoader({
    paused = false,
    speed = 1,
    size = 12,
    color = "#77db9a",
}: LoaderProps) {
    const range = size * 1.5;

    return (
        <div
            className="relative"
            style={{
                width: size,
                height: size,
            }}
        >
            {/* 水平移動 */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    width: size,
                    height: size,
                    boxShadow: `${-range}px 0 0 ${color}`,
                    backgroundColor: color,
                }}
                animate={
                    paused
                        ? { x: 0 }
                        : { x: [0, range] }
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
            />

            {/* 飛び越えるドット */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    width: size,
                    height: size,
                    backgroundColor: color,
                }}
                transformTemplate={({ rotate }) =>
                    `rotate(${rotate}) translateX(${range}px)`
                }
                animate={
                    paused
                        ? { rotate: -45 }
                        : { rotate: [0, -180] }
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
            />
        </div>
    );
}