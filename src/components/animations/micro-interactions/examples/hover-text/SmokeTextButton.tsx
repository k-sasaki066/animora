"use client";

import { motion } from "framer-motion";

export default function SmokeTextButton() {

    return (
        <motion.button
            className="px-8 py-4 rounded-full bg-black text-white font-semibold relative overflow-hidden w-40 h-12 cursor-pointer flex justify-center items-center"
            whileHover="hover"
            initial="rest"
        >
            {"HOVER".split("").map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    variants={{
                        rest: {
                            x: 0,
                            y: 0,
                            opacity: 1,
                            filter: "blur(0px)",
                            transition: { duration: 0.4 },
                        },
                        hover: {
                            x: [0, 8, -12, 0], // 左右に揺れて飛ぶ
                            y: [0, -6, -12, 0], // 少し浮く
                            opacity: [1, 1, 0, 0, 1],      // 一瞬消える
                            filter: ["blur(0px)", "blur(2px)", "blur(6px)", "blur(10px)", "blur(0px)"],
                            transition: {
                                duration: 1,
                                delay: i * 0.05, // ← 文字ごとにズラす
                                ease: "easeOut",
                            },
                        },
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.button>
    );
}