"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;

export default function BlobToggle() {
    const [checked, setChecked] = useState(false);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.3)
        : 1;

    return (
        <div ref={ref} className="flex items-center justify-center w-full h-full">
            <motion.button
                type="button"
                role="switch"
                aria-checked={checked}
                onClick={() => setChecked(!checked)}
                className="relative w-28 h-12 rounded-full cursor-pointer select-none"
                animate={{ scale }}
            >
                {/* 背景 */}
                <motion.div
                    className="absolute inset-0 rounded-full z-0"
                    style={{ boxShadow: checked ? "0 8px 16px -1px rgba(72,234,139,.2)" : "0 8px 16px -1px rgba(255,70,81,.2)" }}
                    animate={{
                        backgroundColor: checked ? "#48EA8B" : "#FF4651",
                    }}
                    transition={{ duration: 0.3 }}
                />

                {/* 丸 */}
                <motion.div
                    className="absolute bottom-2 left-1.25 w-8 h-8 rounded-full border-white z-1 origin-bottom"
                    animate={{
                        left: checked ? [8, 86, 86, 86] : [86, 8, 8, 8],
                        width: checked ? [32, 0, 8, 0] : [0, 32, 34, 32],
                        height: checked ? [32, 32, 25, 32] : [32, 32, 24, 32],
                        borderWidth: checked ? [8, 3, 5, 3] : [3, 8, 6, 8],
                    }}
                    transition={{
                        duration: 0.8,
                        times: [0, 0.3, 0.65, 1],
                        ease: "easeInOut",
                    }}
                    whileTap={{ scale: 0.92 }}
                />
            </motion.button>
        </div>
    );
}