import { motion, useReducedMotion } from "framer-motion";
import { useState, useRef } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";

const options = [0, 1, 2, 3, 4];
const BASE_WIDTH = 450;

export default function RadioSlideButton() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.4), 1.3)
        : 1;

    const [active, setActive] = useState(0);
    const [loading, setLoading] = useState(false);
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const { onKeyDown } = useRovingTabFocus<number>({
        values: options,
        activeValue: active,
        setActiveValue: setActive,
        refs: buttonRefs,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (active === null) return;
        setLoading(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 600));
            alert("送信完了！");
        } catch (error) {
            console.error(error);
            alert("送信失敗");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center bg-amber-500">
            <motion.form onSubmit={handleSubmit} className="w-1/2 min-w-55" animate={{scale}}>
                <h1 id="rating-label" className="mb-4 font-bold text-lg">
                    Select one:
                </h1>

                <input type="hidden" name="rating" value={active ?? ""} />

                <div
                    className="relative flex justify-between"
                    role="radiogroup"
                    aria-labelledby="rating-label"
                >
                    {options.map((i, index) => {
                        const checked = active === i;

                        return (
                            <button
                                key={i}
                                type="button"
                                ref={(el) => {
                                    buttonRefs.current[index] = el;
                                }}
                                role="radio"
                                aria-checked={checked}
                                tabIndex={checked ? 0 : -1}
                                className="relative w-[15%] aspect-square rounded-full bg-white/20 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                onPointerDown={(e) => {
                                    e.preventDefault();
                                    setActive(i);
                                    e.currentTarget.focus();
                                }}
                                onKeyDown={onKeyDown}
                            >
                                {checked && (
                                    <motion.span
                                        layoutId="slider"
                                        className="absolute w-[70%] aspect-square rounded-full bg-white"
                                        animate={{ scale: [1, 0.5, 1] }}
                                        transition={
                                            reduce
                                                ? { duration: 0 }
                                                : {
                                                    scale: {
                                                        duration: 0.3,
                                                        ease: "easeInOut",
                                                    },
                                                }
                                        }
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
                <button
                    type="submit"
                    disabled={active === null || loading}
                    className="mt-6 w-full py-3 rounded-lg bg-white text-amber-500 font-bold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? "Sending..." : "Submit"}
                </button>
            </motion.form>
        </div>
    );
}