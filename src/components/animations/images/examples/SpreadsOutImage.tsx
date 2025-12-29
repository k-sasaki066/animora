"use client"

import { motion } from "framer-motion";
import { scaleText } from "@/utils/scaleText";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function SpreadsOutImage() {
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const titleSize = scaleText(width, {
        min: 16,
        max: 28,
        ratio: 0.1,
    });

    const badgeSize = scaleText(width, {
        min: 10,
        max: 20,
        ratio: 0.08,
    });
    return (
        <motion.figure
            ref={ref}
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden bg-black"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            <motion.img
                src="/sea.jpg"
                className="w-full h-full object-cover"
                variants={{
                    rest: {
                        filter: "grayscale(0%)"
                    },
                    hover: {
                        filter: "grayscale(100%)"
                    },
                }}
                transition={{ duration: 0.35 }}
            />

            {/* overlay */}
            <motion.div
                className="absolute inset-0 bg-white/75 origin-center"
                variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut"
                }}
            />

            <motion.figcaption
                className="absolute inset-0 flex-col text-center z-10 flex justify-center items-center"
            >
                <motion.h2
                    className="uppercase tracking-wider text-2xl font-medium px-4"
                    style={{ fontSize: `${titleSize}px` }}
                    variants={{
                        rest: { opacity: 0, y: 10 },
                        hover: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: 0.2 }}
                >
                    title
                </motion.h2>

                <motion.p
                    className="text-sm px-8 mt-1 text-gray-700"
                    style={{ fontSize: `${badgeSize}px` }}
                    variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 0.7 },
                    }}
                    transition={{ delay: 0.25 }}
                >
                    description
                </motion.p>
            </motion.figcaption>
        </motion.figure>
    );
}