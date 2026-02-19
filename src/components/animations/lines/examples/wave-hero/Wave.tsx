"use client";

import { motion } from "framer-motion";

type WaveProps = {
    scale: number;
    reduce: boolean;
    height?: string;
};

export default function Wave({
    scale,
    reduce,
    height = "h-[85%]",
}: WaveProps) {
    return (
        <div className={`relative w-full ${height}`}>
            <motion.svg
                viewBox="0 0 1440 400"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
                animate={{ y: [4, 0, 4] }}
                transition={
                    reduce
                        ? { duration: 0 }
                        : {
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }
                }
            >
                <path
                    fill="#ffffff"
                    fillOpacity="0.9"
                    d="
                        M0,160
                        C240,200 480,120 720,150
                        C960,210 1200,150 1440,170
                        L1440,400
                        L0,400
                        Z
                    "
                />
            </motion.svg>

            {/* Wave Text */}
            <motion.div
                className="absolute inset-0 flex items-end justify-center pb-6 origin-bottom"
                animate={{ scale }}
            >
                <p className="text-base text-black text-center max-w-xs">
                    <span className="text-xl">W</span>
                    e bring tradition and innovation together to create products.
                </p>
            </motion.div>
        </div>
    );
}