"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;

export default function StarSliderRate() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.3)
        : 1;

    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState<number | null>(null);
    const [bounceIndex, setBounceIndex] = useState<number | null>(null);
    const [pulseIndex, setPulseIndex] = useState<number | null>(null);

    const displayRating = hoverRating ?? rating;

    return (
        <div ref={ref} className="w-full h-full overflow-hidden flex justify-center items-center bg-[#add9e6]">
            <div className="flex flex-col items-center gap-4" style={{ transform: `scale(${scale})` }}>
                <div className="flex">
                    {[1, 2, 3, 4, 5].map((index) => {
                        const fill =
                            displayRating >= index
                                ? 100
                                : displayRating >= index - 0.5
                                    ? 50
                                    : 0;

                        const getValueFromPointer = (e: React.PointerEvent<HTMLDivElement>) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            return x < rect.width / 2 ? index - 0.5 : index;
                        } //pointerdown 対応にすると、マウス,タッチ,ペンを 1つのイベントで統一できる

                        const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
                            setHoverRating(getValueFromPointer(e));
                        }

                        const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
                            const value = getValueFromPointer(e);
                            const isLeft = value % 1 !== 0;

                            setRating(value);
                            setPulseIndex(index);

                            if (!isLeft) {
                                setBounceIndex(index);
                            }

                            setTimeout(() => {
                                setPulseIndex(null);
                                setBounceIndex(null);
                            }, 800);
                        };

                        return (
                            <motion.div
                                key={index}
                                className="relative w-10 h-10 cursor-pointer"
                                onPointerMove={handlePointerMove}
                                onPointerDown={handlePointerDown}
                                onPointerLeave={() => setHoverRating(null)}
                                animate={
                                    bounceIndex === index
                                    ? { scale: [1, 1.3, 0.9, 1.2, 1] }
                                    : { scale: 1 }
                                }
                                transition={
                                    bounceIndex === index
                                    ? { type: "tween", duration: 0.5, ease: "easeInOut" }
                                    : undefined
                                }
                            >
                                <div className="relative z-10 w-full h-full">
                                    <Star fill={fill} index={index}/>
                                </div>

                                {pulseIndex === index && (
                                    <motion.div
                                        className="absolute inset-0 flex items-center justify-center text-[#fdf4d0] text-2xl pointer-events-none z-0"
                                        initial={{ scale: 1, opacity: 1 }}
                                        animate={{ scale: 3, opacity: 0 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    >
                                        ★
                                    </motion.div>
                                )}
                            </motion.div>
                        )
                    })}
                </div>

                <div className="text-black text-lg">
                    <span className="font-bold text-2xl">
                        {rating.toFixed(1)}
                    </span>
                    / 5
                </div>
            </div>
        </div>
    );
}

/* ===== SVG STAR ===== */

function Star({ fill, index }: { fill: number; index: number }) {
    return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            {/* base */}
            <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill="#fff"
            />

            {/* fill */}
            <clipPath id={`clip-${index}-${fill}`}>
                <rect width={`${fill}%`} height="100%" />
            </clipPath>

            <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill="#facc15"
                clipPath={`url(#clip-${index}-${fill})`}
            />
        </svg>
    );
}