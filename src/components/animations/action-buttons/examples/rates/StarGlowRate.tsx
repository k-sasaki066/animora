"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { STAR_PATH } from "@/assets/svg/icons"
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 450;

export default function StarGlowRate() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.4), 1.3)
        : 1;
    const [rating, setRating] = useState<number | null>(null);
    const [hoveredStar, setHoveredStar] = useState<number | null>(null);
    const [justRated, setJustRated] = useState<number | null>(null);
    const stars = [1, 2, 3, 4, 5];

    useEffect(() => {
        if (!justRated) return;
        const t = setTimeout(() => setJustRated(null), 400);
        return () => clearTimeout(t);
    }, [justRated]);

    return (
        <div ref={ref} className="w-full h-full flex justify-center bg-[#111111]">
            <motion.div
                className="w-full h-full flex items-center justify-center gap-0.5"
                role="radiogroup"
                aria-label="Rating"
                animate={{ scale }}
            >
                {stars.map((star) => {
                    const current = hoveredStar ?? rating;
                    const active = current !== null && star <= current;
                    const shouldBounce = justRated !== null && star <= justRated;

                    return (
                        <motion.button
                            key={star}
                            type="button"
                            role="radio"
                            aria-checked={active}
                            aria-label={`${star} star`}
                            onClick={() => {
                                setRating(star);
                                setJustRated(star);
                            }}
                            onMouseEnter={() => setHoveredStar(star)}
                            onMouseLeave={() => setHoveredStar(null)}
                            onKeyDown={(e) => {
                                if (e.key === "ArrowRight") setRating((r) => Math.min((r ?? 0) + 1, 5))
                                if (e.key === "ArrowLeft") setRating((r) => Math.max((r ?? 1) - 1, 1))
                                }}
                            tabIndex={rating === star || (rating === null && star === 1) ? 0 : -1}
                            className="h-12 w-12 flex items-center justify-center bg-transparent"
                            transition={{
                                duration: 0.2,
                                delay: star * 0.05,
                            }}
                        >
                            <motion.svg
                                viewBox={STAR_PATH.viewBox}
                                className="h-8 w-8"
                                whileHover={{
                                    filter: "drop-shadow(0 0 6px #666)",
                                }}
                                initial={false}
                                animate={{
                                    fill: active ? "#F9BF3B" : "none",
                                    stroke: active ? "#F9BF3B" : "#444",
                                    scale: shouldBounce ? [1, 1.35, 0.95, 1] : 1,
                                }}
                                transition={{
                                    scale: {
                                        duration: 0.45,
                                        ease: "easeOut",
                                    },
                                    duration: 0.2,
                                }}
                            >
                                <path d={STAR_PATH.path} />
                            </motion.svg>
                        </motion.button>
                    )
                })}
            </motion.div>
        </div>
    );
}