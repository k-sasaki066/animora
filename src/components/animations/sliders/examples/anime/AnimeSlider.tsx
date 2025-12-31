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

const backgroundVariants: Variants = {
    hidden: {
        x: "100%",
    },
    visible: {
        x: "0%",
        transition: {
            duration: 1.2,
            ease: "easeInOut",
            delay: 0,
        },
    },
    exit: {
        x: "-100%",
        transition: {
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.8,
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
        <section ref={ref} className="relative w-full min-h-62.5 overflow-hidden bg-black text-white" style={{ height: config?.height }}>
            <motion.div
            className="absolute inset-0 flex items-center justify-center"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        className={`flex justify-center items-center max-w-5xl w-full px-10 z-20 ${config.containerClass}`}
                        key={slides[index].id}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Text */}
                        <div className="space-y-2">
                            <motion.h1
                                className={`${config.mainTextClass}`}
                                key={`${slides[index].id}-title1`}
                                variants={textVariants}
                            >
                                {slides[index].title1}
                            </motion.h1>

                            <motion.h1
                                className={`${config.mainTextClass}`}
                                key={`${slides[index].id}-title2`}
                                variants={textVariants}
                            >
                                {slides[index].title2}
                            </motion.h1>
                        </div>

                        {/* Image */}
                        <motion.img
                            key={`${slides[index].id}-image`}
                            variants={imageVariants}
                            src={slides[index].image}
                            alt=""
                            style={{ width: config.imageWidth }}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* スライド背景 */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`bg-${slides[index].id}`}
                        className={`absolute inset-0 z-10 ${slides[index].bg}`}
                        variants={backgroundVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    />
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
