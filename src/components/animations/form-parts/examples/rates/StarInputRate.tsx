import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Star } from "lucide-react"
import { useContainerSize } from "@/hooks/useContainerSize";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";

const BASE_WIDTH = 450;

export default function StarInputRate() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.4), 1.3)
        : 1;

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const [rating, setRating] = useState<number | null>(null);
    const [hovered, setHovered] = useState<number | null>(null);

    const starRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [activeStar, setActiveStar] = useState<number>(1);
    const [review, setReview] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const stars = [1, 2, 3, 4, 5];

    useEffect(() => {
        if (rating) {
            textareaRef.current?.focus();
        }
    }, [rating]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!rating) return;

        const ok = window.confirm(`評価${rating} 点\n『${review}』\n評価を送信しますか？`);
        if (!ok) return;

        setIsSubmitting(true);

        await new Promise((r) => setTimeout(r, 800));

        setIsSubmitting(false);

        setRating(null);
        setReview("");
    };

    const { onKeyDown: onStarKeyDown } = useRovingTabFocus<number>({
        values: stars,
        activeValue: activeStar,
        setActiveValue: setActiveStar,
        refs: starRefs,
        onActivate: (value) => {
            setRating(value);
        }
    });

    return (
        <div ref={ref} className="w-full h-full overflow-hidden flex justify-center items-center bg-neutral-900 p-2">
            <form
                onSubmit={handleSubmit}
                className="mx-auto rounded-md border border-neutral-700 p-4 text-center text-neutral-200"
                style={{ transform: `scale(${scale})` }}
            >
                <input type="hidden" name="rating" value={rating ?? ""}/>
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
                                ref={(el) => {
                                    starRefs.current[star - 1] = el;
                                }}
                                aria-checked={rating === star}
                                aria-label={`${star} star`}
                                tabIndex={activeStar === star ? 0 : -1}
                                onKeyDown={onStarKeyDown}
                                onClick={() => {
                                    setActiveStar(star);
                                    setRating(star);
                                }}
                                onMouseEnter={() => {
                                    setHovered(star);
                                    setActiveStar(star);
                                }}
                                onMouseLeave={() => setHovered(null)}
                                whileHover={{ rotate: -15, scale: 1.3 }}
                                whileTap={{ scale: 0.95 }}
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
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 120, opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={
                                reduce
                                    ? { duration: 0 }
                                    : {
                                        duration: 0.4,
                                        ease: "easeOut"
                                    }
                            }
                            className="overflow-hidden"
                        >
                            <textarea
                                ref={textareaRef}
                                id="review"
                                name="review"
                                key="review-textarea"
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                                onFocus={(e) => e.stopPropagation()}
                                className="mt-4 h-24 w-full resize-none rounded bg-neutral-800 p-3 text-sm text-neutral-100 outline-none"
                                placeholder="Brief review"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {rating && (
                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileTap={{ scale: 0.96 }}
                        className="mt-3 w-full rounded bg-yellow-400 py-2 text-sm font-semibold text-neutral-900 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Sending..." : "Submit review"}
                    </motion.button>
                )}
            </form>
        </div>
    );
}