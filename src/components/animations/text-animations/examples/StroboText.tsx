"use client";

import { motion, Variants } from "framer-motion";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
});

const glitchVariant: Variants = {
    animate: {
        skewX: [0, 0, -20, 20, 0],
        filter: [
            "blur(0px)",
            "blur(0px)",
            "blur(4px)",
            "blur(0px)",
        ],
        transition: {
            duration: 4,
            repeat: Infinity,
            times: [0, 0.48, 0.5, 0.54, 1],
            ease: "easeInOut",
        },
    },
};

const colorShift: Variants = {
    animate: {
        x: [0, -4, 4, -2, 2, 0],
        y: [0, 2, -2, 4, -4, 0],
        transition: {
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

export default function StroboText() {
    const text = "STROBO";

    return (
        <div className={`w-full p-4 bg-black ${orbitron.className}`}>
            <motion.div
                className="relative text-center font-extrabold uppercase text-white select-none text-[3vw]"
                variants={glitchVariant}
                animate="animate"
            >
                {/* RGB layers */}
                <motion.span
                    className="absolute inset-0 text-red-500 opacity-80 z-0"
                    variants={colorShift}
                    animate="animate"
                >
                    {text}
                </motion.span>

                <motion.span
                    className="absolute inset-0 text-blue-500 opacity-80 z-10"
                    variants={colorShift}
                    animate="animate"
                    transition={{ delay: 0.08 }}
                >
                    {text}
                </motion.span>

                <motion.span
                    className="absolute inset-0 text-green-400 opacity-80 z-20"
                    variants={colorShift}
                    animate="animate"
                    transition={{ delay: 1.6 }}
                >
                    {text}
                </motion.span>

                {/* main text */}
                <span className="relative z-30">{text}</span>

                {/* scanlines */}
                <motion.span
                    className="absolute left-0 w-full h-px bg-black z-20"
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                <motion.span
                    className="absolute left-0 w-full h-px bg-black z-20"
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 1, delay: 1, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>
        </div>
    );
}