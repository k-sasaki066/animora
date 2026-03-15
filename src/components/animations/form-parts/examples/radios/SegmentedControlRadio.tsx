import { motion, useReducedMotion } from "framer-motion";
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

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    return (
        <div ref={ref} className="w-full h-full overflow-hidden">
            <motion.div
                className="w-full h-full flex justify-center items-center"
                animate={{ scale }}
            >
                <div className="flex overflow-hidden border border-gray-300">
                    {titles.map((title, index) => {
                        const checked = value === title;

                        return (
                            <label
                                key={title}
                                className="relative flex-1 w-11 h-11 cursor-pointer"
                            >
                                {/* native radio */}
                                <input
                                    type="radio"
                                    name="segment"
                                    value={title}
                                    checked={checked}
                                    onChange={() => setValue(title)}
                                    className="sr-only"
                                />

                                {/* animated background */}
                                {checked && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-pink-600"
                                        transition={
                                            reduce
                                                ? { duration: 0 }
                                                : {
                                                    type: "spring",
                                                    stiffness: 360,
                                                    damping: 30,
                                                }
                                        }
                                    />
                                )}

                                {/* text */}
                                <span
                                    className={`relative z-10 flex h-full items-center justify-center text-xl font-bold transition-colors duration-200 ${checked ? "text-white" : "text-gray-400"}`}
                                >
                                    {title}
                                </span>

                                {/* divider */}
                                {index !== titles.length - 1 && (
                                    <span className="absolute right-0 top-0 h-full w-px bg-gray-300" />
                                )}
                            </label>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}