"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { FaHamburger, FaArrowLeft } from "react-icons/fa";

const BASE_WIDTH = 300;

export default function IconHamburger() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.4), 1.4)
        : 1;

    const toggle = () => {
        setIsOpen((prev) => !prev);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggle();
        }
    };

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.div
                className="flex flex-col gap-1"
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
                <motion.button
                    type="button"
                    onPointerDown={toggle}
                    onKeyDown={handleKeyDown}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="global-navigation"
                    className="relative w-12 h-12 bg-none border-none cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eee] focus-visible:ring-offset-2"
                >
                    <AnimatePresence mode="wait">
                        {!isOpen && (
                            <motion.span
                                key="hamburger"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <FaHamburger size={48} />
                            </motion.span>
                        )}

                        {isOpen && (
                            <motion.span
                                key="arrow"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <FaArrowLeft size={36} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>

                <AnimatePresence mode="wait">
                    <motion.span
                        key={isOpen ? "close" : "menu"}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="text-sm tracking-wide text-black select-none leading-none"
                    >
                        {isOpen ? "close" : "menu"}
                    </motion.span>
                </AnimatePresence>
            </motion.div>
        </div>
    );
}