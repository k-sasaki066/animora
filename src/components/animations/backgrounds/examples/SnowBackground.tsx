"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
    id: number;
    size: number;
    x: number;
    delay: number;
    duration: number;
    sway: number;
}

interface SnowBackgroundProps {
    count?: number;
    height?: number;
}

export default function SnowBackground({
    count = 40,
    height = 500,
}: SnowBackgroundProps) {
    const particles: Particle[] = useMemo(() => {
        return Array.from({ length: count }, (_, i) => {
            const size = Math.random() + 1;
            return {
                id: i,
                size,
                x: Math.random() * 100,
                delay: Math.random() * 10,
                duration: Math.random() * 10 + 10,
                sway: Math.random() * 20 + 10, // 横揺れ幅
            };
        });
    }, [count]);

    return (
        <div className="relative w-full aspect-video overflow-hidden bg-[#28385e] rounded-lg">
            {particles.map((p) => (
                <motion.span
                    key={p.id}
                    className="absolute bg-white/90 rounded-full"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.x}%`,
                        top: -p.size,
                    }}
                    animate={{
                        y: [0, height + p.size],
                        x: [0, p.sway, -p.sway, 0],
                        opacity: [0, 1, 1, 0],
                        boxShadow: [
                            "0 0 0px 0px white",
                            "0 0 2px 2px white",
                            "0 0 0px 0px white",
                        ],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}