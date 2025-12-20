"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWheelNavigation } from "./useWheelNavigation";
import SlideImages from "./SlideImages";
import { useWindowSize } from "@/lib/responsive/useWindowSize";
import { getSplitConfig } from "@/lib/responsive/splitConfig"

const images = [
    "/river.jpg",
    "/leading.jpg",
    "/sea.jpg",
];

const texts = ["Desert", "Erosion", "Shape"];

export default function SplitSlideshow() {
    const [index, setIndex] = useState(0);
    const width = useWindowSize()
    const config = getSplitConfig(width)

    const next = () =>
        setIndex((prev) => (prev + 1) % images.length);
    const prev = () =>
        setIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
        );
    
    useWheelNavigation({
        onNext: next,
        onPrev: prev,
        delay: 1100,
    });

    return (
        <div
            className={`relative overflow-hidden mx-auto ${config.containerClass}`}
        >
            <SlideImages images={images} index={index} />

            {/* テキスト */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        className={`text-white  font-light tracking-[0.3em] flex items-center justify-center h-full ${config.mainTextClass}`}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
                    >
                        {texts[index]}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="absolute right-4 top-1/2 flex flex-col gap-2 -translate-y-1/2 items-end">
                {images.map((_, i) => (
                    <motion.div
                    key={i}
                    className="h-0.5 bg-white rounded-full"
                    animate={{
                        width: i === index ? 30 : 18, // 現在のスライドだけ長く
                        opacity: i === index ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.3 }}
                    />
                ))}
            </div>
        </div>
    );
}