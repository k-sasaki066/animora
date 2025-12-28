"use client"

import { motion } from "framer-motion";
import { scaleText } from "@/utils/scaleText";
import { useContainerWidth } from "@/hooks/useContainerWidth";

export default function ChangeImage() {
    const { ref, width } = useContainerWidth<HTMLDivElement>();

    const titleSize = scaleText(width, {
        min: 7,
        max: 20,
        ratio: 0.03,
    });

    const badgeSize = scaleText(width, {
        min: 6,
        max: 18,
        ratio: 0.03,
    });

    const offset = scaleText(width, {
        min: 8,
        max: 24,
        ratio: 0.05,
    });

    return (
        <motion.figure
            ref={ref}
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden bg-black text-white"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            <motion.img
                src="/river.jpg"
                className="w-full h-full object-cover"
                variants={{
                    hover: { opacity: 0.5 },
                }}
                transition={{ duration: 0.5 }}
            />

            <figcaption
                className="absolute p-2 text-center"
                style={{
                    bottom: `${offset}px`,
                    right: `${offset}px`,
                }}
            >

                {/* 横ライン：上 */}
                <motion.span
                    className="absolute top-0 left-0 h-px w-[400px] bg-white"
                    variants={{
                        rest: { x: "100%" },
                        hover: { x: "0%" },
                    }}
                    transition={{ duration: 0.8 }}
                />

                {/* 横ライン：下 */}
                <motion.span
                    className="absolute bottom-0 right-0 h-px w-[400px] bg-white"
                    variants={{
                        rest: { x: "-100%" },
                        hover: { x: "0%" },
                    }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                />

                {/* 縦ライン：左 */}
                <motion.span
                    className="absolute top-0 left-0 w-px h-[300px] bg-white"
                    variants={{
                        rest: { y: "100%" },
                        hover: { y: "0%" },
                    }}
                    transition={{ duration: 0.8 }}
                />

                {/* 縦ライン：右 */}
                <motion.span
                    className="absolute bottom-0 right-0 w-px h-[300px] bg-white"
                    variants={{
                        rest: { y: "-100%" },
                        hover: { y: "0%" },
                    }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                />

                <h3
                    className="uppercase font-light "
                    style={{ fontSize: `${titleSize}px` }}
                >
                    Sample Title
                </h3>
                <p
                    className="uppercase font-bold bg-white text-black px-2 py-1 inline-block mt-0.5"
                    style={{ fontSize: `${badgeSize}px` }}
                >
                    Category
                </p>
            </figcaption>

            <a className="absolute inset-0" />
        </motion.figure>
    );
}