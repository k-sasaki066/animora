"use client";

import { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HAMBURGER_LINES } from "./constants";

type Props = {
    isOpen: boolean;
    scale: number;
    onToggle: () => void;
};

export const HamburgerButton = forwardRef<HTMLButtonElement, Props>(
    ({ isOpen, scale, onToggle }, ref) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="absolute top-[5%] left-[3%] w-9 h-7 z-100">
            <motion.div
                className="w-full h-full origin-top-left"
                animate={{ scale }}
                transition={
                    shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 200, damping: 20 }
                }
            >
                <motion.button
                    ref={ref}
                    type="button"
                    onClick={onToggle}
                    whileTap={{ scale: 0.92 }}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="side-menu"
                    className="absolute top-[5%] left-[3%] w-9 h-7 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d1d0d0] focus-visible:ring-offset-4"
                >
                    {/* lines */}
                    {HAMBURGER_LINES.map((line) => (
                        <motion.span
                            key={line.key}
                            className={`absolute left-0 w-full h-1 rounded bg-black ${line.className}`}
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
        </div>
    );
});
HamburgerButton.displayName = "HamburgerButton";