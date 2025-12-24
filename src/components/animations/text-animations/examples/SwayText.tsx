"use client";

import { motion, Variants } from "framer-motion";

const text = "HOVER ME!";

const letterVariants: Variants = {
    initial: {
        y: 0,
        x: 0,
        opacity: 1,
    },
    hover: (i: number) => ({
        y: [0, -4, 0],
        x: [0, 8, 0],
        opacity: [1, 0, 1],
        transition: {
        delay: i * 0.04,
        duration: 0.4,
        ease: "easeInOut",
        },
    }),
};

export default function SwayText() {
    return (
        <motion.div
            className="flex justify-center gap-2 text-[3vw] font-bold cursor-pointer"
            initial="initial"
            whileHover="hover"
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    className="inline-block"
                    variants={letterVariants}
                    custom={index}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
}