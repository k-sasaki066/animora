"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { getCarousel3dConfig } from "@/lib/responsive/carousel3dConfig";

interface Carousel3dSlideProps {
    title: string;
    text: string;
    offset: number;
    config: getCarousel3dConfig;
}

export default function Carousel3dSlide({
    title,
    text,
    offset,
    config,
}: Carousel3dSlideProps) {
    const isActive = offset === 0;
    return (
        <motion.div
            className={clsx(
                "absolute rounded-xl shadow-2xl",
                "flex flex-col justify-center text-center",
                isActive
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-700"
            )}
            style={{
                width: config.cardWidth,
                height: config.cardHeight,
            }}
            animate={{
                x: offset * config.gap,
                rotateY: offset * 0,
                scale: isActive
                    ? config.activeScale
                    : config.inactiveScale,
                z: isActive ? 120 : 0,
                opacity: Math.abs(offset) > config.maxVisibleOffset ? 0 : 1,
                zIndex: 100 - Math.abs(offset),
            }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
        >
            <h3 className={clsx(
                "mb-2 font-semibold text-[clamp(0.8rem,2.2vw,1.5rem)]",
                isActive ? "text-2xl" : "text-lg"
            )}>
                {title}
            </h3>

            <p className={clsx(
                "leading-snug px-2 text-[clamp(0.75rem,1.6vw,0.95rem)]", "line-clamp-3",
                isActive ? "text-gray-300" : "text-gray-500"
            )}>
                {text}
            </p>
        </motion.div>
    );
}