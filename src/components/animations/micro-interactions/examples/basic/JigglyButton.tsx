import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import type { ButtonParams } from "../../button-animation";

export default function JigglyButton({
    speed = 1.6,
    scale = 1.2,
}: ButtonParams) {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            scaleX: [1, scale, 0.9, 1.05, 1],
            scaleY: [1, 0.85, scale, 0.95, 1],
            transition: {
                duration: speed,
                repeat: Infinity,
                ease: "easeInOut"
            }
        });
    }, [speed, scale]);

    return (
        <motion.div
            className="rounded-full bg-linear-to-r from-yellow-500 via-red-500 to-pink-500 w-38 h-12 cursor-pointer"
            animate={controls}
        />
    );
}