"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 450;

export default function RockerToggle() {
    const [isOn, setIsOn] = useState(true);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.4), 1.1)
        : 1;

    return (
        <div ref={ref} className="w-full h-full overflow-hidden flex justify-center items-center">
            <div className="relative w-[7em] h-[4em] text-[2em] font-bold uppercase text-gray-400" style={{scale}}>
                {/* Base */}
                <div className="absolute inset-x-0 top-[0.2em] bottom-0 bg-gray-400 border-[0.5em] border-gray-200" />

                {/* ON */}
                <motion.button
                    type="button"
                    role="switch"
                    aria-checked={isOn}
                    onClick={() => setIsOn(v => !v)}
                    whileTap={{ boxShadow: "inset 0 2px 0 rgba(0,0,0,0.25)" }}
                    className="absolute flex items-center justify-center bg-gray-300"
                    animate={{
                        x: isOn ? "0.5em" : "0.85em",
                        y: isOn ? "0.7em" : "0.4em",
                        rotate: isOn ? 0 : 15,
                        skewX: isOn ? 0 : 15,
                        width: isOn ? "3em" : "2.75em",
                        height: isOn ? "2.78em" : "2.68em",
                        backgroundColor: isOn ? "#0084d0" : "#ddd",
                        color: isOn ? "#fff" : "#888",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                    }}
                >
                    {/* ラベル */}
                    <span className="relative z-10 text-white">On</span>

                    {/* 厚み（左側） */}
                    <motion.div
                        className="absolute left-[-0.4em] bottom-[-0.45em] w-[0.4em] bg-gray-300"
                        animate={{
                            height: isOn ? "0em" : "2.68em",
                            skewY: isOn ? 0 : -65,
                            opacity: isOn ? 0 : 1,
                        }}
                        transition={{ duration: 0.15 }}
                    />
                </motion.button>

                {/* OFF */}
                <motion.button
                    type="button"
                    role="switch"
                    aria-checked={isOn}
                    whileTap={{ boxShadow: "inset 0 2px 0 rgba(0,0,0,0.25)" }}
                    onClick={() => setIsOn(v => !v)}
                    className="absolute flex items-center justify-center"
                    animate={{
                        x: isOn ? "3.4em" : "3.51em",
                        y: isOn ? "0.4em" : "0.7em",
                        rotate: isOn ? -15 : 0,
                        skewX: isOn ? -15 : 0,
                        width: isOn ? "2.75em" : "3em",
                        height: isOn ? "2.68em" : "2.78em",
                        backgroundColor: isOn ? "#ddd" : "#bd5757",
                        color: isOn ? "#888" : "#fff",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                    }}
                >
                    <span className="relative z-10">Off</span>

                    {/* 厚み（右側） */}
                    <motion.div
                        className="absolute right-[-0.375em] bottom-[-0.45em] w-[0.4em] bg-gray-300"
                        animate={{
                            height: isOn ? "2.7em" : "0em",
                            skewY: isOn ? 65 : 0,
                            opacity: isOn ? 1 : 0,
                        }}
                        transition={{ duration: 0.15 }}
                    />
                </motion.button>
            </div>
        </div>
    );
}