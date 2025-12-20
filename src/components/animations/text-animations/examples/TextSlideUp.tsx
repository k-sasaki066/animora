"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const text = "Slide Up Animation";

const containerVariants = {
    hidden: {},
    visible: {},
};

const charVariants: Variants = {
    hidden: {
        y: "100%",
        opacity: 0,
    },
    visible: (i: number) => ({
        y: "0%",
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: [0.77, 0, 0.175, 1],
            delay: i * 0.04,
        },
    }),
};

export default function TextSlideUp() {
    const [active, setActive] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => !prev);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full flex items-center justify-center bg-neutral-700 overflow-hidden p-4">
            <motion.div
                className="flex flex-wrap justify-center text-center text-white font-mono font-bold uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight"
                variants={containerVariants}
                initial="hidden"
                animate={active ? "visible" : "hidden"}
                aria-hidden="true"
            >
                {text.split("").map((char, i) =>
                    char === " " ? (
                        <span key={i} className="w-[0.5em]" />
                    ) : (
                        <motion.span
                            key={i}
                            className="inline-block whitespace-pre"
                            variants={charVariants}
                            custom={i}
                        >
                        {char}
                        </motion.span>
                    )
                )}
            </motion.div>
        </div>
    );
}