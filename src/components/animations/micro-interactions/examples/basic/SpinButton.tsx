import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import type { ButtonParams } from "../../button-animation";

export default function SpinButton({
    speed = 1,
    color = "#71717b",
    rotate = 180,
}: ButtonParams) {
    const controls = useAnimation();

        useEffect(() => {
            controls.start({
                rotateX: [0, 0, rotate],
                scale: [1, 1, 1],
                transition: {
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear"
                }
            });
        }, [speed, rotate]);

    return (
        <motion.div
            className="w-40 h-12 cursor-pointer px-8 py-4"
            style={{
                backgroundColor: color,
            }}
            animate={controls}
        />
    );
}