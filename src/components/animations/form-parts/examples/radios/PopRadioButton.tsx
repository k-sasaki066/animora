"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;
const lines = [
    { x: 0, y: -22, w: 2, h: 10 },
    { x: 18, y: -12, r: -55 },
    { x: 24, y: 0 },
    { x: 18, y: 18, r: 55 },
    { x: -18, y: -12, r: 55 },
    { x: -24, y: 0 },
    { x: -18, y: 18, r: -55 },
    { x: 0, y: 22, w: 2, h: 10 },
];

export default function PopRadioButton() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.3)
        : 1;

    const [checked, setChecked] = useState(0);
    const values = [0, 1, 2];

    return (
        <div ref={ref} className="w-full h-full overflow-hidden flex justify-center items-center bg-[#50a7c2]">
            <motion.div animate={{ scale }}>
                <div
                    className="flex flex-col gap-4"
                    role="radiogroup"
                    aria-label="Options"
                >
                    {values.map((i) => {
                        const isChecked = checked === i;

                        return (
                            <button
                                key={i}
                                type="button"
                                role="radio"
                                aria-checked={isChecked}
                                tabIndex={isChecked ? 0 : -1}
                                className="relative flex items-center gap-4 px-4 py-2"
                                onPointerDown={(e) => {
                                    e.preventDefault();
                                    setChecked(i);
                                    e.currentTarget.focus();
                                }}
                                onKeyDown={(e) => {
                                    const currentIndex = values.indexOf(checked);

                                    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                                        e.preventDefault();
                                        setChecked(
                                            values[(currentIndex + 1) % values.length]
                                        );
                                    }

                                    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                                        e.preventDefault();
                                        setChecked(
                                            values[
                                                (currentIndex - 1 + values.length) %
                                                    values.length
                                            ]
                                        );
                                    }

                                    if (e.key === " " || e.key === "Enter") {
                                        e.preventDefault();
                                    }
                                }}
                            >
                                <div className="relative w-3 h-3">
                                    {/* radio */}
                                    <div className="absolute inset-0 rounded-full bg-white" />

                                    {/* 円アニメーション */}
                                    <motion.div
                                        className="absolute inset-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white pointer-events-none"
                                        initial={false}
                                        animate={
                                            isChecked
                                                ? { scale: [10, 0.5, 1], opacity: 1 }
                                                : { opacity: 0 }
                                        }
                                        transition={{ duration: 0.35 }}
                                    >
                                        {lines.map((l, idx) => (
                                            <motion.span
                                                key={idx}
                                                className="absolute left-1/2 top-1/2 bg-white"
                                                style={{
                                                    width: l.w ?? 10,
                                                    height: l.h ?? 2,
                                                    transform: "translate(-50%, -50%)",
                                                }}
                                                initial={{
                                                    opacity: 0,
                                                    x: 0,
                                                    y: 0,
                                                    rotate: l.r ?? 0
                                                }}
                                                animate={
                                                    isChecked
                                                        ? {
                                                            opacity: [0, 1, 0],
                                                            x: l.x ?? 0,
                                                            y: l.y ?? 0,
                                                            width: 0,
                                                            height: 0,
                                                        }
                                                        : {}
                                                }
                                                transition={{
                                                    delay: 0.2,
                                                    duration: 0.9,
                                                    ease: "easeOut",
                                                }}
                                            />
                                        ))}
                                    </motion.div>
                                </div>

                                {/* ラベル */}
                                <span className="uppercase text-green-900 ml-2">
                                    option {i + 1}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </motion.div>
        </div>
    );
}