"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;

const images = [
    "https://picsum.photos/id/139/180/120",
    "https://picsum.photos/id/155/180/120",
    "https://picsum.photos/id/537/180/120",
    "https://picsum.photos/id/526/180/120",
];

export default function CardCheck() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.35), 1.4)
        : 1;

    const [checkedStates, setCheckedStates] = useState<boolean[]>(
        Array(images.length).fill(false)
    );

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const toggleCheck = (index: number) => {
        setCheckedStates(prev => prev.map((v, i) => (i === index ? !v : v)));
    };

    return (
        <div ref={ref} className="w-full h-full bg-[#eee] p-2">
            <motion.div
                className="w-full h-full flex justify-center items-center"
                animate={{ scale }}
            >
                <form className="flex flex-wrap items-center justify-center gap-2">
                    {images.map((image, i) => {
                        const id = `card-${i}`;
                        const isChecked = checkedStates[i];

                        return (
                            <label
                                key={id}
                                htmlFor={id}
                                className="flex flex-col items-center bg-white rounded-xs shadow-md m-1 w-20 aspect-square cursor-pointer overflow-hidden relative focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
                            >
                                {/* チェックボックス */}
                                <input
                                    id={id}
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => toggleCheck(i)}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 peer"
                                />

                                {/* 画像部分 */}
                                <div className="relative w-full h-2/3 overflow-hidden rounded-t-xs">
                                    <img
                                        src={image}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />

                                    {/* overlay */}
                                    <motion.div
                                        className="absolute inset-0 rounded-t-xs bg-[#474764] pointer-events-none"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: isChecked ? 0.66 : 0,
                                        }}
                                        whileHover={{ opacity: 0.5 }}
                                        transition={
                                            reduce
                                                ? { duration: 0 }
                                                : { duration: 0.15 }
                                        }
                                    />

                                    {/* チェックマーク */}
                                    <AnimatePresence>
                                        {isChecked && (
                                            <motion.div
                                                className="absolute inset-0 flex items-center justify-center text-white text-3xl pointer-events-none"
                                                initial={{ bottom: "-4em", opacity: 0 }}
                                                animate={{ bottom: 0, opacity: 1 }}
                                                exit={{ bottom: "-4em", opacity: 0 }}
                                                transition={
                                                    reduce
                                                        ? { duration: 0 }
                                                        : { duration: 0.2 }
                                                }
                                            >
                                                ✓
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* テキスト */}
                                <div className="p-2 w-full">
                                    <div className="h-0.5 w-15 bg-gray-400 rounded mb-2" />
                                    <div className="h-0.5 w-10 bg-gray-400 rounded" />
                                </div>
                            </label>
                        );
                    })}
                </form>
            </motion.div>
        </div>
    );
}