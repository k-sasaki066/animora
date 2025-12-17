"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface Carousel3dSlideProps {
    title: string;
    text: string;
    offset: number;
    isActive: boolean;
}

export default function Carousel3dSlide({
    title,
    text,
    offset,
    isActive,
}: Carousel3dSlideProps) {
    return (
        <motion.div
            className={clsx(
                "absolute rounded-xl shadow-2xl",
                "flex flex-col justify-center text-center",
                "transition-colors duration-300",
                isActive
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-700"
            )}
            style={{
                width: isActive ? 360 : 300,
                height: isActive ? 220 : 180,
            }}
            animate={{
                x: offset * 180,
                rotateY: offset * 0,
                scale: isActive ? 1 : 0.85,
                z: isActive ? 120 : 0,
                opacity: Math.abs(offset) > 2 ? 0 : 1,
                zIndex: 100 - Math.abs(offset),
            }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
        >
            <h3 className={clsx(
                "mb-3 font-semibold",
                isActive ? "text-2xl" : "text-lg"
            )}>
                {title}
            </h3>

            <p className={clsx(
                "leading-relaxed px-6",
                isActive ? "text-gray-300" : "text-gray-500"
            )}>
                {text}
            </p>
        </motion.div>
    );
}