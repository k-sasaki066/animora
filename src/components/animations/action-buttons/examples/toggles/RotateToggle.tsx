"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;

export default function RotateToggle() {
    const [isChecked, setIsChecked] = useState(false);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.3)
        : 1;

    return (
        <div ref={ref} className="w-full h-full overflow-hidden flex justify-center items-center">
            <motion.button
                className="bg-stone-600/50 rounded-full w-30 h-12 flex items-center"
                type="button"
                role="switch"
                aria-checked={isChecked}
                onClick={() => setIsChecked(!isChecked)}
                whileTap={{ scale: 1 }}
                animate={{ scale }}
            >
                <motion.div
                    className="relative w-10 h-10 rounded-full"
                    animate={{
                        rotate: isChecked ? 360 : 0,
                        backgroundColor: isChecked ? "#8BC34A" : "#c34a4a",
                        x: isChecked ? 74 : 6,
                    }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut"
                    }}
                >
                    {/* 線1 */}
                    <motion.div
                        className="absolute bg-white h-1 rounded-full"
                        animate={{
                            width: isChecked ? 26 : 30,
                            rotate: -45,
                            x: isChecked ? 11 : 5,
                            y: isChecked ? 20 : 18,
                        }}
                        transition={{ duration: 0.4 }}
                    />

                    {/* 線2 */}
                    <motion.div
                        className="absolute bg-white h-1 rounded-full"
                        animate={{
                            width: isChecked ? 16 : 30,
                            rotate: 45,
                            x: isChecked ? 3 : 5,
                            y: isChecked ? 23 : 18,
                        }}
                        transition={{ duration: 0.4 }}
                    />
                </motion.div>
            </motion.button>
        </div>
    );
}