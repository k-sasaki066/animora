"use client"

import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { ECG_PATHS } from "./ecgPaths";

export default function ECGLinePart() {
    const { ref, width, height } = useContainerSize<HTMLDivElement>();

    const mode = width && width >= 600 ? "monitor" : "card";
    const duration = mode === "monitor" ? 3.2 : 2.4;
    const ecgHeight = height ? Math.min(height * 0.81, 240) : 110;

    return (
        <div
            ref={ref}
            className="w-full h-full flex justify-center"
        >
            <div
                className="w-[85%] max-w-120 flex items-center overflow-hidden rounded-lg my-auto"
                style={{ height: ecgHeight }}
            >
                <svg
                    viewBox="0 0 1000 200"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                >
                    {/* グリッド（薄く） */}
                    <defs>
                        <pattern
                            id="grid"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M 40 0 L 0 0 0 40"
                                fill="none"
                                stroke="rgba(0,255,0,0.15)"
                                strokeWidth="1"
                            />
                        </pattern>
                    </defs>

                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* ECG */}
                    <motion.path
                        pathLength={1}
                        d={ECG_PATHS[mode]}
                        fill="none"
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray={1}
                        strokeDashoffset={1}
                        animate={{
                            strokeDashoffset: [1, 0]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration,
                            ease: "linear",
                        }}
                    />
                </svg>
            </div>
        </div>
    );
}