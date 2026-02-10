"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";

const options = [0, 1, 2, 3, 4];

export default function RadioSlideButton() {
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>();

    const [active, setActive] = useState(0);

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center bg-amber-500">
            <div className="w-1/2">
                <h1 className="mb-4 font-bold" style={{ fontSize }}>
                    Select one:
                </h1>

                <div
                    className="relative flex justify-between"
                    role="radiogroup"
                    aria-label="Select one"
                >
                    {options.map((i) => {
                        const checked = active === i;

                        return (
                            <button
                                key={i}
                                type="button"
                                role="radio"
                                aria-checked={checked}
                                tabIndex={checked ? 0 : -1}
                                className="relative w-[15%] aspect-square rounded-full bg-white/20 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                onPointerDown={(e) => {
                                    e.preventDefault();
                                    setActive(i);
                                    e.currentTarget.focus();
                                }}
                                onKeyDown={(e) => {
                                    const currentIndex = options.indexOf(active);

                                    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                                        e.preventDefault();
                                        setActive(
                                            options[(currentIndex + 1) % options.length]
                                        );
                                    }

                                    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                                        e.preventDefault();
                                        setActive(
                                            options[
                                                (currentIndex - 1 + options.length) %
                                                    options.length
                                            ]
                                        );
                                    }

                                    if (e.key === " " || e.key === "Enter") {
                                        e.preventDefault();
                                    }
                                }}
                            >
                                {checked && (
                                    <motion.span
                                        layoutId="slider"
                                        className="absolute w-[70%] aspect-square rounded-full bg-white"
                                        animate={{ scale: [1, 0.5, 1] }}
                                        transition={{
                                            scale: {
                                                duration: 0.3,
                                                ease: "easeInOut",
                                            },
                                        }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}