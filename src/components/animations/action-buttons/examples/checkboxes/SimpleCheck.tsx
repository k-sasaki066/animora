"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 380;

type Option = {
    id: string;
    label: string;
};

const options: Option[] = [
    { id: "marketing", label: "Marketing Email" },
    { id: "alert", label: "Alert Email" },
    { id: "account", label: "Account Email" },
];

export default function SimpleCheck() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.35), 1.2)
        : 1;
    const [checked, setChecked] = useState<boolean[]>(
        options.map((_, i) => i === 0)
    );
    const pointerDownRef = useRef<number | null>(null);

    const toggle = (index: number) => {
        setChecked((prev) =>
            prev.map((v, i) => (i === index ? !v : v))
        );
    };

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.div className="flex flex-col gap-4" animate={{ scale }}>
                {options.map((opt, index) => {
                    const isChecked = checked[index];

                    return (
                        <button
                            key={opt.id}
                            role="checkbox"
                            aria-checked={isChecked}
                            className={`group flex items-center gap-3 select-none text-gray-400 hover:text-blue-400 transition-colors`}
                            onPointerDown={(e) => {
                                e.preventDefault();
                                pointerDownRef.current = index;
                            }}
                            onPointerUp={() => {
                                if (pointerDownRef.current === index) toggle(index);
                                pointerDownRef.current = null;
                            }}
                            onPointerLeave={() => {
                                pointerDownRef.current = null;
                            }}
                        >
                            <span className="relative w-6 h-6">
                                <AnimatePresence>
                                    {!isChecked && (
                                        <motion.span
                                            key="unchecked"
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.8, opacity: 0 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute inset-0 border-2 border-gray-400 group-hover:border-blue-400 rounded-sm"
                                        />
                                    )}

                                    {isChecked && (
                                        <motion.span
                                            key="checked"
                                            initial={{ scale: 0.6, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.6, opacity: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 20,
                                            }}
                                            className="absolute inset-0 bg-blue-400 rounded-sm flex items-center justify-center text-white text-xl font-bold"
                                        >
                                            ✓
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </span>
                            <span className={`text-2xl ${isChecked ? "text-blue-400" : ""}`}>
                                {opt.label}
                            </span>
                        </button>
                    );
                })}
            </motion.div>
        </div>
    );
};