"use client"

import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function WeaveCircleLoader() {
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const circleSize = width ? Math.min(width * 0.35, 150) : 80; // 最大150px
    const textSize = Math.min(circleSize / 6, 24);

    return (
        <div
            ref={ref}
            className="flex items-center justify-center w-full h-full bg-gray-50"
        >
            <div
                className="relative select-none"
                style={{
                    width: circleSize,
                    height: circleSize
                }}
            >
                {/* 点滅ラベル */}
                <motion.span
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full text-center text-white font-bold tracking-widest z-50"
                    style={{ fontSize: textSize }}
                    animate={{ opacity: [1, 0.8, 0.9, 0.6, 1] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1
                    }}
                >
                    LOADING
                </motion.span>

                {/* 背景グラデーション */}
                <motion.div
                    className="absolute w-full h-full rounded-[40%] bg-linear-to-b from-pink-400 to-pink-200 z-10"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "linear"
                    }}
                />

                {/* 円1 */}
                <motion.div
                    className="absolute w-full h-full rounded-[40%] bg-blue-400 opacity-40 origin-[50%_47%] z-20"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "linear"
                    }}
                />

                {/* 円2 */}
                <motion.div
                    className="absolute w-full h-full rounded-[40%] bg-yellow-400 opacity-20 origin-[50%_47%] z-30"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: "linear"
                    }}
                />

                {/* 円3 */}
                <motion.div
                    className="absolute w-full h-full rounded-[40%] bg-purple-400 opacity-40 origin-[50%_47%] z-40"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                        repeat: Infinity,
                        duration: 2.5,
                        ease: "linear"
                    }}
                />
            </div>
        </div>
    );
}