"use client";

import { motion, Variants } from "framer-motion";

const text = "Text Animation";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
        staggerChildren: 0.12,
        },
    },
};

const charVariants: Variants = {
    hidden: {
        opacity: 0,
        filter: "blur(8px)",
    },
    visible: {
        opacity: [0, 1, 1, 0],
        filter: ["blur(7px)", "blur(2px)", "blur(0px)", "blur(4px)"],
        transition: {
            duration: 1,
            ease: [0.77, 0, 0.175, 1],
            repeat: Infinity,
            repeatDelay: 1.8,
        },
    },
};

export default function TextBlurAnimation() {
    return (
        <div className="w-full px-4 flex items-center justify-center overflow-hidden">
            <motion.div
                className="flex font-mono font-bold uppercase text-[3vw]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {text.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        className="inline-block"
                        variants={charVariants}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
}