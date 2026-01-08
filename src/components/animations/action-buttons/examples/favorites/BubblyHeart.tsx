"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BubblyHeart() {
    const [clicked, setClicked] = useState(false);

    return (
        <div className="relative w-full aspect-video overflow-hidden flex justify-center items-center">
            <button className="relative w-40 h-40" onClick={() => setClicked(!clicked)}>
                {/* バブル */}
                <AnimatePresence>
                    {clicked && (
                        <>
                            {[...Array(25)].map((_, i) => {
                                const size = ["w-1 h-1", "w-1.5 h-1.5", "w-2.5 h-2.5"][
                                Math.floor(Math.random() * 3)
                                ];

                                return (
                                    <motion.span
                                        key={i}
                                        className={`absolute rounded-full bg-pink-400 ${size}`}
                                        style={{
                                            left: "50%",
                                            top: "50%",
                                        }}
                                        initial={{
                                            x: 0,
                                            y: 0,
                                            scale: 0,
                                            opacity: 1,
                                        }}
                                        animate={{
                                            x: (Math.random() - 0.5) * 180,
                                            y: (Math.random() - 0.5) * 180,
                                            scale: 1,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            duration: 0.7,
                                            ease: "easeOut",
                                        }}
                                    />
                                );
                            })}
                        </>
                    )}
                </AnimatePresence>

                {/* ハート */}
                <motion.svg
                    className="inset-0 mx-auto w-20 h-20 cursor-pointer z-10"
                    viewBox="0 0 24 24"
                    animate={{
                        scale: clicked ? [0, 0, 1.2, 1, 1.1, 0.95, 1] : 0.8,
                        y: clicked ? [0, 0, 0, -25, 5, -3, 0] : 0,
                        fill: clicked ? "red" : "gray",
                    }}
                    transition={{ duration: 1 }}
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </motion.svg>
            </button>
        </div>
    );
}