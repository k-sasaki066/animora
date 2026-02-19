"use client"

import { motion } from "framer-motion";

type Props = {
    className?: string;
};

export default function Character({ className }: Props) {

    return (
        <motion.svg
            className={className}
            width="60"
            height="40"
            viewBox="0 0 120 80"
            animate={{
                y: [0, -65, 0],
                skewX: [-25, 0, 25],
                scaleX: [0.8, 1, 0.8],
                scaleY: [1.8, 1, 1.8],
            }}
            transition={{
                duration: 0.6,
                repeat: Infinity,
                times: [0, 0.5, 1],
                ease: [
                    [0, 0.5, 0.5, 1],
                    [0.5, 0, 1, 0.5],
                ],
            }}
            style={{ transformOrigin: "bottom center" }}
        >
            <defs>
                <linearGradient id="slimeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9fb3ff" />
                    <stop offset="100%" stopColor="#6fe3e9" />
                </linearGradient>
            </defs>

            {/* 本体 */}
            <path
                d="
                    M10 55
                    Q10 15 60 10
                    Q110 15 110 55
                    Q105 75 60 78
                    Q15 75 10 55
                    Z
                "
                fill="url(#slimeGrad)"
            />

            {/* ハイライト */}
            <ellipse
                cx="40"
                cy="25"
                rx="12"
                ry="6"
                fill="white"
                opacity="0.6"
            />

            {/* 目 */}
            <circle cx="58" cy="38" r="2.5" fill="#222" />
            <circle cx="80" cy="38" r="2.5" fill="#222" />

            {/* ハート */}
            <path
                d="
                    M85 48
                    C85 45 88 43 90 46
                    C92 43 95 45 95 48
                    C95 51 90 55 90 55
                    C90 55 85 51 85 48
                    Z
                "
                fill="#ff6b9a"
            />
        </motion.svg>
    );
}