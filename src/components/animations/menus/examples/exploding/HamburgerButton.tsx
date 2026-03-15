import { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFire, FaTimes } from "react-icons/fa";


type Props = {
    isOpen: boolean;
    scale: number;
    onToggle: () => void;
    shouldReduceMotion: boolean;
};

export const HamburgerButton = forwardRef<HTMLButtonElement, Props>(
    ({ isOpen, scale, onToggle, shouldReduceMotion }, ref) => {

        return (
            <motion.div className="absolute top-[3%] left-[2%] w-10 h-10 z-100">
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
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-controls="global-navigation"
                        aria-expanded={isOpen}
                        aria-haspopup="menu"
                        onClick={onToggle}
                        className="absolute top-[3%] left-[3%] z-50 flex h-10 w-10 items-center justify-center rounded-full bg-red-400 text-white shadow-lg cursor-pointer focus:outline-none focus-visible:scale-110 focus-visible:ring-2 focus-visible:ring-[#d3d2d2]"
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    transition={shouldReduceMotion
                                        ? { duration: 0 }
                                        : { type: "spring", stiffness: 300, damping: 20 }
                                    }
                                >
                                    <FaTimes size={22} />
                                </motion.div>
                                ) : (
                                <motion.div
                                    key="open"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    transition={shouldReduceMotion
                                        ? { duration: 0 }
                                        : { type: "spring", stiffness: 300, damping: 20 }
                                    }
                                >
                                    <FaFire size={22} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </motion.div>
            </motion.div>
        );
    }
);
HamburgerButton.displayName = "HamburgerButton";