"use client";

import { motion } from "framer-motion";
import { Amatic_SC } from "next/font/google";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";

const amatic = Amatic_SC({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function SquigglyText() {
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>({
        ratio: 0.07,
        min: 36,
        max: 80,
    });
    return (
        <motion.div
            ref={ref}
            className="space-y-2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* SVG Filters */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    {[0, 1, 2, 3, 4].map((i) => (
                        <filter key={i} id={`squiggly-${i}`}>
                            <feTurbulence
                                baseFrequency="0.02"
                                numOctaves="3"
                                seed={i}
                                result="noise"
                            />
                            <feDisplacementMap
                                in="SourceGraphic"
                                in2="noise"
                                scale={i % 2 === 0 ? 6 : 8}
                            />
                        </filter>
                    ))}
                </defs>
            </svg>

            {/* テキスト */}
            <div
                contentEditable
                suppressContentEditableWarning
                className={`squiggly inline-block font-bold leading-tight outline-none
                select-text ${amatic.className}
                `}
                style={{ fontSize }}
            >
                Squiggly Text
            </div>
        </motion.div>
    );
}