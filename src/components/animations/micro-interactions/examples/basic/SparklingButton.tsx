import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import type { ButtonParams } from "../../button-animation";

export default function SparklingButton({
    speed = 3,
    color = "#FBBF24",
    rotate = 45,
    scale = 8,
}: ButtonParams) {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            scale: [0, 0, 0, scale],
            rotate: [rotate, rotate, rotate, rotate],
            opacity: [0, 0.5, 1, 0],
            transition: {
                duration: speed,
                repeat: Infinity,
                ease: "easeInOut"
            }
        });
    }, [speed, rotate, scale]);

    return (
        <motion.div
            className="w-40 h-12 cursor-pointer px-8 py-4 overflow-hidden relative rounded-full"
            style={{
                backgroundColor: color,
            }}
        >
            <motion.div
                className="absolute top-0 left-18 w-50 h-full bg-white rounded-full"
                animate={controls}
            />
        </motion.div>
    );
}