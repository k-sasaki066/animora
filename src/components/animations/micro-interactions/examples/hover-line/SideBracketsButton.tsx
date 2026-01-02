"use client";

import { motion } from "framer-motion";

export default function SideBracketsButton() {

    return (
        <motion.button
            className="relative px-8 py-4 w-40 h-12 cursor-pointer"
            initial="rest"
            whileHover="hover"
        >

            {/* 左 bracket */}
            <motion.span
                className="absolute left-6 top-1/2 -translate-y-1/2 text-yellow-400 text-2xl"
                variants={{
                    rest: { opacity: 0, x: -10 },
                    hover: { opacity: 1, x: -2 }
                }}
                transition={{ duration: 0.25 }}
            >
                [
            </motion.span>

            {/* ボタンのテキスト */}
            <span className="relative z-10">
                Button
            </span>

            {/* 右 bracket */}
            <motion.span
                className="absolute right-6 top-1/2 -translate-y-1/2 text-yellow-400 text-2xl"
                variants={{
                    rest: { opacity: 0, x: 10 },
                    hover: { opacity: 1, x: 2 }
                }}
                transition={{ duration: 0.25 }}
            >
                ]
            </motion.span>
        </motion.button>
    );
}