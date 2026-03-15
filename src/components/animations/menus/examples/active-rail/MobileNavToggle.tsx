import { motion, AnimatePresence } from "framer-motion";
import { forwardRef } from "react";
import { LINES } from "./constants";

type Props = {
    isMobile: boolean;
    isOpen: boolean;
    scale: number;
    reduce: boolean;
    onToggle: () => void;
};

export const MobileNavToggle = forwardRef<HTMLButtonElement, Props>(function MobileNavToggle(
    { isMobile, isOpen, scale, reduce, onToggle },
    ref
) {
    if (!isMobile) return null;

    return (
        <>
            {/* Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={
                            reduce
                                ? { duration: 0 }
                                : { duration: 0.25 }
                        }
                        className="absolute inset-0 bg-black/50 z-5"
                        onClick={onToggle}
                    />
                )}
            </AnimatePresence>

            {/* Hamburger */}
            <div className="absolute top-[5%] left-[3%] w-8 h-6 z-100">
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
                        onClick={onToggle}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="global-navigation"
                        className="relative w-full h-full cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={
                            reduce
                                ? { duration: 0 }
                                : { duration: 0.4, ease: "easeInOut" }
                        }
                    >
                        {LINES.map((line) => (
                            <span
                                key={line.key}
                                className={`absolute left-0 w-full h-0.75 bg-white/50 rounded ${line.className}`}
                            />
                        ))}
                    </motion.button>
                </motion.div>
            </div>
        </>
    );
});
MobileNavToggle.displayName = "MobileNavToggle";