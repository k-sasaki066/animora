"use client";

import { motion } from "framer-motion";

export default function MoveAndSurroundButton() {

    return (
        <motion.div
            className="relative w-40 h-12 cursor-pointer flex justify-center items-center"
            whileHover="hover"
        >
            {/* ボタン本体 */}
            <div className="px-6 py-3 w-full h-full z-10 text-center">
                Button
            </div>

            {/* 回転するアウトライン（SVG） */}
            <motion.svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 200 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.rect
                    className= "w-full h-full"
                    x="0"
                    y="0"
                    rx="0"
                    stroke="purple"
                    strokeWidth="2"
                    strokeDasharray="60 460"
                    strokeDashoffset={60}
                    variants={{
                        hover: {
                            strokeDashoffset: [60, -201],
                            strokeDasharray: ["60 460", "520 0"], //ここで枠線を伸ばす
                            transition: {
                                duration: 0.8,
                                ease: [0.1, 0.8, 0.3, 1], //徐々に減速
                                strokeDasharray: {
                                    delay: 0.5, // ← offsetが終わった後に開始
                                }
                            },
                        },
                    }}
                />
            </motion.svg>
        </motion.div>
    );
}