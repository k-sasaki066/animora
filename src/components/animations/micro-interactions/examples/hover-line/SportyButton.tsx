"use client";

import { motion } from "framer-motion";

export default function SportyButton() {

    return (
        <motion.button
            className="relative font-bold uppercase text-transparent bg-clip-text bg-linear-to-r from-[#ff8282] to-[#e178ed] w-40 h-12 cursor-pointer flex justify-center items-center"
            whileHover="hover"
            initial="rest"
            animate="rest"
        >Button

            {/* SVG border */}
            <motion.svg
                className="absolute inset-0" //ボタン全体を覆う
                viewBox="0 0 160 48"   // ← w-40 h-12
                preserveAspectRatio="none"
            >
                {/* SVG 内で「グラデーション色」を定義 */}
                <defs>
                    <linearGradient id="grad1">
                        <stop offset="0%" stopColor="#FF8282" />
                        <stop offset="100%" stopColor="#E178ED" />
                    </linearGradient>
                </defs>

                {/* 線が走る アニメーション */}
                <motion.rect
                    x="2"
                    y="2"
                    width="156"
                    height="44"
                    rx="20"
                    fill="none"
                    stroke="url(#grad1)"
                    strokeWidth="4"
                    vectorEffect="non-scaling-stroke"
                    variants={{
                        rest: {
                            strokeDasharray: "220 0", //見える線の長さ,空白部分の長さ
                            strokeDashoffset: 0,
                            transition: {
                                duration: 0.6,
                                ease: "easeInOut"
                            },
                        },
                        hover: {
                            strokeDasharray: "120 320",
                            strokeDashoffset: 260,
                            transition: {
                                duration: 0.6,
                                ease: "easeInOut"
                            },
                        },
                    }}
                />
            </motion.svg>
        </motion.button>
    );
}