"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const text = "HOVER ME!";

export default function GlitchText() {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="flex justify-center gap-2 text-[3vw] font-bold cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    className="relative"
                    animate={
                        hovered
                        ? {
                            x: [0, -1, 1, -1, 1, 0],
                            y: [0, 1, -1, 1, -1, 0],
                            rotate: [0, -1, 1, 0, 1, -0.5],
                            textShadow: [
                                "-1px -1px 0 deeppink, 1px 1px 0 cyan",
                                "1px 2px 0 deeppink, -1px -1px 0 cyan",
                                "-1px -1px 0 deeppink, 1px 1px 0 cyan",
                            ],
                            }
                        : { x: 0, y: 0, rotate: 0, textShadow: "none" }
                    }
                    transition={{
                        duration: 0.8,
                        ease: "linear",
                        repeat: hovered ? Infinity : 0,
                        delay: index * 0.03,
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </div>
    );
}