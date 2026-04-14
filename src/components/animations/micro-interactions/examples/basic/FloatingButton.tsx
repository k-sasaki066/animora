import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import type { ButtonParams } from "../../button-animation";

export default function FloatingButton({
    speed = 2,
    color = "#fb7185",
    yRange = -10,
}: ButtonParams) {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            y: [0, yRange, 0],
            transition: {
                duration: speed,
                repeat: Infinity,
                ease: "linear"
            }
        });
    }, [speed, yRange]);

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