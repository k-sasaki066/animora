import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface Props {
    paused?: boolean;
}

export default function ScaleDotsSpinLoader({ paused = false }: Props) {

    const baseSize = 4;
    const maxScale = 3;
    const distance = 22;
    const color = "#3393dd";
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

    const rotate = useMotionValue(0);

    useEffect(() => {
        const controls = animate(rotate, 360, {
            repeat: Infinity,
            duration: 1,
            ease: "linear",
        });
        return () => controls.stop();
    }, [rotate]);

    // paused のときは途中のステップで止める
    const stepIndex = useTransform(rotate, (r) => {
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