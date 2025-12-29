"use client"

import { motion } from "framer-motion";
import { scaleText } from "@/utils/scaleText";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function SkewImage() {
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const titleSize = scaleText(width, {
        min: 16,
        max: 32,
        ratio: 0.1,
    });

    const badgeSize = scaleText(width, {
        min: 10,
        max: 16,
        ratio: 0.08,
    });
    return (
        <motion.div
            ref={ref}
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            {/* 背景レイヤー */}
            <motion.div
                className="absolute -top-50 left-80 w-[200%] h-[200%] bg-white opacity-20 z-1"
                variants={{
                    rest: {
                        transform: "skew(-45deg) translateX(-150%) translateY(0%)"
                    },
                    hover: {
                        transform: "skew(-45deg) translateX(-50%) translateY(50%)",
                        transition: { duration: 0.6 }
                    },
                }}
            />
            <motion.div
                className="absolute -bottom-50 right-80 w-[200%] h-[200%] bg-white opacity-20 z-1"
                variants={{
                    rest: {
                        transform: "skew(-45deg) translateX(150%) translateY(0%)"
                    },
                    hover: {
                        transform: "skew(-45deg) translateX(50%) translateY(-50%)",
                        transition: { duration: 0.6 }
                    },
                }}
            />

            <motion.img
                src="/leading.jpg"
                className="w-full h-full object-cover"
                variants={{
                    rest: { filter: "grayscale(0%)" },
                    hover: {
                        filter: "grayscale(100%)", transition: { duration: 0.6 }
                    },
                }}
            />

            <motion.div
                className="absolute inset-0 flex-col z-10 text-center flex justify-center items-center"
                variants={{
                    rest: {},
                    hover: {
                        transition: { delayChildren: 0.2 }
                    },
                }}
            >
                <motion.h2
                    style={{ fontSize: `${titleSize}px` }}
                    variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 }
                    }}
                >
                    Title
                </motion.h2>
                <motion.p
                    style={{ fontSize: `${badgeSize}px` }}
                    variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 0.7 }
                    }}
                >
                    Description
                </motion.p>
            </motion.div>
        </motion.div>
    );
}