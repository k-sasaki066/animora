import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import type { ButtonParams } from "../../button-animation";

export default function SwayingButton({
    speed = 2,
    color = "#818CF8",
    rotate = 2,
}: ButtonParams) {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            rotate: [0, -rotate, 0, rotate, 0],
            transition: {
                duration: speed,
                repeat: Infinity,
                ease: "linear"
            }
        });
    }, [speed, rotate]);

    return (
        <motion.div
            className="rounded-full w-40 h-12 cursor-pointer px-8 py-4"
            style={{
                backgroundColor: color,
            }}
            animate={controls}
        />
    );
}