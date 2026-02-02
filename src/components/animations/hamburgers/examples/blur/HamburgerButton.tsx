"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { HAMBURGER_LINES } from "./constants";

type Props = {
    isOpen: boolean;
    scale: number;
    onToggle: () => void;
    shouldReduceMotion: boolean;
};

export const HamburgerButton = forwardRef<HTMLButtonElement, Props>(
    ({ isOpen, scale, onToggle, shouldReduceMotion }, ref) => {

        return (
            <motion.div className="absolute top-[5%] left-[3%] w-8 h-8 z-100">
                <motion.div
                    className="w-full h-full origin-top-left"
                    animate={{ scale }}
                    transition={
                        shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 200, damping: 20 }
                    }
                >
                    <button
                        ref={ref}
                        type="button"
                        onClick={onToggle}
                        aria-expanded={isOpen}
                        aria-controls="global-navigation"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        className="absolute top-1/2 -translate-y-1/2 z-100 flex h-8 w-8 items-center justify-center cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eee]"
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
                    </button>
                </motion.div>
            </motion.div>
        );
    }
);
HamburgerButton.displayName = "HamburgerButton";