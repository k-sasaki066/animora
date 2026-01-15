"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 350;

export default function ColorShiftToggle() {
    const [checked, setChecked] = useState(false);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.3)
        : 1;

    return (
        <div ref={ref} className="relative w-full h-full flex justify-center items-center">
            <motion.button
                type="button"
                role="switch"
                aria-checked={checked}
                onClick={() => setChecked(v => !v)}
                whileTap={{ y: 2 }}
                className="relative w-26 h-12 rounded overflow-hidden cursor-pointer"
                animate={{ scale }}
            >
                {/* 背景 */}
                <motion.div
                    className="absolute inset-0 rounded"
                    animate={{
                        backgroundColor: checked ? "#fcebeb" : "#ecf7fd",
                    }}
                    transition={{ duration: 0.3 }}
                />

                {/* Knob */}
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 left-2 w-9 h-9 rounded flex items-center justify-center text-xs font-bold text-white z-1"
                    animate={{
                        x: checked ? 52 : 0,
                        backgroundColor: checked ? "#f44336" : "#03a9f4",
                        color: checked ? "#4e4e4e" : "#fff",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 30
                    }}
                />

                {/* YES */}
                <motion.span
                    className="absolute top-1/2 -translate-y-1/2 left-3.5 text-xs font-bold z-10"
                    animate={{
                        color: checked ? "#a2a6ba" : "#fff",
                    }}
                    transition={{ duration: 0.3 }}
                >
                    YES
                </motion.span>

                {/* NO */}
                <motion.span
                    className="absolute top-1/2 -translate-y-1/2 right-4 text-xs font-bold z-10"
                    animate={{
                        color: checked ? "#fff" : "#a2a6ba",
                    }}
                    transition={{ duration: 0.3 }}
                >
                    NO
                </motion.span>
            </motion.button>
        </div>
    );
}