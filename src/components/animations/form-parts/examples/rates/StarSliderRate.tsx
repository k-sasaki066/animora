import { motion, useReducedMotion } from "framer-motion";
import { useState, useRef } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";

const BASE_WIDTH = 400;

export default function StarSliderRate() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.3)
        : 1;

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const starRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeStar, setActiveStar] = useState<number>(0.5);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState<number | null>(null);
    const [bounceIndex, setBounceIndex] = useState<number | null>(null);
    const [pulseIndex, setPulseIndex] = useState<number | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const starValues = Array.from(
        { length: 10 },
        (_, i) => (i + 1) * 0.5
    );

    const displayRating = hoverRating ?? rating;

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!rating) return;

        const ok = window.confirm(`⭐ ${rating} 点で評価を送信しますか？`);
        if (!ok) return;

        setIsSubmitting(true);

        await new Promise((resolve) => setTimeout(resolve, 600));

        setIsSubmitting(false);
        setRating(0);
    }

    const { onKeyDown } = useRovingTabFocus<number>({
        values: starValues,
        activeValue: activeStar,
        setActiveValue: setActiveStar,
        refs: starRefs,
        onActivate: (value) => {
            setRating(value);
            setPulseIndex(value);
            setBounceIndex(value);

            setTimeout(() => {
                setPulseIndex(null);
                setBounceIndex(null);
            }, 800);
        }
    });

    return (
        <div ref={ref} className="w-full h-full overflow-hidden flex justify-center items-center bg-[#add9e6]">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-4"
                style={{ transform: `scale(${scale})` }}
            >
                <input type="hidden" name="rating" value={rating} />
                <div className="flex" role="radiogroup" aria-label="Star rating">
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
                            setActiveStar(value);
                            setPulseIndex(index);

                            if (!isLeft) {
                                setBounceIndex(index);
                            }

                            setTimeout(() => {
                                setPulseIndex(null);
                                setBounceIndex(null);
                            }, 800);
                        };
                        const leftRovingIndex = (index - 1) * 2;
                        const rightRovingIndex = leftRovingIndex + 1;

                        return (
                            <motion.div
                                key={index}
                                className="relative w-10 h-10"
                                onPointerMove={handlePointerMove}
                                onPointerDown={handlePointerDown}
                                onPointerLeave={() => setHoverRating(null)}
                                animate={
                                    bounceIndex === index
                                        ? { scale: [1, 1.3, 0.9, 1.2, 1] }
                                        : { scale: 1 }
                                }
                                transition={
                                    bounceIndex === index && !reduce
                                        ? { type: "tween", duration: 0.5, ease: "easeInOut" }
                                        : { duration: 0 }
                                }
                            >
                                {/* 左半分 */}
                                <div
                                    ref={(el) => { starRefs.current[leftRovingIndex] = el }}
                                    tabIndex={activeStar === index - 0.5 ? 0 : -1}
                                    role="radio"
                                    aria-checked={rating === index - 0.5}
                                    aria-label={`${index - 0.5} stars`}
                                    onKeyDown={onKeyDown}
                                    onFocus={() => setActiveStar(index - 0.5)}
                                    className="absolute top-0 left-0 h-full w-1/2 z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#faa112]"
                                />

                                {/* 右半分 */}
                                <div
                                    ref={(el) => { starRefs.current[rightRovingIndex] = el }}
                                    tabIndex={activeStar === index ? 0 : -1}
                                    role="radio"
                                    aria-checked={rating === index}
                                    aria-label={`${index} stars`}
                                    onKeyDown={onKeyDown}
                                    onFocus={() => setActiveStar(index)}
                                    className="absolute top-0 right-0 h-full w-1/2 z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#faa112]"
                                />

                                {/* 見た目のスター */}
                                <div className="relative z-10 w-full h-full pointer-events-none">
                                    <Star fill={fill} index={index} />
                                </div>

                                {/* パルス演出 */}
                                {pulseIndex === index && (
                                    <motion.div
                                        className="absolute inset-0 flex items-center justify-center text-[#fdf4d0] text-2xl pointer-events-none z-0"
                                        initial={{ scale: 1, opacity: 1 }}
                                        animate={{ scale: 3, opacity: 0 }}
                                        transition={
                                            reduce
                                                ? { duration: 0 }
                                                : { duration: 1, ease: "easeOut" }
                                        }
                                    >
                                        ★
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                <div className="text-black text-lg">
                    <span className="font-bold text-2xl">
                        {rating.toFixed(1)}
                    </span>
                    / 5
                </div>
                <button
                    type="submit"
                    disabled={!rating || isSubmitting}
                    className="mt-4 px-6 py-2 rounded-full bg-[#2bb36f] hover:bg-[#25c073] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Sending..." : "Submit review"}
                </button>
            </form>
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