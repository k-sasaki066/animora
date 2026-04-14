import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import type { ButtonParams } from "../../button-animation";

export default function ShakyButton({
    speed = 0.1,
    color = "#38BDF8",
    yRange = 2,
    rotate = 1,
}: ButtonParams) {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            y: [0, yRange, yRange, yRange, 0],
            rotate: [0, rotate, 0, -rotate, 0],
            transition: {
                duration: speed,
                repeat: Infinity,
                ease: "linear"
            }
        });
    }, [speed, yRange, rotate]);

    return (
        <motion.div
            className="rounded-full w-40 h-12 cursor-pointer px-8 py-4"
            style={{
                backgroundColor: color,
            }}
            animate={controls}
        >
        </motion.div>
    );
}