"use client";

import { motion } from "framer-motion";

export default function LetterFillButton() {

    return (
        <motion.div
            className="flex items-center justify-center w-40 h-12 cursor-pointer"
            initial="initial"
            whileHover="hovered"
            animate="initial"
            variants={{
                hovered: {
                    transition: {
                    staggerChildren: 0.04,
                    },
                },
            }}
        >
            {"BUTTON".split("").map((char, i) => (
                <motion.span
                    key={i}
                    className="w-[2em] h-[2em] grid place-content-center text-sm font-bold"
                    variants={{
                        initial: {
                            backgroundColor: "rgb(30, 58, 138)", // darkblue
                            color: "#ffffff",
                        },
                        hovered: {
                            backgroundColor: `hsl(${(i + 200) * 10}deg 80% 70%)`,
                            color: "#ffffff",
                        },
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
}