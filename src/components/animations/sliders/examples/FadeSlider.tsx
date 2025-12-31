"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/lavender.jpg",
    "/flower.jpg",
    "/hydrangea.jpg",
    "/river.jpg",
    "/leading.jpg",
];

export default function FadeSlider() {
    const [current, setCurrent] = useState(0);

    const prev = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const next = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full max-w-xl mx-auto">
            {/* スライダー本体 */}
            <div className="relative overflow-hidden rounded-xl aspect-video">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={current}
                        src={images[current]}
                        alt={`slide-${current}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                </AnimatePresence>
            </div>

            {/* 左右ボタン */}
            <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white transition"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white transition"
            >
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* インジケーター */}
            <div className="flex justify-center space-x-2 mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition
                        ${
                            current === index
                            ? "bg-purple-600 scale-125"
                            : "bg-gray-300"
                        }
                        `}
                    />
                ))}
            </div>
        </div>
    );
}