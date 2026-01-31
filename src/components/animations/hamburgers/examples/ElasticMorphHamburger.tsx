"use client";

import { motion, Transition } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;

export default function ElasticMorphHamburger() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.4), 1.2)
        : 1;

    const transition: Transition = {
        duration: 0.5,
        ease: [0.25, -0.25, 0.75, 1.25],
    };

    const toggle = () => {
        setIsOpen((prev) => !prev);
    };

    type LineConfig = {
        id: "top" | "middle" | "bottom";
        d: string;
        dasharray: string;
        openOffset: number;
        transform?: string;
        hasOpacity?: boolean;
    };

    const LINES: LineConfig[] = [
        {
            id: "top",
            d: "M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200",
            dasharray: "240px 950px",
            openOffset: -650,
        },
        {
            id: "middle",
            d: "M300,320 L540,320",
            dasharray: "240px 240px",
            openOffset: -240,
            hasOpacity: true,
        },
        {
            id: "bottom",
            d: "M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190",
            dasharray: "240px 950px",
            openOffset: -650,
            transform:
            "translate(480, 320) scale(1, -1) translate(-480, -318)",
        },
    ];

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.div
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
                <button
                    onClick={toggle}
                    className="relative w-50 h-37.5"
                    aria-label="Menu"
                >
                    <svg viewBox="0 0 800 600" className="w-full h-full cursor-pointer">
                        {LINES.map((line) => (
                            <motion.path
                                key={line.id}
                                d={line.d}
                                initial={{ strokeDashoffset: 0, opacity: 1 }}
                                transform={line.transform}
                                fill="none"
                                stroke="black"
                                strokeWidth={10}
                                strokeDasharray={line.dasharray}
                                animate={{
                                    strokeDashoffset: isOpen
                                        ? line.openOffset
                                        : 0,
                                    ...(line.hasOpacity && {
                                    opacity: isOpen ? 0 : 1,
                                    }),
                                }}
                                transition={
                                    line.hasOpacity
                                    ? {
                                    strokeDashoffset: transition,
                                    opacity: { duration: 0.2 },
                                    }
                                    : transition
                                }
                            />
                        ))}
                    </svg>
                </button>
            </motion.div>
        </div>
    );
}