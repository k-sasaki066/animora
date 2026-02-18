"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import SpiderWeb from "./SpiderWeb";
import { Creepster } from "next/font/google";

const creepster = Creepster({
    subsets: ["latin"],
    weight: "400",
});

const BASE_WIDTH = 400;

export default function SpiderSeparator() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.8), 1)
        : 1;

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    return (
        <div ref={ref} className="w-full h-full px-5 py-10 max-w-3xl mx-auto overflow-y-auto no-scrollbar">
            <motion.div
                className="w-full h-full origin-top"
                animate={{ scale }}
            >
                {/* TOP DIVIDER */}
                <SpiderWeb
                    align="left"
                    reduce={reduce}
                />

                {/* HEADING */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={
                        reduce
                            ? { duration: 0 }
                            : { delay: 0.8, duration: 0.6 }
                    }
                    className={`mt-6 text-4xl font-bold text-center ${creepster.className}`}
                >
                    Happy Halloween !
                </motion.h1>

                {/* CONTENT */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={
                        reduce
                            ? { delay: 0, duration: 0 }
                            : { delay: 1.1, duration: 0.3 }
                    }
                    className="mt-6 px-4 text-gray-700 leading-relaxed"
                >
                    Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora
                    quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum
                    mauris...
                </motion.p>

                {/* BOTTOM DIVIDER */}
                <SpiderWeb
                    align="right"
                    reduce={reduce}
                />
            </motion.div>
        </div>
    );
}