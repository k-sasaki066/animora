"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 450;

export default function LightToggle() {
    const [on, setOn] = useState(false);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.2)
        : 1;

    return (
        <div
            ref={ref}
            className="w-full h-full flex items-center justify-center gap-5 bg-[#46484c]"
        >
            <motion.div
                style={{ scale }}
                className="flex items-center gap-5 origin-center"
            >
                {/* Cube Switch */}
                <div
                    className="relative w-14 h-14 bg-zinc-800 shadow-inner flex items-center justify-center"
                    style={{ perspective: "600px" }}
                >
                    <motion.button
                        type="button"
                        role="switch"
                        aria-checked={on}
                        onClick={() => setOn(v => !v)}
                        className="relative w-8 h-8"
                        animate={{
                            y: on ? 2 : 0,
                            rotateX: on ? 12 : -12,
                            backgroundColor: on ? "#3f3f46" : "#cec6cc",
                            boxShadow: on
                            ? `
                                inset 0 6px 2px rgba(255,255,255,0.08),
                                inset 0 -18px 10px rgba(0,0,0,0.35),
                                0 2px 2px rgba(0,0,0,0.4)
                            `
                            : `
                                inset 0 2px 1px rgba(255,255,255,0.4),
                                inset 0 -8px 6px rgba(0,0,0,0.35),
                                0 6px 10px rgba(0,0,0,0.6)
                            `,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 280,
                            damping: 22
                        }}
                    >
                        {/* 上面ハイライト */}
                        <span className="absolute top-0 left-0 w-full h-1 rounded-t-lg bg-white/20" />
                    </motion.button>
                </div>
                {/* Light */}
                <div className="relative w-37.5 h-37.5 overflow-hidden">
                    <motion.img
                        src="https://lh4.googleusercontent.com/-katLGTSCm2Q/UJC0_N7XCrI/AAAAAAAABq0/6GxNfNW-Ra4/s300/lightbulb.png"
                        alt="light"
                        className="absolute top-0 left-0 w-75 h-37.5 max-w-none"
                        style={{
                            transform: `translateX(${on ? 0 : -150}px)`
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
}