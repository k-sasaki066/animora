"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Nosifer } from "next/font/google";

interface TVNoiseProps {
    intensity?: number;
    color?: string;
}

export const nosifer = Nosifer({
    weight: "400",
    subsets: ["latin"],
});

export default function StaticNoiseBackground({
    intensity = 0.2, //点の割合
    color = "hsla(0, 0%, 10%, 1)",
}: TVNoiseProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const draw = () => {
            const width = canvas.width = canvas.offsetWidth ;
            const height = canvas.height = canvas.offsetHeight;

            const total = Math.floor(width * height * intensity);

            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < total; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                ctx.fillStyle = color;
                ctx.fillRect(x, y, 1, 1);
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => cancelAnimationFrame(animationFrameId);
    }, [intensity, color]);

    return (
        <div className="w-full aspect-video relative overflow-hidden" onClick={() => setActive(!active)}>
            <motion.div
                className="absolute inset-0"
                initial={{ scaleX: 1, scaleY: 1 }}
                animate={
                active
                    ? {
                        scaleY: [1, 0.005],
                        scaleX: [1, 1, 0.005],
                        transition: {
                            scaleY: { duration: 0.3 },
                            scaleX: { duration: 0.3, delay: 0.3 },
                        },
                    }
                    : {
                        scaleY: [0.005, 1],
                        scaleX: [0.005, 0.005, 1],
                        transition: {
                            scaleX: { duration: 0.3, delay: 0.3 },
                            scaleY: { duration: 0.3 },
                        },
                    }
                }
            >
                <motion.h2
                    className={`absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-[3vw] font-bold text-gray-50/60 z-10`}
                    animate={{
                        x: [0, -2, 2, 0], // 左右に少し揺らす
                        y: [0, 1, -1, 0], // 上下に少し揺らす
                        skewX: [0, 5, -5, 0], // X方向にスキュー
                        skewY: [0, 3, -3, 0], // Y方向にスキュー
                        textShadow: [
                            "0 0 0px rgba(255,0,0,0.3)",
                            "2px 2px 1px rgba(0,255,255,0.3)",
                            "-2px -2px 1px rgba(0,255,255,0.3)",
                            "0 0 0px rgba(255,0,0,0.3)"
                        ]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.25, // グリッチは高速
                        ease: "linear"
                    }}
    
                >
                    CLICK ME
                </motion.h2>
                <canvas ref={canvasRef} className="w-full h-full block" />
            </motion.div>
        </div>
    );
}