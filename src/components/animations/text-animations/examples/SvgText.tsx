"use client";

import { motion } from "framer-motion";

export default function SvgText() {
    return (
        <div className="relative w-full aspect-video overflow-hidden mx-auto">
            {/* 背景画像 */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/lavender.jpg')" }}
            />

            {/* 暗いオーバーレイ */}
            <div className="absolute inset-0 bg-black/40" />

            {/* SVGマスクで文字だけ明るく見せる */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 150" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <mask id="text-mask" x="0" y="0" width="100%" height="100%">
                        <rect x="0" y="0" width="100%" height="100%" fill="white" />
                        <>
                            <motion.text
                                x="50%"
                                y="50%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="4vw"
                                fontWeight="800"
                                fill="black"
                            >
                                TEXT
                            </motion.text>

                            <motion.text
                                x="50%"
                                y="70%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="1.5vw"
                                fontWeight="300"
                                fill="black"
                                style={{ textTransform: "uppercase" }}
                            >
                                Use it please!
                            </motion.text>
                        </>
                    </mask>
                </defs>

                <rect
                    width="100%"
                    height="100%"
                    fill="rgba(0,0,0,0.4)"
                    mask="url(#text-mask)"
                />
            </svg>
        </div>
    );
}