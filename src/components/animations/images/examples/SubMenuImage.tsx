"use client"

import { motion } from "framer-motion";
import { scaleText } from "@/utils/scaleText";
import { useContainerWidth } from "@/hooks/useContainerWidth";

export default function SubMenuImage() {
    const { ref, width } = useContainerWidth<HTMLDivElement>();

    const titleSize = scaleText(width, {
        min: 16,
        max: 28,
        ratio: 0.08,
    });

    const badgeSize = scaleText(width, {
        min: 8,
        max: 12,
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
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden bg-black"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            <motion.img
                src="/river.jpg"
                className="w-full h-full object-cover"
                variants={{
                    rest: { opacity: 1 },
                    hover: { opacity: 0.5 },
                }}
                transition={{ duration: 0.35 }}
            />

            <motion.div
                className="absolute inset-y-0 left-[-30%] right-[70%] bg-black/70"
                variants={{
                    rest: {
                        x: "-75%",
                        skewX: 20,
                    },
                    hover: {
                        x: "0%",
                        skewX: 20,
                    },
                }}
                transition={{
                    duration: 0.35,
                    ease: "easeInOut"
                }}
            />

            <div
                className="absolute top-0 right-0 z-10 text-white"
                style={{ padding: `${padding}px` }}
            >
                <h3
                    className="font-black leading-none mb-2"
                    style={{ fontSize: `${titleSize}px` }}
                >
                    Hover Title
                </h3>

                <ul
                    className="space-y-1.5 text-right tracking-widest leading-none"
                    style={{ fontSize: `${badgeSize}px` }}
                >
                    {["DETAIL", "VIEW", "MORE"].map((text, i) => (
                        <motion.li
                            key={text}
                            variants={{
                                rest: { opacity: 0, x: 20 },
                                hover: { opacity: 1, x: -4 },
                            }}
                            transition={{
                                duration: 0.35,
                                delay: 0.1 * (i + 1),
                            }}
                        >
                            <a href="#" className="hover:text-amber-400">
                                {text}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}