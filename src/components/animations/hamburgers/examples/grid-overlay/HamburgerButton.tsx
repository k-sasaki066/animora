"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";
import { forwardRef } from "react";

type Props = {
    isOpen: boolean;
    scale: number;
    onToggle: () => void;
};

export const HamburgerButton = forwardRef<HTMLButtonElement, Props>(
    ({ isOpen, scale, onToggle }, ref) => {
        const reduce = useReducedMotion();

        const dotVariants: Variants = {
            closed: { x: 0, y: 0, scale: 1, backgroundColor: "#333" },
            open: (i: number) => {
                const map = [
                    { scale: 0 },
                    { y: 6 },
                    { scale: 0 },
                    { x: 6 },
                    { scale: 1.2 },
                    { x: -6 },
                    { scale: 0 },
                    { y: -6 },
                    { scale: 0 },
                ];
                return {
                    ...map[i],
                    backgroundColor: "#fff",
                };
            },
        };

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
            <div className="absolute top-[5%] right-[3%] w-10 h-10 z-100">
                <motion.div
                    className="w-full h-full origin-top-right"
                    animate={{ scale }}
                    transition={
                        reduce
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 200, damping: 20 }
                    }
                >
                    <button
                        ref={ref}
                        type="button"
                        aria-expanded={isOpen}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-controls="grid-menu"
                        onPointerDown={handlePointerDown}
                        onClick={(e) => {
                            // keyboard fallback
                            if (e.detail === 0) onToggle();
                        }}
                        onKeyDown={handleKeyDown}
                        className="absolute top-[5%] right-[3%] z-100 w-10 h-10 p-2"
                    >
                        <div className="grid grid-cols-3 gap-1 w-full h-full">
                            {Array.from({ length: 9 }).map((_, i) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    initial="closed"
                                    animate={isOpen ? "open" : "closed"}
                                    variants={dotVariants}
                                    transition={
                                        reduce
                                        ? { duration: 0 }
                                        : { duration: 0.3, ease: "easeInOut" }
                                    }
                                    className="block rounded-full bg-black"
                                />
                            ))}
                        </div>
                    </button>
                </motion.div>
            </div>
        );
    }
);