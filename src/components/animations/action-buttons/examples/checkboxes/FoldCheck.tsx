"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 380;

export default function FoldCheck() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.35), 1.2)
        : 1;
    const [checked, setChecked] = useState<boolean[]>([
        true,
        false,
        false,
        false,
    ]);
    const pointerDownRef = useRef<number | null>(null);

    const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.section className="mx-auto p-4 space-y-4" animate={{ scale }}>
                {items.map((label, index) => {
                    const isChecked = checked[index];

                    return (
                        <label
                            key={label}
                            tabIndex={0}
                            role="checkbox"
                            aria-checked={isChecked}
                            className="flex items-center justify-center gap-5 cursor-pointer select-none font-sans text-sm leading-snug"
                            onPointerDown={(e) => {
                                e.preventDefault();
                                pointerDownRef.current = index;
                            }}
                            onPointerUp={() => {
                                if (pointerDownRef.current === index) {
                                    setChecked((prev) =>
                                    prev.map((v, i) => (i === index ? !v : v))
                                    );
                                }
                                pointerDownRef.current = null;
                            }}

                            onPointerLeave={() => {
                                pointerDownRef.current = null;
                            }}
                        >
                            {/* hidden checkbox */}
                            <input
                                type="checkbox"
                                checked={isChecked}
                                readOnly
                                className="hidden"
                            />

                            {/* checkbox visual */}
                            <div className="relative w-4 h-4">
                                {/* box */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        scale: isChecked ? 0.6 : 1,
                                        opacity: isChecked ? 0 : 1,
                                    }}
                                    transition={{
                                        duration: 0.25,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 border-2 border-gray-200 bg-white"
                                />

                                {/* check */}
                                <AnimatePresence>
                                    {isChecked && (
                                        <motion.span
                                            initial={{
                                                rotate: 0,
                                                height: "1rem",
                                                opacity: 0,
                                            }}
                                            animate={{
                                                rotate: -45,
                                                height: "0.5rem",
                                                opacity: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                rotate: 6,
                                                y: 3,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                ease: "easeInOut",
                                            }}
                                            className="absolute left-0 top-1 w-4 border-b-2 border-l-2 border-teal-500 origin-center"
                                        />
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* label text */}
                            <span className="text-xl uppercase">{label}</span>
                        </label>
                    );
                })}
            </motion.section>
        </div>
    );
}