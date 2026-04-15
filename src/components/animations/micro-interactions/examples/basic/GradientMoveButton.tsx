import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import type { ButtonParams } from "../../button-animation";
import { createGradient } from "@/utils/color";

export default function GradientMoveButton({
    speed = 4,
    color = "#fb7185",
}: ButtonParams) {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            backgroundPositionX: ["0%", "100%"],  // 横方向にアニメーション
            backgroundPositionY: ["50%", "50%"], // 縦は固定
            transition: {
                duration: speed,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }
        });
    }, [speed]);

    const gradient = createGradient(color || "#fb7185");

    return (
        <motion.div
            className="rounded-full w-40 h-12 cursor-pointer px-8 py-4"
            style={{
                backgroundImage: gradient,
                backgroundSize: "500% 500%",
                backgroundPosition: "0% 50%",
            }}
            animate={controls}
        />
    );
}