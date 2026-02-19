"use client"

import { motion, useReducedMotion } from "framer-motion";
import { Caveat } from "next/font/google";
import { useContainerSize } from "@/hooks/useContainerSize";
import Wave from "./Wave";

export const caveat = Caveat({
    subsets: ["latin"],
    weight: "400",
});

const BASE_WIDTH = 400;

export default function WaveHero() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1)
        : 1;

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    return (
        <div ref={ref} className={`relative w-full h-full overflow-hidden ${caveat.className}`}>
            <div className="w-full h-full overflow-y-auto no-scrollbar">
                {/* Background */}
                <div className="absolute inset-0">
                    <img
                        src="https://picsum.photos/id/24/682/384"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Main Text */}
                <motion.div
                    className="w-full origin-top"
                    animate={{ scale }}
                >
                    <div className="relative z-10 flex flex-col items-center justify-start text-white text-center p-6 ">
                        <h1 className="text-3xl font-semibold tracking-wide my-[5%]">
                            Crafted with Precision.
                        </h1>

                        <motion.button
                            className="px-8 py-1 bg-white text-black rounded-md shadow-lg cursor-pointer"
                            whileHover={{scale: 1.05}}
                        >
                            Explore Our Capabilities
                        </motion.button>
                    </div>
                </motion.div>

                {/* Wave */}
                <Wave scale={scale} reduce={reduce} />
            </div>
        </div>
    );
}