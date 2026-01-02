"use client";

import { motion } from "framer-motion";
import GooeyFilter from "@/components/ui/GooeyFilter";
import { useMemo } from "react";

export default function BubbleButton() {
    const bubbles = useMemo(() => {
        return [...Array(4)].map(() => ({
            size: 20 + Math.random() * 20,
            left: 1 + Math.random() * 70 ,
            rise: 60 + Math.random() * 40,
            duration: 1.5 + Math.random() * 1.5,
        }));
    }, []);

    return (
        <>
            <GooeyFilter id="goo" />
            <div
                className="relative inline-block"
                style={{ filter: "url(#goo)" }}
            >

                {/* Main Button */}
                <motion.button
                    className="relative px-6 py-3 rounded-xl text-white bg-purple-500 w-40 h-12 cursor-pointer"
                    style={{ filter: "url(#goo)" }}
                    whileHover={{ scale: 1.05 }}
                    transition={{
                        type: "spring",
                        stiffness: 150
                    }}
                >
                    Button

                    {/* Bubbles container */}
                    <div className="absolute inset-0 pointer-events-none -z-1">
                        {bubbles.map((b, i) => (
                            <motion.div
                                key={i}
                                className="absolute bg-purple-500 rounded-full"
                                style={{
                                    width: b.size,
                                    height: b.size,
                                    left: `${b.left}%`,
                                    bottom: 0,
                                    opacity: 1,
                                }}
                                animate={{
                                    y: [0, -b.rise],
                                    opacity: [1, 1, 0.9, 0.3, 0],
                                    scale: [1, 0.8, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: b.duration,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                </motion.button>
            </div>
        </>
    );
}