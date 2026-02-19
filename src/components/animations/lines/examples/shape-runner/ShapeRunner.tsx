"use client"

import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import Character from "./Character";

const BASE_WIDTH = 400;

export default function ShapeRunnerGreen() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.7), 1)
        : 1;

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.div className="relative w-full h-50 overflow-hidden" animate={{scale}}>
                {/* 半円 */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1/2 h-19 overflow-hidden">
                    <motion.div
                        className="absolute bottom-0 -left-3 flex will-change-transform"
                        animate={{ x: [0, -120] }}
                        transition={{
                            duration: 0.6,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {[...Array(12), ...Array(12)].map((_, i) => (
                            <svg
                                key={i}
                                width="120"
                                height="70"
                                viewBox="0 0 120 70"
                                className="shrink-0"
                            >
                                <path
                                    d="M 0 65 A 60 60 0 0 1 120 65"
                                    fill="transparent"
                                    stroke="#def5e0"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                />
                            </svg>
                        ))}
                    </motion.div>
                </div>

                {/* プレイヤー */}
                <Character className="absolute left-1/2 -translate-x-1/2 bottom-12.5" />
            </motion.div>
        </div>
    );
}