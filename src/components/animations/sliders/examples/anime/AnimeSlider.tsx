"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { slides } from "./data"
import { SlideIndicator } from "./SlideIndicator"

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

    const next = () => setIndex((i) => (i + 1) % slides.length);
    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

    return (
        <section className="relative w-full h-[400px] overflow-hidden bg-black text-white">
            <motion.div
            className="absolute inset-0 flex items-center justify-center"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        className="flex justify-center items-center gap-20 max-w-5xl w-full px-10 z-20"
                        key={slides[index].id}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Text */}
                        <div className="space-y-2">
                            <motion.h1
                                className="text-5xl font-bold"
                                key={`${slides[index].id}-title1`}
                                variants={textVariants}
                            >
                                {slides[index].title1}
                            </motion.h1>

                            <motion.h1
                                className="text-5xl font-bold"
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
                            className="w-50"
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
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-30">
                <button
                onClick={prev}
                className="px-4 py-2 bg-white/20 rounded hover:bg-white/40"
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
                className="px-4 py-2 bg-white/20 rounded hover:bg-white/40"
                >
                →
                </button>
            </div>
        </section>
    );
}
