"use client"

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

type Phase = "draw" | "fade" | "wait";

export default function FootPrintPart() {
    const { ref, width, height } = useContainerSize<HTMLDivElement>();

    const baseWidth = 228;
    const scale = width ? Math.min(width / baseWidth, 1.3) : 1;

    const footprintSize = 26 * scale;
    const stepGapY = 26 * scale;
    const stepOffsetX = 16 * scale;
    const stepCount = 6 * scale;
    const totalHeight = stepGapY * stepCount;

    const color = "#8d7958";

    const [phase, setPhase] = useState<Phase>("draw");

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (phase === "draw") {
            // 足跡が全て表示されるまで
            timer = setTimeout(
                () => setPhase("fade"),
                stepCount * 400 + 600
            );
        }

        if (phase === "fade") {
            // 消える時間
            timer = setTimeout(() => setPhase("wait"), 500);
        }

        if (phase === "wait") {
            // 待機時間
            timer = setTimeout(() => setPhase("draw"), 800);
        }

        return () => clearTimeout(timer);
    }, [phase, stepCount]);

    return (
        <div ref={ref} className="overflow-hidden w-full h-full flex items-center justify-center">
            {phase !== "wait" && (
                <motion.svg
                    width={footprintSize * 2.5}
                    height={height}
                    viewBox={`-40 0 100 ${totalHeight}`}
                >
                    {Array.from({ length: stepCount }).map((_, i) => {
                        const x = i % 2 === 0 ? -stepOffsetX : stepOffsetX;
                        const y = totalHeight - i * stepGapY - footprintSize;

                        return (
                            <motion.g
                                key={i}
                                style={{ x, y }}
                                initial={{ opacity: 0, }}
                                animate={{
                                    opacity:
                                        phase === "draw"
                                            ? 1
                                            : phase === "fade"
                                                ? 0
                                                : 0,
                                }}
                                transition={{
                                    delay: phase === "draw" ? i * 0.4 : 0,
                                    duration: phase === "fade" ? 0.4 : 0.25,
                                    ease: "easeOut",
                                }}
                            >
                                <motion.svg
                                    width={footprintSize}
                                    height={(footprintSize * 25) / 30}
                                    viewBox="-30 -30 260 180"
                                    fill="none"
                                    className="shrink-0 origin-center"
                                >
                                    {/* 中央メイン */}
                                    <motion.path
                                        d="M 20 70
                                    C 20 40, 60 20, 100 10
                                    C 140 20, 180 40, 180 75
                                    C 180 90, 140 100, 100 85
                                    C 60 100, 20 90, 20 70 Z"
                                        fill={color}
                                    />

                                    {/* 左ドット */}
                                    <circle cx="0" cy="28" r="20" fill={color} />

                                    {/* 左中央 */}
                                    <circle cx="56" cy="-15" r="20" fill={color} />

                                    {/* 右中央 */}
                                    <circle cx="134" cy="-18" r="20" fill={color} />

                                    {/* 右中央 */}
                                    <circle cx="195" cy="26" r="20" fill={color} />
                                </motion.svg>
                            </motion.g>
                        );
                    })}
                </motion.svg>
            )}
        </div>
    );
}