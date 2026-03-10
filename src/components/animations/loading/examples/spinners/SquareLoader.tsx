import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface Props {
    paused?: boolean;
}

export default function SquareLoader({ paused = false }: Props) {
    const controls = useAnimation();

    useEffect(() => {
        if (!paused) {
            controls.start({
                strokeDashoffset: [-0, -100],
                transition: {
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "linear",
                },
            });
        } else {
            controls.stop();
        }
    }, [paused, controls]);

    return (
        <svg
            className="w-12 h-12 text-green-500"
            viewBox="0 0 36 36"
            height="36"
            width="36"
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
                strokeWidth="4"
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
                strokeWidth="4"
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