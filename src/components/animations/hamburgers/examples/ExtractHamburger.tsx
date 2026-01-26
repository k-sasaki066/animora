"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 300;

type LineConfig = {
    key: string;
    className: string;
    animate: (isOpen: boolean) => {
        x?: number | string;
        y?: number;
        rotate?: number;
        opacity?: number;
        scaleY?: number;
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
            x: isOpen ? "50%" : "0%",
            opacity: isOpen ? 0 : 1,
            scaleY: isOpen ? 0 : 1,
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

export default function ExtractHamburger() {
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
                    aria-label={isOpen ? "Close menu" : "Open menu"} //意味付け
                    aria-expanded={isOpen} //状態の通知
                    aria-controls="global-navigation" //関連付け
                    className="relative w-12 h-11 bg-none border-none cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eee] focus-visible:ring-offset-2"
                >
                    {/* lines */}
                    {lines.map((line) => (
                        <motion.span
                            key={line.key}
                            className={`absolute left-0 w-full h-1 bg-black rounded ${line.className}`}
                            animate={line.animate(isOpen)}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                    ))}
                </motion.button>
            </motion.div>
        </div>
    );
}