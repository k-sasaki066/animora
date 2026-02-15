"use client"

import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

type ArcSearchFrameProps = {
    isFocused: boolean;
    reduce: boolean;
    isTyping: boolean;
    reset: () => void;
};

export function ArcSearchFrame({ isFocused, reduce, isTyping, reset }: ArcSearchFrameProps) {
    return (
        <>
            <motion.svg
                viewBox="0 0 671 111"
                className="absolute inset-0 w-full h-full"
            >
                {["left", "right"].map((_, i) => (
                    <motion.path
                        key={i}
                        d={
                            i === 0
                                ? "M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"
                                : "M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"
                        }
                        fill="none"
                        stroke="#fff"
                        strokeWidth="5"
                        strokeDasharray="740"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: isFocused ? 459 : 0 }}
                        transition={
                            reduce
                                ? { duration: 0 }
                                : {
                                    duration: isFocused ? 0.65 : 0.4,
                                    ease: isFocused
                                        ? [0.755, 0.15, 0.205, 1]
                                        : [0.6, 0.04, 0.735, 0.99],
                                }
                        }
                    />
                ))}
            </motion.svg>

            <motion.div
                className="absolute left-[7%] top-1/2 -translate-y-1/2 text-white pointer-events-none"
                animate={{ rotate: isFocused ? 90 : 0 }}
                transition={
                    reduce
                        ? { duration: 0 }
                        : {
                            duration: 0.4,
                            delay: 0.22,
                            ease: [0.19, 1, 0.22, 1],
                        }
                }
            >
                <FiSearch size={20} strokeWidth={1} />
            </motion.div>

            {/* Reset Icon */}
            <motion.button
                type="button"
                disabled={!isTyping}
                onMouseDown={(e) => e.preventDefault()}
                className="absolute right-[8%] top-1/2 -translate-y-1/2 flex items-center justify-center text-white text-xl cursor-pointer disabled:cursor-default z-10"
                animate={{
                    rotate: isTyping ? 0 : 45,
                    opacity: isTyping ? 1 : 0,
                }}
                transition={
                    reduce
                        ? { duration: 0 }
                        : {
                            opacity: { duration: 0.19 },
                            rotate: { duration: 0.26, delay: 0.02, ease: [0.19, 1, 0.22, 1] },
                        }
                }
                onClick={reset}
            >
                →
            </motion.button>
        </>
    );
}