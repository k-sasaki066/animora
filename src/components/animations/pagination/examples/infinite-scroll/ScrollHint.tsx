"use client";

import { AnimatePresence, motion } from "framer-motion";

type ScrollHintProps = {
    show: boolean;
    reduce?: boolean;
    className?: string;
};

export default function ScrollHint({
    show,
    reduce = false,
    className = "",
}: ScrollHintProps) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    aria-hidden="true"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        y: [0, -6, 0],
                    }}
                    exit={{ opacity: 0 }}
                    transition={
                        reduce
                            ? { duration: 0 }
                            : {
                                opacity: { duration: 0.4 },
                                y: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }
                    }
                    className={`absolute bottom-1 right-2 text-xs text-gray-400 pointer-events-none ${className}`}
                >
                    ↓ Scroll
                </motion.div>
            )}
        </AnimatePresence>
    );
}