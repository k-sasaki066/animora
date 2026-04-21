"use client";

import { motion } from "framer-motion";

type Props = {
    isOpen: boolean;
    onClick: () => void;
};

type Line = {
    position: string;
    animate: {
        rotate?: number;
        y?: number;
        opacity?: number;
    };
    transition?: {
        duration: number;
    };
};

export default function HamburgerButton({
    isOpen,
    onClick,
}: Props) {
    const lines: Line[] = [
        {
            position: "top-0 right-0",
            animate: {
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 10 : 0,
            },
            transition: { duration: 0.3 },
        },
        {
            position:
                "top-1/2 right-0 -translate-y-1/2",
            animate: {
                opacity: isOpen ? 0 : 1,
            },
            transition: { duration: 0.2 },
        },
        {
            position: "bottom-0 right-0",
            animate: {
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -8 : 0,
            },
            transition: { duration: 0.3 },
        },
    ];

    return (
        <button
            onClick={onClick}
            className="relative w-10 h-5 text-gray-300 focus:outline-none"
            aria-label="menu"
        >
            {lines.map((line, index) => (
                <motion.span
                    key={index}
                    className={`absolute block w-8 h-0.5 bg-gray-400 ${line.position}`}
                    animate={line.animate}
                    transition={line.transition}
                />
            ))}
        </button>
    );
}