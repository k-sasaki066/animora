"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 300;

const RADIUS = 38;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

type LineConfig = {
    key: string;
    className: string;
    animate: (isOpen: boolean) => {
        x?: number;
        y?: number;
        scaleY?: number;
        rotate?: number;
        opacity?: number;
    };
};

const lines: LineConfig[] = [
    {
        key: "top",
        className: "top-0",
        animate: (isOpen) => ({
            y: isOpen ? 20 : 0,
            rotate: isOpen ? -45 : 0,
        }),
    },
    {
        key: "middle",
        className: "top-[20px]",
        animate: (isOpen) => ({
            opacity: isOpen ? 0 : 1,
            scaleY: isOpen ? 0 : 1,
            x: isOpen ? 10 : 0,
        }),
    },
    {
        key: "bottom",
        className: "bottom-0",
        animate: (isOpen) => ({
            y: isOpen ? -20 : 0,
            rotate: isOpen ? 45 : 0,
        }),
    },
];

export default function CircleAppearHamburger() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.4), 1.4)
        : 1;

    const toggle = () => {
        setIsOpen((prev) => !prev);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggle();
        }
    };

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.div
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
                <motion.button
                    type="button"
                    onPointerDown={toggle}
                    onKeyDown={handleKeyDown}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="global-navigation"
                    className="relative w-12 h-11 bg-none border-none cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eee] focus-visible:ring-offset-2"
                >
                    {/* circular border */}
                    <motion.svg
                        className="absolute top-1/2 left-1/2 w-20 h-20 pointer-events-none"
                        viewBox="0 0 80 80"
                        style={{ translateX: "-50%", translateY: "-50%" }}
                        animate={{
                            rotate: isOpen ? -1440 : 0,
                        }}
                        transition={{
                            rotate: {
                                duration: 0.6,
                                ease: "linear",
                                delay: 0.15,
                            },
                        }}
                    >
                        <motion.circle
                            cx="40"
                            cy="40"
                            r={RADIUS}
                            fill="transparent"
                            stroke="black"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeDasharray={CIRCUMFERENCE}
                            initial={false}
                            animate={{
                                strokeDashoffset: isOpen ? 0 : CIRCUMFERENCE,
                                opacity: isOpen ? 1 : 0,
                            }}
                            style={{
                                rotate: -90, // 開始位置を上に
                                originX: "50%",
                                originY: "50%",
                            }}
                            transition={{
                                strokeDashoffset: {
                                    duration: 0.5,
                                    delay: 0.2,
                                    ease: "easeInOut",
                                },
                                opacity: {
                                    duration: 0.2,
                                    delay: 0.25,
                                    ease: "easeOut",
                                },
                            }}
                        />
                    </motion.svg>

                    {/* lines */}
                    {lines.map((line) => (
                        <motion.span
                            key={line.key}
                            className={`absolute left-0 w-full h-1 bg-black rounded ${line.className}`}
                            animate={line.animate(isOpen)}
                            transition={{ duration: 0.4 }}
                        />
                    ))}
                </motion.button>
            </motion.div>
        </div>
    );
}