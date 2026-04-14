import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import type { ButtonParams } from "../../button-animation";

export default function SkewButton({
    speed = 2,
    color = "#fda5d5",
    rotate = 20,
}: ButtonParams) {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            skewX: [-rotate, rotate, -rotate],
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