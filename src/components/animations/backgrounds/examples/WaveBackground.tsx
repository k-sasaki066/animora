"use client";

import { motion } from "framer-motion";

const wavePath =
    "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z";

const waves = [
    { opacity: 0.7, duration: 7, delay: -2 },
    { opacity: 0.5, duration: 10, delay: -3 },
    { opacity: 0.3, duration: 13, delay: -4 },
    { opacity: 1, duration: 20, delay: -5 },
];
export default function WaveBackground() {
    return (
        <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-linear-to-r from-purple-600 to-cyan-500">

            {/* Waves */}
            <svg
                className="absolute bottom-0 w-full h-1/3"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
            >
                <defs>
                    <path id="wave" d={wavePath} />
                </defs>
                {waves.map((wave, i) => (
                    <motion.use
                        key={i}
                        href="#wave"
                        x="48"
                        y={i * 3}
                        fill={`rgba(255,255,255,${wave.opacity})`}
                        animate={{ x: [-90, 85] }}
                        transition={{
                            duration: wave.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: wave.delay,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}