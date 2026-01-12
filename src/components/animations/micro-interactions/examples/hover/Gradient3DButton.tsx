"use client";

import { motion, Variants } from "framer-motion";

const innerVariants: Variants = {
    initial: {
        backgroundColor: "rgba(255,255,255,0)",
        color: "#ffffff",
    },
    hover: {
        backgroundImage: "none",
        backgroundColor: "#ffffff",
        color: "#0f172a",
    },
};

export default function Gradient3DButton() {
    return (
        <div className="relative inline-block">
            {/* 影 */}
            <div
                className="absolute inset-0 -translate-x-1.5 translate-y-1.5 bg-gray-200 blur-[1.5px] pointer-events-none"
            />

            {/* ボタン本体 */}
            <motion.button
                className="relative w-36 h-10 z-10 flex justify-center items-center font-bold uppercase tracking-[0.075em] cursor-pointer select-none
                border-2 border-transparent
                bg-linear-to-tr from-[#47e2ff] to-[#fe66ff]
                hover:from-[#15b8dd] hover:to-[#fb03fe]
                bg-origin-border"
                initial="initial"
                whileHover="hover"
                variants={{
                    initial: { x: 0, y: 0 },
                    hover: { x: 8, y: -8 },
                }}
                transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                }}
            >
                {/* 中身 */}
                <motion.span
                    className="absolute inset-0 flex items-center justify-center bg-linear-to-tr from-[#15b8dd] to-[#fb03fe] text-white"
                    variants={innerVariants}
                    transition={{ duration: 0.1 }}
                >
                    hover
                </motion.span>

                {/* SIDE */}
                <span
                    aria-hidden
                    className="absolute -z-10 -left-2 top-[0.6px] w-1.5 h-[114%] bg-linear-to-t from-[#15b8dd] to-[#3cb9d0] skew-y-[-45deg]"
                />

                {/* BOTTOM */}
                <span
                    aria-hidden
                    className="absolute -z-10 -bottom-2 right-[0.6px] h-1.5 w-[103%] bg-linear-to-r from-[#3cb9d0] to-[#fb03fe] skew-x-[-45deg]"
                />
            </motion.button>
        </div>
    );
}