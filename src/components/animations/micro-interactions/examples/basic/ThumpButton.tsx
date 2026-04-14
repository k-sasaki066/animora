import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import type { ButtonParams } from "../../button-animation";

export default function ThumpButton({
    speed = 1.3,
    color = "#e879f9",
    scale = 1.1,
}: ButtonParams) {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            scale: [1, scale, 1, 1, scale, 1],
            transition: {
                duration: speed,
                repeat: Infinity,
                ease: "easeInOut"
            }
        });
    }, [speed, scale]);

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