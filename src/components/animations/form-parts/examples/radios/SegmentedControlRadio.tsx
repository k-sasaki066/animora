"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;
const titles = ["A", "B", "C", "D", "E"];

export default function SegmentedControlRadio() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.35), 1.3)
        : 1;
    const [value, setValue] = useState("A");

    return (
        <div ref={ref} className="w-full h-full overflow-hidden">
            <motion.div className="w-full h-full flex justify-center items-center" animate={{scale}}>
                <div
                    role="radiogroup"
                    aria-label="Segmented control"
                    className="flex overflow-hidden border border-gray-300"
                >
                    {titles.map((title, index) => (
                        <button
                            key={title}
                            type="button"
                            role="radio"
                            aria-checked={value === title}
                            tabIndex={value === title ? 0 : -1}
                            onPointerDown={(e) => {
                                e.preventDefault();
                                setValue(title);
                                e.currentTarget.focus();
                            }}
                            onKeyDown={(e) => {
                                const i = titles.indexOf(value);

                                if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                                    e.preventDefault();
                                    setValue(titles[(i + 1) % titles.length]);
                                }

                                if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                                    e.preventDefault();
                                    setValue(titles[(i - 1 + titles.length) % titles.length]);
                                }

                                if (e.key === " " || e.key === "Enter") {
                                    e.preventDefault();
                                }
                            }}
                            className="relative flex-1 w-11 h-11 text-gray-400"
                        >
                            {value === title && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-pink-600"
                                    transition={{
                                        type: "spring",
                                        stiffness: 360,
                                        damping: 30,
                                    }}
                                />
                            )}

                            <span
                                className={`relative z-10 flex h-full items-center justify-center transition-colors duration-200 text-xl font-bold
                                ${value === title ? "text-white" : "text-gray-400"}`}
                            >
                                {title}
                            </span>

                            {index !== titles.length - 1 && (
                                <span className="absolute right-0 top-0 h-full w-px bg-gray-300" />
                            )}
                        </button>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}