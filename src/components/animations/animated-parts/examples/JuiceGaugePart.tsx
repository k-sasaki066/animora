"use client"

import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function JuiceGaugePart() {
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const gaugeWidth = width ? Math.min(width * 0.14, 60): 32;
    const gaugeHeight = gaugeWidth * 2;

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <div
                className="relative flex justify-center items-end"
                style={{
                    width: gaugeWidth,
                    height: gaugeHeight + gaugeWidth * 0.8,
                }}
            >
                <div
                    className="relative"
                    style={{
                        width: gaugeWidth,
                        height: gaugeHeight,
                    }}
                >
                    {/* 容器 */}
                    <div className="absolute inset-0 rounded-sm bg-[#e4e0d7] overflow-hidden border-t border-[#bbb6aa] border-b-4" />

                    {/* 液体 */}
                    <motion.div
                        className="absolute bottom-1 left-1 right-1 bg-[#612329] z-10"
                        style={{
                            height: "85%",
                            transformOrigin: "bottom"
                        }}
                        animate={{
                            scaleY: [1, 0.05],
                        }}
                        transition={{
                            duration: 2.2,
                            repeatDelay: 0.5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </div>

                {/* ストロー */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 bg-[#eb6b3e] origin-bottom"
                    style={{
                        width: gaugeWidth * 0.15,
                        height: gaugeHeight + gaugeWidth * 0.8,
                        bottom: 4,
                        transform: "rotate(8deg)",
                    }}
                />
            </div>
        </div>
    );
}