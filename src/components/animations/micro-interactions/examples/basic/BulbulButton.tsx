import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import type { ButtonParams } from "../../button-animation";

export default function BulbulButton({
    speed = 0.8,
    color = "#84cc16",
    xRange = 8,
}: ButtonParams) {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            x: [0, 0, -6, xRange, -2, xRange, 0],
            transition: {
                duration: speed,
                repeat: Infinity,
                ease: "linear"
            }
        });
    }, [speed, xRange]);

    return (
        <motion.div
            className="text-white rounded-full w-40 h-12 cursor-pointer px-8 py-4"
            style={{
                backgroundColor: color,
            }}
            animate={controls}
        >
        </motion.div>
    );
}