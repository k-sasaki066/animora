"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Star } from "lucide-react"
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 450;

export default function StarInputRate() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.4), 1.3)
        : 1;
    const [rating, setRating] = useState<number | null>(null);
    const [hovered, setHovered] = useState<number | null>(null);
    const stars = [1, 2, 3, 4, 5];

    return (
        <div ref={ref} className="w-full h-full overflow-hidden flex justify-center items-center bg-neutral-900 p-2">
            <div
                className="mx-auto rounded-md border border-neutral-700 p-4 text-center text-neutral-200"
                style={{ transform: `scale(${scale})` }}
            >
                <div
                    className="flex justify-center gap-1"
                    role="radiogroup"
                    aria-label="Star rating"
                >
                    {stars.map((star) => {
                        const isActive = hovered
                            ? star <= hovered
                            : star <= (rating ?? 0);

                        const isSingleStarOnly =
                            star === 1 && rating === 1 && hovered === null;

                        return (
                            <motion.button
                                key={star}
                                type="button"
                                role="radio"
                                aria-checked={rating === star}
                                aria-label={`${star} star`}
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHovered(star)}
                                onMouseLeave={() => setHovered(null)}
                                whileHover={{ rotate: -15, scale: 1.3 }}
                                whileTap={{ scale: 0.95 }}
                                onKeyDown={(e) => {
                                    if (e.key === "ArrowRight") setRating((r) => Math.min((r ?? 0) + 1, 5))
                                    if (e.key === "ArrowLeft") setRating((r) => Math.max((r ?? 1) - 1, 1))
                                    }}
                                tabIndex={rating === star || (rating === null && star === 1) ? 0 : -1}
                                className="cursor-pointer"
                            >
                                <Star
                                    className={`h-8 w-8 transition-colors ${
                                    isActive
                                        ? isSingleStarOnly
                                            ? "fill-orange-500 text-orange-500"
                                            : star === 5
                                            ? "fill-yellow-300 text-yellow-300 drop-shadow-[0_0_12px_#a16207]"
                                            : "fill-yellow-400 text-yellow-400"
                                        : "text-neutral-600"
                                    }`}
                                />
                            </motion.button>
                        )
                    })}
                </div>

                {/* Review box */}
                <AnimatePresence>
                    {rating && (
                        <motion.div
                            initial={{
                                height: 0,
                                opacity: 0
                            }}
                            animate={{
                                height: 120,
                                opacity: 1
                            }}
                            exit={{
                                height: 0,
                                opacity: 0
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut"
                            }}
                            className="overflow-hidden"
                        >
                            <textarea
                                key="review-textarea"
                                onClick={(e) => e.stopPropagation()}
                                onFocus={(e) => e.stopPropagation()}
                                className="mt-4 h-24 w-full resize-none rounded bg-neutral-800 p-3 text-sm text-neutral-100 outline-none"
                                placeholder="Brief review"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}