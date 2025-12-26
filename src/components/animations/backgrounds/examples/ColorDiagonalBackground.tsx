"use client";

import { motion } from "framer-motion";

export default function ColorDiagonalBackground() {
    return (
        <div className="relative w-full aspect-video overflow-hidden rounded-lg">
            {/* layer 1 */}
            <motion.div
                className="absolute inset-0 -left-1/2 -right-1/2 opacity-50 bg-[linear-gradient(-60deg,#6c3_50%,#09f_50%)]"
                animate={{ x: ["-25%", "25%"] }}
                transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />

            {/* layer 2 */}
            <motion.div
                className="absolute inset-0 -left-1/2 -right-1/2 opacity-50 bg-[linear-gradient(-60deg,#6c3_50%,#09f_50%)]"
                animate={{ x: ["25%", "-25%"] }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />

            {/* layer 3 */}
            <motion.div
                className="absolute inset-0 -left-1/2 -right-1/2 opacity-50 bg-[linear-gradient(-60deg,#6c3_50%,#09f_50%)]"
                animate={{ x: ["-25%", "25%"] }}
                transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />

            {/* optional center content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="bg-white/80 backdrop-blur rounded-md px-6 py-4 shadow">
                    <h2 className="font-mono text-[4vw]">
                        Color Diagonals
                    </h2>
                </div>
            </div>
        </div>
    );
}