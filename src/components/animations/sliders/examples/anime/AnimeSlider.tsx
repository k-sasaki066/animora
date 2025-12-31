"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { slides } from "./data"
import { SlideIndicator } from "./SlideIndicator"
import { useContainerSize } from "@/hooks/useContainerSize"
import { getAnimeConfig } from "@/lib/responsive/animeConfig"

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.4,
            delayChildren: 1,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.25,
            staggerDirection: -1, // ← 逆順
        },
    },
};

const textVariants: Variants = {
    hidden: {
        opacity: 0,
        y: "100%", // 下
    },
    visible: {
        opacity: 1,
        y: "0%", // 中央
        transition: {
            duration: 0.8,
            ease: "easeOut"
        },
    },
    exit: {
        opacity: 0,
        y: "-120%", // 上へ消える
        transition: {
            duration: 0.8,
            ease: "easeOut"
        },
    },
};

const imageVariants = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7 },
    },
    exit: {
        opacity: 0,
        x: 100,
        transition: { duration: 0.5 }
    },
};

export default function MotionSlider() {
    const [index, setIndex] = useState(0);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const config = getAnimeConfig(width)

    const next = () => setIndex((i) => (i + 1) % slides.length);
    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

    return (
        <section
            ref={ref}
            className="relative w-full min-h-62.5 overflow-hidden text-white"
            style={{ height: config?.height }}
        >
            {/* 背景スライド横並び */}
            <motion.div
                className="absolute inset-0 flex w-[300%]" // 3枚前提
                animate={{ x: `-${(index / slides.length) * 100}%` }}
                transition={{
                    duration: 1.2,
                    ease: "easeInOut"
                }}
            >
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        className="w-1/3 h-full bg-cover bg-center"
                        style={{ backgroundColor: slide.bgColor }}
                    />
                ))}
            </motion.div>

            {/* スライドコンテンツ */}
            <motion.div className="absolute inset-0 flex items-center justify-center z-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slides[index].id}
                        className={`flex justify-center items-center max-w-5xl w-full px-10 ${config.containerClass}`}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Text */}
                        <div className="space-y-2">
                            <motion.h1
                                key={`${slides[index].id}-title1`}
                                variants={textVariants}
                                className={config.mainTextClass}
                            >
                                {slides[index].title1}
                                </motion.h1>

                            <motion.h1
                                key={`${slides[index].id}-title2`}
                                variants={textVariants}
                                className={config.mainTextClass}
                            >
                                {slides[index].title2}
                            </motion.h1>
                        </div>

                        {/* Image */}
                        <motion.img
                            key={`${slides[index].id}-image`}
                            src={slides[index].image}
                            alt=""
                            variants={imageVariants}
                            style={{ width: config.imageWidth }}
                        />
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            {/* Controls */}
            <div
                className="absolute left-1/2 flex gap-4 z-30"
                style={{
                    bottom: `${config.height * 0.05}px`,
                    transform: "translateX(-50%)",
                }}
            >
                <button
                    onClick={prev}
                    className={`bg-white/20 rounded hover:bg-white/40 ${config.controlPaddingClass}`}
                >
                    ←
                </button>

                <SlideIndicator
                    total={slides.length}
                    current={index}
                    onSelect={setIndex}
                />

                <button
                    onClick={next}
                    className={`bg-white/20 rounded hover:bg-white/40 ${config.controlPaddingClass}`}
                >
                    →
                </button>
            </div>
        </section>
    );
}
