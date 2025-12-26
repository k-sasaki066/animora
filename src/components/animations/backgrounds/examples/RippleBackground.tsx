"use client";

import { motion } from "framer-motion";

interface Circle {
    scale: number;
    opacity: number;
    delay: number;
}

const circles: Circle[] = [
    { scale: 1, opacity: 0.3, delay: 0 },
    { scale: 0.8, opacity: 0.2, delay: 1 },
    { scale: 0.6, opacity: 0.1, delay: 2 },
];

export default function RippleBackground() {
    return (
        <div className="relative w-full aspect-video overflow-hidden bg-slate-900">
            {circles.map((circle, index) => (
                <motion.div
                    key={index}
                    className="absolute -left-1/2  -bottom-full rounded-full bg-white/20"
                    style={{
                        width: "100%",
                        aspectRatio: "1 / 1",
                        opacity: circle.opacity,
                        boxShadow: "0px 0px 1px 0px #508fb9",
                    }}
                    animate={{
                        scale: [
                            circle.scale * 0.8,
                            circle.scale * 1.4,
                            circle.scale * 0.8,
                        ],
                    }}
                    transition={{
                        duration: 15,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: circle.delay,
                    }}
                />
            ))}
        </div>
    );
}