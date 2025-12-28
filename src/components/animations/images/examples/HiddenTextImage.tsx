"use client"

import { motion } from "framer-motion";
import { scaleText } from "@/utils/scaleText";
import { useContainerWidth } from "@/hooks/useContainerWidth";

export default function HiddenTextImage() {
    const { ref, width } = useContainerWidth<HTMLDivElement>();

    const titleSize = scaleText(width, {
        min: 16,
        max: 32,
        ratio: 0.1,
    });

    const badgeSize = scaleText(width, {
        min: 8,
        max: 16,
        ratio: 0.06,
    });

    const padding = scaleText(width, {
        min: 4,
        max: 12,
        ratio: 0.05,
    });
    return (
        <motion.div
            ref={ref}
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden bg-gray-400"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
                rest: {},
                hover: {},
            }}
        >
            <motion.img
                src="/hydrangea.jpg"
                className="w-full h-full object-cover"
                variants={{
                    rest: { opacity: 1 },
                    hover: { opacity: 0.6 },
                }}
                transition={{ duration: 0.35 }}
            />

            <motion.div
                className="absolute bottom-0 left-0 w-full z-10"
                variants={{
                    rest: { y: "50%" },
                    hover: { y: "0%" },
                }}
                transition={{
                    duration: 0.35,
                    ease: "easeInOut"
                }}
            >
                <h2
                    style={{ fontSize: `${titleSize}px` }}
                    className="text-white text-2xl font-semibold px-2"
                >
                    Hello!
                </h2>
                <p
                    style={{
                        fontSize: `${badgeSize}px`,
                        padding: `${padding}px`
                    }}
                    className="w-full text-sm font-medium bg-white/90 text-gray-800 mt-1"
                >
                    Sample Text
                </p>
            </motion.div>
        </motion.div>
    );
}