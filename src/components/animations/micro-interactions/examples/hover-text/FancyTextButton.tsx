"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function FancyTextButton() {

    const [isHover, setIsHover] = useState(false);

    return (
        <motion.div
            className="relative px-8 py-4 rounded-sm border border-black  overflow-hidden w-40 h-12 cursor-pointer"
            // 親のホバーは背景専用にする
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            >
            {/* 背景 */}
            <motion.div
                className="absolute left-0 w-full h-full bg-black"
                animate={
                    isHover
                        ? { bottom: 0 }
                        : { bottom: "-100%" }
                }
                transition={{
                    duration: 0.4,
                    ease: "easeInOut"
                }}
            />

            {/* テキスト */}
            <div className="relative z-10 w-full h-full space-x-px flex justify-center items-center">
                {"HOVER".split("").map((char, i) => (
                    <motion.span
                        key={i}
                        className="inline-block"
                        initial={{ color: "#000" }}
                        animate={{ color: isHover ? "#fff" : "#000" }}
                        transition={{
                            duration: 0.25,
                            ease: [0.19, 1, 0.22, 1]
                        }}
                        whileHover={{ y: -4 }}
                    >
                        {char}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
}