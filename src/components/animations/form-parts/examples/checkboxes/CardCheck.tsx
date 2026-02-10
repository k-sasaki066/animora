"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
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
    const pointerDownRef = useRef<number | null>(null);

    const toggleCheck = (index: number) => {
        setCheckedStates((prev) => {
            const newStates = [...prev];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    return (
        <div ref={ref} className="w-full h-full bg-[#eee] p-2">
            <motion.div className="w-full h-full flex justify-center items-center" animate={{scale}}>
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {images.map((image, i) => (
                        <motion.div
                            key={i}
                            role="checkbox"
                            aria-checked={checkedStates[i]}
                            className="flex flex-wrap items-start bg-white rounded-xs shadow-md m-1 w-20 aspect-square overflow-hidden cursor-pointer"
                            onPointerDown={(e) => {
                                e.preventDefault();
                                pointerDownRef.current = i;
                            }}
                            onPointerUp={() => {
                                if (pointerDownRef.current === i) toggleCheck(i);
                                pointerDownRef.current = null;
                            }}
                            onPointerLeave={() => {
                                pointerDownRef.current = null;
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="relative w-full h-2/3 overflow-hidden rounded-t-xs">
                                <img src={image} alt="" className="w-full h-full object-cover" />
                                <motion.div
                                    className="absolute inset-0 rounded-t-xs bg-[#474764]"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 0.5 }}
                                    animate={{ opacity: checkedStates[i] ? 0.66 : 0 }}
                                    transition={{ duration: 0.15 }}
                                />

                                <AnimatePresence>
                                    {checkedStates[i] && (
                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center text-white text-3xl"
                                            initial={{
                                                bottom: "-4em",
                                                opacity: 0
                                            }}
                                            animate={{
                                                bottom: 0,
                                                opacity: 1,
                                            }}
                                            exit={{
                                                bottom: "-4em",
                                                opacity: 0
                                            }}
                                            transition={{
                                                duration: 0.2
                                            }}
                                        >
                                            ✓
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="p-2 w-full">
                                <div className="h-0.5 w-15 bg-gray-400 rounded mb-2" />
                                <div className="h-0.5 w-10 bg-gray-400 rounded" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};