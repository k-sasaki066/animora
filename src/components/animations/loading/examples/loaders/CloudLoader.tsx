import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function CloudLoader({
    paused = false,
    speed = 2.2,
    size = 60,
    color = "#7dd3fc",
    scale = 1.06,
    yRange = -2,
}: LoaderProps) {

    return (
        <motion.div
            className="
                relative rounded-full
                before:content-[''] before:absolute before:w-(--before) before:h-(--before)
                before:bg-(--color) before:rounded-full before:left-(--before-left) before:top-(--before-top)
                after:content-[''] after:absolute after:w-(--before) after:h-(--before)
                after:bg-(--color) after:rounded-full after:left-(--after-left) after:top-(--after-top)
            "
            style={{
                width: size,
                height: size * 0.46,
                backgroundColor: color,
                "--color": color,
                "--before": `${size * 0.45}px`,
                "--after": `${size * 0.35}px`,
                "--before-top": `${size * -0.07}px`,
                "--before-left": `${size * 0.01}px`,
                "--after-top": `${size * -0.17}px`,
                "--after-left": `${size * 0.33}px`,
                } as React.CSSProperties}
            animate={
                paused
                    ? { scale: 1, y: 0 }
                    : {
                        scale: [1, scale, 1],
                        y: [0, yRange, 0],
                    }
            }
            transition={
                paused
                    ? { duration: 0 }
                    : {
                        repeat: Infinity,
                        duration: speed,
                        ease: "easeInOut",
                    }
            }
        >
            <div
                className="absolute rounded-full"
                style={{
                    width: size * 0.4,
                    height: size * 0.4,
                    backgroundColor: color,
                    left: size * 0.26,
                    bottom: size * -0.1
                }}
            />
        </motion.div>
    );
}