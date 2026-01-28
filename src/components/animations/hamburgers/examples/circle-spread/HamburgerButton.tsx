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
        const reduce = useReducedMotion();

        return (
            <div className="absolute top-[5%] left-[3%] w-8 h-7 z-100">
                <motion.div
                    className="w-full h-full origin-top-left"
                    animate={{ scale }}
                    transition={
                        reduce
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 200, damping: 20 }
                    }
                >
                    <motion.button
                        ref={ref}
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={isOpen}
                        aria-controls="global-navigation"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        onClick={onToggle}
                        animate={{ rotate: isOpen ? 360 : 0 }}
                        transition={
                        reduce
                            ? { duration: 0 }
                            : { duration: 0.4, ease: "easeInOut" }
                        }
                        className="absolute top-[5%] left-[3%] w-8 h-7 flex flex-col justify-between items-center"
                    >
                        {HAMBURGER_LINES.map((line) => (
                            <motion.span
                                key={line.key}
                                className={`absolute left-0 w-full h-1 bg-sky-400 ${line.className}`}
                                animate={line.animate(isOpen)}
                                transition={reduce ? { duration: 0 } : { duration: 0.4 }}
                            />
                        ))}
                    </motion.button>
                </motion.div>
            </div>
        );
    }
);

HamburgerButton.displayName = "HamburgerButton";