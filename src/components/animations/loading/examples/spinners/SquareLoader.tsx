import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import type { LoaderProps } from "../../loader";

export default function SquareLoader({
    paused = false,
    speed = 1.2,
    size = 36,
    color = "#22c55e",
}: LoaderProps) {
    const controls = useAnimation();

    useEffect(() => {
        if (!paused) {
            controls.start({
                strokeDashoffset: [-0, -100],
                transition: {
                    repeat: Infinity,
                    duration: speed,
                    ease: "linear",
                },
            });
        } else {
            controls.stop();
        }
    }, [paused, controls, speed]);

    return (
        <svg
            viewBox="0 0 36 36"
            height={size}
            width={size}
            style={{ color }}
        >
            <rect
                x="3"
                y="3"
                width="30"
                height="30"
                rx="2"
                ry="2"
                fill="none"
                stroke="currentColor"
                strokeWidth={Math.max(1, size * 0.15)}
                opacity="0.15"
            />

            {/* 流れる線 */}
            <motion.rect
                x="3"
                y="3"
                width="30"
                height="30"
                rx="2"
                ry="2"
                fill="none"
                stroke="currentColor"
                strokeWidth={Math.max(1, size * 0.15)}
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="100"
                strokeDasharray="25 75"
                strokeDashoffset="0"
                animate={controls}
            />
        </svg>
    );
}