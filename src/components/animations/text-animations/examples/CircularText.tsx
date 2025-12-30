"use client";

import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function CircularText() {
    const text = "CIRCULAR*ANIMATION*";
    const duration = 20;

    const { ref, width } = useContainerSize<HTMLDivElement>();

    // 親幅に比例してサイズを決定
    const size = width ? width / 4 : 120;
    const radius = size / 2;
    const fontSize = size * 0.12;

    return (
        <div ref={ref} className="w-full h-full flex items-center justify-center">
            <motion.div
                className="relative"
                style={{ width: size, height: size }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration, ease: "linear" }}
            >
                {text.split("").map((letter, i) => {
                    const angle = (360 / text.length) * i;
                    const rad = (angle * Math.PI) / 180;

                    const x = radius + radius * Math.cos(rad);
                    const y = radius + radius * Math.sin(rad);

                    return (
                        <span
                            key={i}
                            className="absolute font-bold text-blue-900 select-none"
                            style={{
                                left: x,
                                top: y,
                                fontSize,
                                transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                                transformOrigin: "center",
                            }}
                        >
                            {letter}
                        </span>
                    );
                })}
            </motion.div>
        </div>
    );
}