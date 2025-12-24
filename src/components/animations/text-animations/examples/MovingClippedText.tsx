"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

export default function MovingClippedText() {
    const text = ["MOVING", " ","CLIPPED", " ", "ANIMATION", " "];
    const x = useMotionValue("-20%");

    useEffect(() => {
        const controls = animate(x, "-70%", {
            duration: 20,
            repeat: Infinity,
            ease: "linear" as const,
        });

        return controls.stop;
    }, [x]);

    return (
        <div className="relative w-full aspect-square flex items-center justify-center">
            {/* 背景テキスト */}
            <motion.h1
                className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(1rem,6vw,4rem)] font-bold uppercase text-neutral-800 z-10 flex gap-8"
                style={{ x }}
            >
                {text.map((t, i) => (
                    <span key={i}>{t}</span>
                ))}
            </motion.h1>

            {/* クリッピングコンテナ */}
            <div
                className="relative z-20 w-full  h-full bg-cover bg-top overflow-hidden"
                style={{
                    backgroundImage:"url(/sea.jpg)",
                }}
            >
                {/* 前景テキスト */}
                <motion.h1
                    className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(1rem,6vw,4rem)] font-bold uppercase text-wheat z-30 flex gap-8 text-zinc-400"
                    style={{ x }}
                >
                    {text.map((t, i) => (
                        <span key={i}>{t}</span>
                    ))}
                </motion.h1>
            </div>
        </div>
    );
}