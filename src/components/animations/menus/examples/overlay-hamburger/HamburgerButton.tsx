"use client";

import { motion, useReducedMotion } from "framer-motion";
import { forwardRef } from "react";
import { HAMBURGER_LINES } from "./constants";

type Props = {
    isOpen: boolean;
    scale: number;
    onToggle: () => void;
};

export const HamburgerButton = forwardRef<HTMLButtonElement, Props>(
    ({ isOpen, scale, onToggle }, ref) => {
        const reduce = useReducedMotion();

        // キーボード操作
        const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onToggle();
            }
        };

        // ポインター操作（マウス・タッチのみ）
        const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
            if (e.pointerType !== "mouse" && e.pointerType !== "touch") return;

            e.preventDefault();
            onToggle();
        };

        return (
            <motion.div className="absolute top-[5%] right-[3%] w-8 h-5 z-100">
                <motion.div
                    className="w-full h-full origin-top-right"
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
                        aria-expanded={isOpen}
                        aria-controls="global-navigation"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        onClick={(e) => {
                            // キーボード操作（Enter / Space）のみ通す
                            if (e.detail === 0) {
                            onToggle();
                            }
                        }}
                        onKeyDown={handleKeyDown}
                        onPointerDown={handlePointerDown}
                        className="relative w-full h-full bg-transparent cursor-pointer touch-manipulation focus-visible:outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#eee]"
                    >
                        {HAMBURGER_LINES.map((line) => (
                            <motion.span
                                key={line.key}
                                className={`absolute left-0 w-full h-0.5 ${line.className}`}
                                animate={line.animate(isOpen)}
                                transition={reduce ? { duration: 0 } : { duration: 0.4 }}
                            />
                        ))}
                    </motion.button>
                </motion.div>
            </motion.div>
        );
    }
);
HamburgerButton.displayName = "HamburgerButton";