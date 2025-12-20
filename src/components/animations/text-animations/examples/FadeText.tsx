"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const text = "Fade Animation Example";

const containerVariants = {
    hidden: {},
    visible: {},
};

const charVariants = {
    hidden: {
        opacity: 0,
    },
    visible: (i: number) => ({
        opacity: 1,
        transition: {
        delay: i * 0.05,
        duration: 0.2,
        },
    }),
};

export default function TypingText() {
    const [active, setActive] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
        setActive((prev) => !prev);
        }, 2200); // 表示 → 非表示の切り替え間隔

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="text-xl font-bold lg:text-4xl md:text-3xl sm:text-2xl font-mono"
            variants={containerVariants}
            initial="hidden"
            animate={active ? "visible" : "hidden"}
        >
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    variants={charVariants}
                    custom={i}
                >
                {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.div>
    );
}