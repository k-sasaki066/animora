"use client";

import { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HAMBURGER_LINES } from "./constants";

type Props = {
    isOpen: boolean;
    scale: number;
    onToggle: () => void;
};

export const HamburgerButton = forwardRef<HTMLButtonElement, Props>(({ isOpen, scale, onToggle }, ref) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            className="w-full h-full origin-top-right"
            animate={{ scale }}
            transition={
                shouldReduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 200, damping: 20 }
            }
        >
            {/* ハンバーガーボタン */}
            <motion.button
                ref={ref}
                type="button"
                onClick={onToggle}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-controls="global-navigation"
                aria-expanded={isOpen}
                aria-haspopup="menu"
                className="absolute top-5 right-5 z-100 w-8 h-5 bg-transparent border-none cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eee] focus-visible:ring-offset-3 focus-visible:ring-offset-[#4d4c4c]"
            >
                {HAMBURGER_LINES.map((line) => (
                    <motion.span
                        key={line.key}
                        className={`absolute left-0 w-full h-0.5 bg-white ${line.className}`}
                        animate={line.animate(isOpen)}
                        transition={
                            shouldReduceMotion
                                ? { duration: 0 }
                                : { duration: 0.4, ease: "easeInOut" }
                        }
                    />
                ))}
            </motion.button>
        </motion.div>
    )
});
HamburgerButton.displayName = "HamburgerButton";