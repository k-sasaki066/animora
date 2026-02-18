"use client";

import { motion } from "framer-motion";
import { HiScissors } from "react-icons/hi2";

export default function CutLine() {
    return (
        <div className="relative w-[60%] flex items-center py-8 overflow-hidden">

            {/* dashed line */}
            <div
                className="w-full h-px"
                style={{
                    backgroundImage:
                    "repeating-linear-gradient(to right, #9ca3af 0, #9ca3af 8px, transparent 8px, transparent 16px)",
                }}
            />

            {/* scissors */}
            <motion.div
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: 0 }}
                initial={{ left: 0 }}
                animate={{ left: "60%" }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
            >
                <HiScissors className="text-gray-600 text-xl" />
            </motion.div>
        </div>
    );
}
