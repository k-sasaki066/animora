"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
    { text: "tasty.", color: "text-purple-500" },
    { text: "wonderful.", color: "text-blue-500" },
    { text: "fancy.", color: "text-red-500" },
    { text: "beautiful.", color: "text-emerald-500" },
    { text: "cheap.", color: "text-slate-600" },
];

export const letterVariants: Variants = {
    initial: {
        rotateX: -90,
        opacity: 0,
        transformOrigin: "50% 50% 25px",
    },

    animate: (i: number) => ({
        rotateX: 0,
        opacity: 1,
        transition: {
        // 最初の文字だけ先に降ろす
        delay: i === 0 ? 0 : 0.4 + i * 0.08,
        duration: 0.38,
        ease: [0.175, 0.885, 0.32, 1.275],
        },
    }),

    exit: (i: number) => ({
        rotateX: 90,
        opacity: 0,
        transition: {
            delay: i * 0.06,
            duration: 0.32,
            ease: [0.55, 0.055, 0.675, 0.19],
        },
    }),
};

export default function RotatingWordsText() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 4000);

        return () => clearInterval(id);
    }, []);

    const word = words[index];

    return (
        <div className="relative inline-flex items-baseline gap-2 perspective-midrange text-[3vw]">
            <span className="whitespace-nowrap">Nachos are</span>

            <div className="relative inline-block w-[6ch] h-[1em]">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={word.text}
                        className={`absolute left-0 -top-1 inline-flex ${word.color}`}
                    >
                        {word.text.split("").map((char, i) => (
                            <motion.span
                                key={i}
                                className="inline-block origin-center"
                                variants={letterVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                custom={i}
                                style={{
                                transformStyle: "preserve-3d",
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.span>
                </AnimatePresence>
            </div>
        </div>
    );
}