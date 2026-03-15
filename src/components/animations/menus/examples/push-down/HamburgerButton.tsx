import { forwardRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { HAMBURGER_LINES, COLORS } from "./constants";

type Props = {
    isOpen: boolean;
    scale: number;
    onToggle: () => void;
};

export const HamburgerButton = forwardRef<HTMLButtonElement, Props>(
    ({ isOpen, scale, onToggle }, ref) => {
        const shouldReduceMotion = useReducedMotion();

        return (
            <motion.div
                className="absolute top-[6%] left-[3%] origin-top-left z-10"
                animate={{ scale }}
                transition={
                    shouldReduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 200, damping: 20 }
                }
            >
                <div className="flex flex-col gap-1">
                    <motion.button
                        ref={ref}
                        type="button"
                        onClick={onToggle}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-haspopup="menu"
                        aria-controls="overlay-menu"
                        className="relative w-9 h-5 cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                    >
                        {HAMBURGER_LINES.map((line) => (
                            <motion.span
                                key={line.key}
                                className={`absolute left-0 w-full h-1 ${line.className}`}
                                animate={line.animate(isOpen)}
                                transition={
                                    shouldReduceMotion
                                        ? { duration: 0 }
                                        : { duration: 0.3 }
                                }
                            />
                        ))}
                    </motion.button>
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={isOpen ? "close" : "menu"}
                            initial={{
                                opacity: 0,
                                y: -4
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                color: isOpen ? COLORS.burgerLineOpen : COLORS.burgerLine
                            }}
                            exit={{
                                opacity: 0,
                                y: 4
                            }}
                            transition={shouldReduceMotion
                                ? { duration: 0 }
                                : { duration: 0.25, ease: "easeOut" }
                            }
                            className="text-sm tracking-wide select-none"
                        >
                            {isOpen ? "close" : "menu"}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </motion.div>
        );
    }
);
HamburgerButton.displayName = "HamburgerButton";