"use client";

import { motion } from "framer-motion";

export default function ChangeTextButton() {

    return (
        <motion.button
            className="relative px-8 py-4 rounded-sm bg-amber-500 overflow-hidden w-40 h-12 cursor-pointer flex justify-center items-center"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
                rest: {},
                hover: {},
            }}
        >

            {/* ボタンのテキスト */}
            <motion.span
                className="absolute text-white font-semibold tracking-wider"
                variants={{
                    rest: {
                        y: 0,
                        opacity: 1
                    },
                    hover: {
                        y: 20,
                        opacity: 0, transition: {
                            duration: 0.3
                        }
                    },
                }}
            >
                HOVER
            </motion.span>

            {/* 新テキスト */}
            <motion.div
                className="flex text-white font-semibold tracking-wider absolute"
                variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                }}
            >
                {"Thanks".split("").map((char, i) => (
                    <motion.span
                        key={i}
                        className="inline-block uppercase"
                        custom={i}
                        variants={{
                            rest: { opacity: 0, y: -20 },
                            hover: (i: number) => ({
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.25,
                                    delay: i * 0.025,
                                    ease: [0.5, -1, 0.5, 2],
                                },
                            }),
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.div>
        </motion.button>
    );
}