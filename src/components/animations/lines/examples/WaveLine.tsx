"use client";

import { motion, Transition } from "framer-motion";

const WAVES = [
    {
        d: "M 0 40 C 150 10, 300 70, 450 40 S 750 10, 800 40",
        stroke: "#F4A896",
        delay: 0,
    },
    {
        d: "M 0 80 C 200 40, 350 120, 500 80 S 700 40, 800 80",
        stroke: "#F6C28B",
        delay: 0.5,
    },
    {
        d: "M 0 120 C 180 70, 330 150, 500 120 S 720 70, 800 120",
        stroke: "#F8D5C2",
        delay: 1,
    },
];

export default function WaveLine() {
    const transition: Transition = {
        duration: 2.5,
        ease: "easeOut",
    };

    return (
        <svg
            viewBox="0 0 800 160"
            className="w-full max-w-4xl h-auto"
            fill="none"
        >
            {WAVES.map((wave, index) => (
                <motion.path
                    key={index}
                    d={wave.d}
                    stroke={wave.stroke}
                    strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ ...transition, delay: wave.delay }}
                />
            ))}
        </svg>
    );
}