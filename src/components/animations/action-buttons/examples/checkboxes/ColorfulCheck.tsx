"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;

export default function ColorfulCheck() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.35), 1.3)
        : 1;
    const [checked, setChecked] = useState([false, false, false, false, false]);
    const pointerDownRef = useRef<number | null>(null);

    const labels = ["Danger", "Success", "Primary", "Warning", "Default"];

    const colors = ["red", "green", "blue", "yellow", "gray"];
    const colorMap: Record<string, { stroke: string; fill: string; ripple: string }> = {
        red: { stroke: "stroke-red-600", fill: "fill-red-600", ripple: "bg-red-600/30" },
        green: { stroke: "stroke-green-600", fill: "fill-green-600", ripple: "bg-green-600/30" },
        blue: { stroke: "stroke-blue-600", fill: "fill-blue-600", ripple: "bg-blue-600/30" },
        yellow: { stroke: "stroke-yellow-400", fill: "fill-yellow-400", ripple: "bg-yellow-400/30" },
        gray: { stroke: "stroke-gray-300", fill: "fill-gray-300", ripple: "bg-gray-300/20" },
    };

    const toggle = (index: number) => {
        setChecked((prev) =>
        prev.map((v, i) => (i === index ? !v : v))
        );
    };

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center bg-gray-800">
            <motion.div className="px-8 py-4 space-y-2 rounded-md border border-white/50" animate={{ scale }}>

                {labels.map((label, i) => {
                    const isChecked = checked[i];

                    return (
                        <div
                            key={i}
                            className="relative flex items-center cursor-pointer select-none pl-8 text-white text-sm"
                            onPointerDown={(e) => {
                                e.preventDefault();
                                pointerDownRef.current = i;
                            }}
                            onPointerUp={() => {
                                if (pointerDownRef.current === i) toggle(i);
                                pointerDownRef.current = null;
                            }}
                            onPointerLeave={() => {
                                pointerDownRef.current = null;
                            }}
                        >
                            {/* Box */}
                            <motion.span
                                className={`absolute left-0 w-4 h-4 border border-white`}
                                animate={{
                                    scale: isChecked ? 0 : 1,
                                    rotate: isChecked ? -180 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Circle */}
                            <AnimatePresence>
                                {isChecked && (
                                    <motion.span
                                        className={`absolute -top-0.5 -left-1 w-6 h-6 rounded-full z-0 ${colorMap[colors[i]].ripple}`}
                                        initial={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        animate={{
                                            opacity: [1, 1, 1, 0],
                                            scale: [0.8, 1, 1.3, 1.5],
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            times: [0, 0.3, 0.6, 1],
                                            ease: "linear"
                                        }}
                                    />
                                )}
                            </AnimatePresence>

                            {/* Check */}
                            <AnimatePresence>
                                {isChecked && (
                                    <motion.svg
                                        className="absolute -left-0.5 top-0 w-5 h-5 z-10"
                                        viewBox="0 0 24 24"
                                        initial={{
                                            rotate: 270,
                                            scale: 0.5,
                                            opacity: 0
                                        }}
                                        animate={{
                                            rotate: 0,
                                            scale: 1.2,
                                            opacity: 1
                                        }}
                                        exit={{
                                            rotate: 270,
                                            scale: 0.5,
                                            opacity: 0
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut"
                                        }}
                                        style={{
                                            originX: 0.5,
                                            originY: 0.5
                                        }}
                                    >
                                        <motion.path
                                            d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z"
                                            className={`${colorMap[colors[i]].fill} ${colorMap[colors[i]].stroke}`}
                                            fill="none"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            exit={{ pathLength: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    </motion.svg>
                                )}
                            </AnimatePresence>

                            {/* Label */}
                            <span className="ml-2">{label}</span>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};