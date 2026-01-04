"use client"

import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useState, useEffect } from "react";

const cookies = [
    [
        { top: 0.16, left: 0.16 },
        { top: 0.08, left: 0.5 },
        { top: 0.5, left: 0.66 },
    ],
    [
        { top: 0.25, left: 0.25 },
        { top: 0.08, left: 0.58 },
        { top: 0.5, left: 0.66 },
    ],
    [
        { top: 0.08, left: 0.5 },
        { top: 0.58, left: 0.16 },
        { top: 0.5, left: 0.58 },
    ],
    [
        { top: 0.08, left: 0.33 },
        { top: 0.41, left: 0.16 },
        { top: 0.5, left: 0.58 },
    ],
];

export default function CookiePart() {
    const { ref, width, height } = useContainerSize<HTMLDivElement>();
    const [visibleIndex, setVisibleIndex] = useState(0);

    useEffect(() => {
        if (!width) return;

        const interval = setInterval(() => {
            setVisibleIndex((prev) => (prev + 1 > cookies.length ? 0 : prev + 1));
        }, 1000); // 1秒ごとに1枚ずつ消す
        return () => clearInterval(interval);
    }, [width]);

    const cookieSize = Math.min(width * 0.16, 70);
    const centerX = width / 2;
    const centerY = height / 2;

    const circleCookies = cookies.slice(0, 3);
    const topCookie = cookies[3];

    const angleStep = (2 * Math.PI) / circleCookies.length;
    const radius = cookieSize * 0.6; // 中心からの距離

    return (
        <div ref={ref} className="relative w-full h-full mx-auto">
            {/* 円形に配置 */}
            {circleCookies.map((chipPositions, i) => {
                const angle = i * angleStep - Math.PI / 2;
                const x = centerX + radius * Math.cos(angle) - cookieSize / 2;
                const y = centerY + radius * Math.sin(angle) - cookieSize / 2;

                return (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-[#f8b261] border-2 border-[#ce8b55]"
                        style={{
                            left: x,
                            top: y,
                            width: cookieSize,
                            height: cookieSize,
                        }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: visibleIndex > i ? 0 : 1 }}
                        transition={{ duration: 0.1 }}
                    >
                        {chipPositions.map((pos, j) => (
                            <div
                                key={j}
                                className="absolute rounded-full bg-[#724c44]"
                                style={{
                                    width: cookieSize * 0.15,
                                    height: cookieSize * 0.15,
                                    top: pos.top * cookieSize,
                                    left: pos.left * cookieSize,
                                }}
                            />
                        ))}
                    </motion.div>
                );
            })}

            {/* 上に重ねる1枚 */}
            <motion.div
                className="absolute rounded-full bg-[#f8b261] border-2 border-[#ce8b55]"
                style={{
                    width: cookieSize,
                    height: cookieSize,
                    left: centerX - cookieSize / 2,
                    top: centerY - cookieSize / 2,
                    zIndex: 10,
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: visibleIndex > 3 ? 0 : 1 }}
                transition={{ duration: 0.1 }}
            >
                {topCookie.map((pos, j) => (
                    <div
                        key={j}
                        className="absolute rounded-full bg-[#724c44]"
                        style={{
                            width: cookieSize * 0.15,
                            height: cookieSize * 0.15,
                            top: pos.top * cookieSize,
                            left: pos.left * cookieSize,
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
}