import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";
import { darken } from "@/utils/color";

export default function ClockLoader({
    paused = false,
    speed = 1.2,
    size = 50,
    color = "#f7b2e1",
}: LoaderProps) {
    const handHeight = size * 0.5;
    const handColor = darken(color, 0.4);

    return (
        <div
            className="relative rounded-full"
            style={{
                width: size,
                height: size,
                backgroundColor: color,
                borderRadius: "50%",
            }}
        >
            {/* 時計の針 */}
            <motion.div
                className="absolute w-0.5 left-1/2 top-0 -translate-x-1/2"
                style={{
                    height: handHeight,
                    transformOrigin: "50% 100%",
                    backgroundColor: handColor,
                }}
                animate={
                    paused
                        ? { rotate: 0 }
                        : { rotate: [0, 360] }
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
        </div>
    );
}