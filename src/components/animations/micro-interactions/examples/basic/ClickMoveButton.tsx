import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import type { ButtonParams } from "../../button-animation";

export default function ClickMoveButton({
    speed = 1.4,
    color = "#2DD4BF",
    yRange = 6,
}: ButtonParams) {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            y: [0, 0, yRange, yRange, 0, 0],
            boxShadow: [
                "0 6px 0 rgba(0,0,0,0.35)",
                "0 6px 0 rgba(0,0,0,0.35)",
                "0 0 0 rgba(0,0,0,0)",
                "0 0 0 rgba(0,0,0,0)",
                "0 6px 0 rgba(0,0,0,0.35)",
                "0 6px 0 rgba(0,0,0,0.35)",
            ],
            transition: {
                duration: speed,
                times: [0, 0.45, 0.5, 0.6, 0.75, 1],
                repeat: Infinity,
                ease: "easeInOut"
            }
        });
    }, [speed, yRange]);

    return (
        <motion.div
            className="text-white w-40 h-12 cursor-pointer flex items-center justify-center font-semibold select-none rounded-lg"
            style={{
                backgroundColor: color,
            }}
            animate={controls}
        >
        </motion.div>
    );
}