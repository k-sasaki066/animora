"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SvgText() {
    const [active, setActive] = useState(true);

    useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

    return (
        <div className="relative w-full h-64 overflow-hidden rounded-lg">
            {/* 背景画像 */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/lavender.jpg')" }}
            />

            {/* 暗いオーバーレイ */}
            <div className="absolute inset-0 bg-black/40" />

            {/* SVGマスクで文字だけ明るく見せる */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 150">
                <defs>
                    <mask id="text-mask" x="0" y="0" width="100%" height="100%">
                        <rect x="0" y="0" width="100%" height="100%" fill="black" />
                        <>
                            <motion.text
                                x="50%"
                                y="50%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="48"
                                fontWeight="800"
                                fill="white"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{
                                    opacity: active ? 1 : 0,
                                    y: active ? 0 : -20,
                                }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            >
                                SVG + CSS
                            </motion.text>

                            <motion.text
                                x="50%"
                                y="70%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="20"
                                fontWeight="300"
                                fill="white"
                                style={{ textTransform: "uppercase" }}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{
                                    opacity: active ? 1 : 0,
                                    y: active ? 0 : -10,
                                }}
                                transition={{ delay: 1, duration: 2 }}
                            >
                                Use it please!
                            </motion.text>
                        </>
                    </mask>
                </defs>

                <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="rgba(0,0,0,0.4)"
                    mask="url(#text-mask)"
                />
            </svg>
        </div>
    );
}