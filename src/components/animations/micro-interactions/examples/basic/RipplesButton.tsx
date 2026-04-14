import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import type { ButtonParams } from "../../button-animation";

export default function RipplesButton({
    speed = 1.5,
    color = "#C084FC",
    scale = 1.3,
}: ButtonParams) {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            scale: [1.1, scale],
            opacity: [0.5, 0],
            transition: {
                duration: speed,
                repeat: Infinity,
                ease: "easeOut"
            }
        });
    }, [speed, scale]);

    return (
        <motion.div
            className="relative flex justify-center items-center rounded-full w-40 h-12 cursor-pointer px-8 py-4"
            style={{
                backgroundColor: color,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.div
                className="absolute rounded-full border"
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: color,
                    opacity: 0.4,
                }}
                animate={controls}
            />
        </motion.div>
    );
}