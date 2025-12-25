"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
    id: number;
    size: number;
    x: number;
    delay: number;
    duration: number;
    xOffsets: number[]; // 横揺れステップ
    xDurations: number[]; // 横揺れ速さ
}

interface FireflyBackgroundProps {
    count?: number; // 粒数
    height?: number; // 上方向の移動量
}
export default function FireflyBackground({ count = 50, height = 500 }: FireflyBackgroundProps) {
    const particles: Particle[] = useMemo(() => {
        return Array.from({ length: count }, (_, i) => {
            const size = Math.random() * 8 + 4;
            const x = Math.random() * 100; // 左右の位置 %
            const delay = Math.random() * 5; // 開始遅延
            const duration = Math.random() * 15 + 5; // 上昇速度
            const steps = 5; // 横揺れステップ数
            const xOffsets = Array.from({ length: steps }, () => (Math.random() - 0.5) * 60); // -30～30px
            const xDurations = Array.from({ length: steps }, () => Math.random() * 1 + 0.3); // 0.3～1.1秒
            return { id: i, size, x, delay, duration, xOffsets, xDurations };
        });
    }, [count]);

    return (
        <div className="w-full aspect-video relative overflow-hidden bg-[#28385e] rounded-lg">
            {particles.map((p) => (
                <motion.span
                    key={p.id}
                    className="absolute bg-yellow-400 rounded-full opacity-10 blur-xs"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.x}%`,
                        bottom: 0,
                    }}
                    animate={{
                        y: [0, -height],
                        x: [
                            0,
                            Math.sin(Math.random() * 2 * Math.PI) * 30,
                            Math.sin(Math.random() * 2 * Math.PI) * -30,
                            0,
                        ],
                        opacity: [1, 0.6, 0],
                    }}
                    transition={{
                        y: {
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        x: {
                            duration: p.duration / 2, repeat: Infinity,
                            repeatType: "reverse", ease: "easeInOut"
                        },
                        opacity: {
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        delay: p.delay,
                    }}
                />
            ))}
        </div>
    );
}












