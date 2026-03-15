import { forwardRef } from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";
import { COLORS, DURATION } from "./constants";

type Props = {
    isOpen: boolean;
    scale: number;
    onToggle: () => void;
};

type LineConfig = {
    key: string;
    className: string;
    variants: Variants;
};

const linesVariants: Record<string, Variants> = {
    top: {
        closed: (custom: boolean) => ({
            y: [12, 12, 0],
            rotate: [45, 0, 0],
            backgroundColor: COLORS.burgerLine,
            transition: custom
                ? { duration: 0 }
                : { duration: DURATION, ease: "easeInOut" },
        }),
        open: (custom: boolean) => ({
            y: [0, 12, 12],
            rotate: [0, 0, 45],
            backgroundColor: COLORS.burgerLineOpen,
            transition: custom
                ? { duration: 0 }
                : { duration: DURATION, ease: "easeInOut" },
        }),
    },

    middle: {
        closed: (custom: boolean) => ({
            opacity: 1,
            backgroundColor: COLORS.burgerLine,
            transition: custom
                ? { duration: 0 }
                : { delay: 0.25, duration: 0.25 },
            }),
        open: (custom: boolean) => ({
            opacity: 0,
            backgroundColor: COLORS.burgerLineOpen,
            transition: custom
                ? { duration: 0 }
                : { delay: 0.25, duration: 0.25 },
        }),
    },

    bottom: {
        closed: (custom: boolean) => ({
            y: [-12, -12, 0],
            rotate: [-45, 0, 0],
            backgroundColor: COLORS.burgerLine,
            transition: custom
                ? { duration: 0 }
                : { duration: DURATION, ease: "easeInOut" },
        }),
        open: (custom: boolean) => ({
            y: [0, -12, -12],
            rotate: [0, 0, -45],
            backgroundColor: COLORS.burgerLineOpen,
            transition: custom
                ? { duration: 0 }
                : { duration: DURATION, ease: "easeInOut" },
        }),
    },
};

const lines: LineConfig[] = [
    {
        key: "top",
        className: "top-0",
        variants: linesVariants.top,
    },
    {
        key: "middle",
        className: "top-3",
        variants: linesVariants.middle,
    },
    {
        key: "bottom",
        className: "bottom-0",
        variants: linesVariants.bottom,
    },
];

export const HamburgerButton = forwardRef<HTMLButtonElement, Props>(({ isOpen, scale, onToggle }, ref) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="absolute top-[5%] left-[3%] w-8 h-7 z-100">
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
                    aria-label={isOpen ? "Close menu":"Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="global-navigation"
                    className="absolute top-[5%] left-[3%] w-8 h-7 bg-none border-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eee]"
                >
                    {lines.map(line => (
                        <motion.span
                            key={line.key}
                            className={`absolute left-0 w-full h-1 ${line.className}`}
                            variants={line.variants}
                            animate={isOpen ? "open":"closed"}
                            custom={shouldReduceMotion}
                        />
                    ))}
                </button>
            </motion.div>
        </div>
    );
});
HamburgerButton.displayName = "HamburgerButton";