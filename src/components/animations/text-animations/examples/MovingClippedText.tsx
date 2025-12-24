"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function MovingClippedText() {
    const baseText = ["MOVING", " ", "CLIPPED", " ", "ANIMATION", " "];
    const repeat = 3;
    const text = Array.from({ length: repeat }, () => baseText).flat();

    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const x = useMotionValue(0);
    console.log(textRef)

    useEffect(() => {
        if (!containerRef.current || !textRef.current) return;

        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.scrollWidth;

        // 開始位置（右外）
        const startX = containerWidth;
        // 終了位置（左外）
        const endX = -textWidth;

        // px / 秒
        const speed = 60;

        const distance = startX - endX;
        const duration = distance / speed;

        x.set(startX);

        const controls = animate(x, endX, {
            duration,
            repeat: Infinity,
            ease: "linear",
        });

        return controls.stop;
    }, [x]);

    return (
        <div ref={containerRef} className="relative w-[50%] aspect-square flex items-center justify-center mx-auto">
            {/* 背景テキスト */}
            <motion.h1
                ref={textRef}
                className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-[4vw] font-bold uppercase text-neutral-800 z-10 flex gap-8"
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
                    className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-[4vw] font-bold uppercase text-wheat z-30 flex gap-8 text-zinc-400"
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
