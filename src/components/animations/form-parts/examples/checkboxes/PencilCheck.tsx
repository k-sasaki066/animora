"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;

type Option = {
    id: string;
    label: string;
};

const options: Option[] = [
    { id: "study", label: "Study" },
    { id: "walk", label: "Take a walk" },
    { id: "shopping", label: "Shopping" },
];

export default function PencilCheck() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.35), 1.4)
        : 1;

    const [checked, setChecked] = useState<boolean[]>(
        options.map(() => false)
    );
    const [touched, setTouched] = useState<boolean[]>(
        options.map(() => false)
    );
    const [isAnimating, setIsAnimating] = useState<boolean[]>(
        options.map(() => false)
    );

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const toggle = (index: number) => {
        if (isAnimating[index]) return;

        setIsAnimating(prev =>
            prev.map((v, i) => (i === index ? true : v))
        );

        setChecked((prev) =>
            prev.map((v, i) => (i === index ? !v : v))
        );

        setTouched((prev) =>
            prev.map((v, i) => (i === index ? true : v))
        );
    };

    return (
        <div
            ref={ref}
            className="w-full h-full flex justify-center items-center bg-cover bg-center overflow-hidden"
            style={{
                backgroundImage:
                    "url('https://s22.postimg.cc/gzyyouldd/grey-paper-texture.jpg')",
            }}
        >
            <motion.div
                className="flex flex-col justify-start space-y-4 p-4"
                animate={{ scale }}
            >
                {options.map((opt, index) => {
                    const isChecked = checked[index];

                    return (
                        <label
                            key={opt.id}
                            className="flex items-center space-x-4 cursor-pointer select-none relative"
                        >
                            {/* チェックボックス */}
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggle(index)}
                                className="absolute w-full h-full opacity-0 cursor-pointer peer"
                            />

                            {/* チェックボックス本体 */}
                            <div className="relative w-6 h-6 border-2 border-black rounded-sm shrink-0 peer-focus-visible:ring-2 peer-focus-visible:ring-[#f69e5b]">
                                {/* チェックマーク */}
                                <AnimatePresence>
                                    {isChecked && (
                                        <motion.svg
                                            className="absolute inset-0 w-full h-full text-red-600"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={3}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <motion.path
                                                d="M4 12 L9 17 L20 6"
                                                initial={{
                                                    strokeDasharray: 100,
                                                    strokeDashoffset: 100,
                                                }}
                                                animate={{
                                                    strokeDashoffset: 0,
                                                    transition: reduce
                                                        ? { duration: 0 }
                                                        : { duration: 1.4, ease: "easeInOut", delay: 0.15 },
                                                }}
                                                exit={{
                                                    strokeDashoffset: 100,
                                                    transition: reduce
                                                        ? { duration: 0 }
                                                        : { duration: 0.3, ease: "easeInOut" },
                                                }}
                                            />
                                        </motion.svg>
                                    )}
                                </AnimatePresence>

                                {/* 鉛筆 */}
                                <AnimatePresence>
                                    {touched[index] && isChecked && (
                                        <motion.div
                                            className="absolute -top-20 left-0 w-44 h-2 flex items-center z-10 pointer-events-none"
                                            initial={{ x: 0, y: 0, opacity: 0 }}
                                            animate={{
                                                x: [0, 8, 11, 13, 16, 280, 280],
                                                y: [0, 2, -1, -6, -8, -280, -280],
                                                opacity: [1, 1, 1, 1, 1, 1, 0],
                                            }}
                                            transition={
                                                reduce
                                                    ? { duration: 0 }
                                                    : { duration: 1.4, times: [0, 0.3, 0.4, 0.5, 0.6, 0.95, 1] }
                                            }
                                            onAnimationComplete={() => {
                                                setIsAnimating((prev) =>
                                                    prev.map((v, i) => (i === index ? false : v))
                                                );
                                            }}
                                        >
                                            <img src="/pencil.png" alt="pencil" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* 消しゴム */}
                                <AnimatePresence>
                                    {touched[index] && !isChecked && (
                                        <motion.div
                                            className="absolute -top-23 -left-18 w-40 h-2 flex items-center z-10 pointer-events-none"
                                            initial={{ x: 0, y: -10, opacity: 0, rotate: 135 }}
                                            animate={{
                                                x: [0, -4, 4, -4, 4, 0, 0],
                                                y: [-2, -4, -2, -6, -8, -220, -220],
                                                opacity: [1, 1, 1, 1, 1, 1, 0],
                                            }}
                                            transition={
                                                reduce
                                                    ? { duration: 0 }
                                                    : { duration: 1.4, times: [0, 0.1, 0.2, 0.3, 0.4, 0.95, 1] }
                                            }
                                            onAnimationComplete={() => {
                                                setIsAnimating((prev) =>
                                                    prev.map((v, i) => (i === index ? false : v))
                                                );
                                            }}
                                        >
                                            <img src="/pencil.png" alt="pencil" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <span className="text-lg text-gray-800">
                                {opt.label}
                            </span>
                        </label>
                    );
                })}
            </motion.div>
        </div>
    );
};