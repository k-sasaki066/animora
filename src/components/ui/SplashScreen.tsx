// components/SplashScreen.tsx
"use client";

import { motion } from "framer-motion";

export default function SplashScreen() {
    return (
        <motion.div
            className="flex items-center justify-center h-screen w-full body-color"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.svg
                viewBox="0 0 550 150"
                className="w-full max-w-150 text-gray-400 p-2"
                initial="hidden"
                animate="visible"
            >
                {/* 線描画 */}
                <motion.text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="150"
                    fontFamily="'Alex Brush', cursive"
                    fill="none"
                    strokeWidth="1"
                    stroke="currentColor"
                    strokeDasharray="1100"
                    strokeDashoffset="1100"
                    animate={{ strokeDashoffset: 0 }} // 描きながら表示
                    transition={{
                        duration: 2.5,
                        ease: "easeInOut",
                    }}
                >
                    Animora
                </motion.text>

                {/* 塗りつぶし */}
                <motion.text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="150"
                    fontFamily="'Alex Brush', cursive"
                    fill="currentColor"
                    stroke="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 2,
                        duration: 1,
                    }}
                >
                    Animora
                </motion.text>
            </motion.svg>
        </motion.div>
    );
}