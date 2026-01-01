"use client";

import { motion } from "framer-motion";

export default function GradientMoveButton() {

    return (
        <motion.div
            className="rounded-full w-40 h-12 cursor-pointer px-8 py-4"
            style={{
                background: "linear-gradient(90deg,#fe447c, #364f6b)",
                backgroundSize: "500% 500%",
            }}
            animate={{
                backgroundPositionX: ["0%", "100%"],  // 横方向にアニメーション
                backgroundPositionY: ["50%", "50%"], // 縦は固定
            }}
            transition={{
                duration: 4,
                repeat: Infinity, repeatType: "reverse",
                ease: "easeInOut"
            }}
        />
    );
}