"use client";

import { motion } from "framer-motion";

export default function BackgroundMovesButton() {

    return (
        <motion.button
            className="px-8 py-4 rounded-sm border-3 font-bold bg-transparent border-[#e5e5e5] text-[#9ca3af] transition-all duration-300 w-40 h-12 cursor-pointer flex justify-center items-center"
            initial={{
                backgroundPosition: "0 0",
            }}
            whileHover={{
                borderColor: "#50514f",
                color: "#50514f",
                backgroundImage:
                    "repeating-linear-gradient(-25deg, #e5e5e5, #e5e5e5 3px, transparent 4px, transparent 7px)", //グレーの帯を 3px の幅で描く→直後に 1px だけ透明→透明部分をさらに 7px まで拡大
                backgroundSize: ["12px 16px", "12px 16px"],
                backgroundPosition: ["0px 0px", "300px 0px"],
            }}
            transition={{
                backgroundPosition: {
                    repeat: Infinity,
                    duration: 5,
                    ease: "linear",
                },
                duration: 0.8,
            }}
        >
            BUTTON
        </motion.button>
    );
}