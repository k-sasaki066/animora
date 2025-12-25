"use client";

import { motion } from "framer-motion";

export default function DiagonalBackground() {
    return (
        <div className="relative w-full aspect-video overflow-hidden bg-gray-900 perspective-[2400px]">
            <motion.div
                className="absolute -top-[60%] -left-[50%] w-[400%] h-[300%] origin-center"
                style={{
                    transformStyle: "preserve-3d",
                    rotateX: 20,
                    rotateY: 40,
                    rotateZ: -20,
                    scale: 0.9,
                }}
                animate={{
                    x: ["0%", "-100%"],  // 左方向
                    y: ["0%", "10%"], // 少し下方向に動くと奥行き感
                    z: [0, -200], // 奥から手前に動く
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 18,
                    ease: "linear",
                }}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/27530/r7Z09Ht.png')] bg-size-[500px] bg-repeat"
                />
            </motion.div>
        </div>
    );
}