"use client"

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const redDots = [
    { x: 0.2, y: 0.15 },
    { x: 0.6, y: 0.15 },
    { x: 0.3, y: 0.4 },
    { x: 0.1, y: 0.55 },
    { x: 0.5, y: 0.5 },
];

const blackDots = [
    { x: 0.1, y: 0.1 },
    { x: 0.4, y: 0.15 },
    { x: 0.1, y: 0.35 },
    { x: 0.45, y: 0.7 },
    { x: 0.6, y: 0.4 },
];

export default function PizzaPart({ size = 80 }: { size?: number }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const steps = [360, 300, 240, 180, 120, 60, 0];
        let i = 0;

        const interval = setInterval(() => {
        if (ref.current) {
            ref.current.style.webkitMaskImage = `conic-gradient(#000 ${steps[i]}deg, #0000 0deg)`;
        }
        i = (i + 1) % steps.length;
        }, 500); // 0.5秒ごとに1/6ずつ消える

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            ref={ref}
            className="
                rounded-full border-8
                border-[#d1914b]
                bg-[#f6d353]
                relative
            "
            style={{
                width: size,
                height: size,
                WebkitMaskRepeat: "no-repeat",
            }}
        >

            {redDots.map((dot, i) => (
                <div
                    key={`red-${i}`}
                    className="absolute bg-[#d64123] rounded-full"
                    style={{
                        width: size * 0.15, // ピザサイズの15%
                        height: size * 0.15,
                        top: size * dot.y,
                        left: size * dot.x,
                    }}
                />
            ))}

            {blackDots.map((dot, i) => (
                <div
                    key={`black-${i}`}
                    className="absolute bg-[#0f0f0f] rounded-full"
                    style={{
                        width: size * 0.08, // ピザサイズの8%
                        height: size * 0.08,
                        top: size * dot.y,
                        left: size * dot.x,
                    }}
                />
            ))}
        </motion.div>
    );
}