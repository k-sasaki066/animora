import { motion, useTransform, useTime } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function ScaleDotsSpinLoader({
    paused = false,
    speed = 1,
    size = 20,
    color = "#3393dd",
    scale = 3,
}: LoaderProps) {

    const baseSize = size / 5;
    const maxScale = scale;
    const distance = size;
    const steps = 8;
    const positions = [
        [1, 0],
        [0.707, 0.707],
        [0, 1],
        [-0.707, 0.707],
        [-1, 0],
        [-0.707, -0.707],
        [0, -1],
        [0.707, -0.707],
    ];

    const time = useTime();

    const angle = useTransform(
        time,
        (t) => (paused ? 0 : (t / (speed * 1000)) * 360)
    );

    const stepIndex = useTransform(angle, (r) => {
        const step = Math.floor((r / 360) * steps) % steps;
        return paused ? Math.floor(steps / 2) : step;
    });

    return (
        <motion.div
            className="relative"
            style={{
                width: distance * 2,
                height: distance * 2,
            }}
        >
            {positions.map(([x, y], i) => {
                const scale = useTransform(stepIndex, (s) => {
                    let diff = i - s;
                    if (diff < 0) diff += steps;
                    return Math.max(1, maxScale - (diff * (maxScale - 1)) / steps);
                });

                return (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-current"
                        style={{
                            width: baseSize,
                            height: baseSize,
                            backgroundColor: color,
                            top: `calc(50% + ${y * distance}px - ${baseSize / 2}px)`,
                            left: `calc(50% + ${x * distance}px - ${baseSize / 2}px)`,
                            scale,
                        }}
                    />
                );
            })}
        </motion.div>
    );
}