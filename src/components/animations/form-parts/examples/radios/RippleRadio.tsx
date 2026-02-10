"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;

export default function RippleRadio() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.6), 1.3)
        : 1;
    const [value, setValue] = useState("1");

    const values = ["1", "2", "3"];
    const checkedColor = "rgb(51, 122, 183)";
    const borderColor = "rgba(0,0,0,0.54)";

    return (
        <div ref={ref} className="w-full h-full overflow-hidden flex justify-center items-center">
            <motion.div
                className="space-y-4"
                animate={{ scale }}
                role="radiogroup"
                aria-label="Ripple radio group"
            >
                {values.map((v) => {
                    const checked = value === v;

                    return (
                        <label
                            key={v}
                            role="radio"
                            aria-checked={checked}
                            tabIndex={checked ? 0 : -1}
                            className="flex items-center gap-3 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                            onPointerDown={(e) => {
                                e.preventDefault();
                                setValue(v);
                                e.currentTarget.focus();
                            }}
                            onKeyDown={(e) => {
                                const currentIndex = values.indexOf(value);

                                if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                                    e.preventDefault();
                                    setValue(values[(currentIndex + 1) % values.length]);
                                }

                                if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                                    e.preventDefault();
                                    setValue(
                                        values[(currentIndex - 1 + values.length) % values.length]
                                    );
                                }

                                if (e.key === " " || e.key === "Enter") {
                                    e.preventDefault();
                                }
                            }}
                        >
                            <input
                                type="radio"
                                name="g"
                                value={v}
                                checked={checked}
                                onChange={() => setValue(v)}
                                className="hidden"
                            />

                            {/* radio outer */}
                            <motion.div
                                className="relative flex items-center justify-center rounded-full border-2"
                                style={{
                                    width: 20,
                                    height: 20,
                                    borderColor: checked ? checkedColor : borderColor,
                                }}
                                animate={
                                    checked
                                        ? {
                                            boxShadow: [
                                                "0 0 0 0 rgba(0,0,0,0)",
                                                "0 0 0 15px rgba(0,0,0,0.1)",
                                                "0 0 0 15px rgba(0,0,0,0)",
                                            ],
                                        }
                                        : {}
                                }
                                transition={{
                                    duration: 0.2,
                                    ease: "linear",
                                }}
                            >
                                {/* radio inner */}
                                <motion.div
                                    className="rounded-full"
                                    style={{
                                        width: 10,
                                        height: 10,
                                        backgroundColor: checkedColor,
                                    }}
                                    initial={false}
                                    animate={{ scale: checked ? 1 : 0 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>

                            <span className="text-gray-800">Option {v}</span>
                        </label>
                    );
                })}
            </motion.div>
        </div>
    );
}