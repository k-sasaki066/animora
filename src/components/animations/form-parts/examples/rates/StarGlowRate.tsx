"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { STAR_PATH } from "@/assets/svg/icons"
import { useContainerSize } from "@/hooks/useContainerSize";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";

const BASE_WIDTH = 450;

export default function StarGlowRate() {
    const { ref, width } = useContainerSize<HTMLFormElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.4), 1.3)
        : 1;

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const starRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const [rating, setRating] = useState<number | null>(null);
    const [hoveredStar, setHoveredStar] = useState<number | null>(null);
    const [justRated, setJustRated] = useState<number | null>(null);
    const [sending, setSending] = useState(false);

    const stars = [1, 2, 3, 4, 5];

    useEffect(() => {
        if (!justRated) return;
        const t = setTimeout(() => setJustRated(null), 400);
        return () => clearTimeout(t);
    }, [justRated]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!rating) return;

        const ok = window.confirm(`⭐ ${rating} 点で評価を送信しますか？`);
        if (!ok) return;

        setSending(true);

        await new Promise((resolve) => setTimeout(resolve, 600));

        setSending(false);
        setRating(null);
    }

    const { onKeyDown } = useRovingTabFocus<number>({
        values: stars,
        activeValue: rating ?? 1,
        setActiveValue: (value) => setRating(value),
        refs: starRefs,
        onActivate: (value) => {
            setRating(value);
            setJustRated(value);
        }
    });

    return (
        <form
            ref={ref}
            onSubmit={handleSubmit}
            className="w-full h-full flex justify-center items-center bg-[#111111]"
        >
            <input type="hidden" name="rating" value={rating ?? ""} />
            <motion.div
                className="flex flex-col items-center justify-center gap-4"
                role="radiogroup"
                aria-label="Rating"
                animate={{ scale }}
            >
                <div className="flex">
                    {stars.map((star, index) => {
                        const current = hoveredStar ?? rating;
                        const active = current !== null && star <= current;
                        const shouldBounce = justRated !== null && star <= justRated;

                        return (
                            <motion.button
                                key={star}
                                type="button"
                                ref={(el) => { starRefs.current[index] = el }}
                                role="radio"
                                aria-checked={active}
                                aria-label={`${star} star`}
                                tabIndex={rating === star || (rating === null && star === 1) ? 0 : -1}
                                onKeyDown={onKeyDown}
                                onClick={() => {
                                    setRating(star);
                                    setJustRated(star);
                                }}
                                onMouseEnter={() => setHoveredStar(star)}
                                onMouseLeave={() => setHoveredStar(null)}
                                className="h-12 w-12 flex items-center justify-center bg-transparent"
                                transition={
                                    reduce
                                        ? { duration: 0 }
                                        :{
                                            duration: 0.2,
                                            delay: star * 0.05,
                                        }
                                }
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
                                    transition={
                                        reduce
                                            ? { duration: 0 }
                                            :{
                                                scale: {
                                                    duration: 0.45,
                                                    ease: "easeOut",
                                                },
                                                duration: 0.2,
                                            }
                                    }
                                >
                                    <path d={STAR_PATH.path} />
                                </motion.svg>
                            </motion.button>
                        )
                    })}
                </div>

                <button
                    type="submit"
                    disabled={!rating || sending}
                    className="px-4 py-2 rounded bg-yellow-400 text-black cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    {sending ? "Sending..." : "Submit rating"}
                </button>
            </motion.div>
        </form>
    );
}