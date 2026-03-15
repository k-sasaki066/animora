import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BASE_WIDTH, COLORS, FAQ_DATA } from "./constants";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function FaqAccordionMenu() {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.6), 1)
        : 1;

    const isMobile = width ? width < 530 : true;

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const toggle = (index: number) => {
        setOpenIndexes((prev) =>
        prev.includes(index)
            ? prev.filter((i) => i !== index)
            : [...prev, index],
        );
    };

    return (
        <div
            ref={ref}
            className="w-full h-full overflow-y-scroll px-4 pb-6 no-scrollbar" style={{ backgroundColor: COLORS.bgPage }}
        >
            {/* title */}
            <div
                className="sticky top-0 z-10 pt-2"
                style={{ backgroundColor: COLORS.bgPage }}
            >
                <div className="flex justify-center items-center gap-2 px-4 py-3">
                    <HelpCircle
                        className="h-6 w-6"
                        style={{ color: COLORS.textMuted }}
                    />
                    <h2
                        className={`font-bold ${isMobile ? "text-lg" : "text-xl"}`} style={{ color: COLORS.textPrimary }}
                    >
                        FAQ
                    </h2>
                </div>
            </div>

            <div
                className="w-full max-w-md mx-auto border-t"
                style={{ borderTopColor: COLORS.border }}
            >
                {FAQ_DATA.map((item, index) => {
                    const open = openIndexes.includes(index);

                    return (
                        <div
                            key={index}
                            className="border-b"
                            style={{ borderBottomColor: COLORS.border }}
                        >
                            {/* question */}
                            <motion.button
                                type="button"
                                onClick={() => toggle(index)}
                                aria-expanded={open}
                                aria-controls={`faq-panel-${index}`}
                                id={`faq-header-${index}`}
                                className="flex w-full items-start justify-between px-4 py-3 text-left gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                whileHover={
                                    reduce
                                    ? {}
                                    : {
                                        backgroundColor: COLORS.bgItemOpen,
                                        }
                                }
                                animate={{ backgroundColor: open ? COLORS.bgItemOpen : COLORS.bgPage, }}
                                transition={
                                    reduce
                                        ? { duration: 0 }
                                        : { duration: 0.3 }
                                }
                            >
                                <span
                                    className={`font-semibold ${isMobile ? "text-sm" : "text-base"}`}
                                    style={{ color: COLORS.textPrimary }}
                                >
                                    <span className="sr-only">質問</span>
                                    <span className="mr-1">Q{index + 1}.</span>
                                    {item.question}
                                </span>
                                <motion.span
                                    style={{ color: open ? COLORS.iconMuted : COLORS.textMuted }}
                                    animate={{ rotate: open ? 180 : 0 }}
                                    transition={
                                        reduce
                                            ? { duration: 0 }
                                            : { duration: 0.3 }
                                    }
                                >
                                    <ChevronDown className="h-5 w-5" />
                                </motion.span>
                            </motion.button>

                            {/* answer */}
                            <AnimatePresence initial={false}>
                                {open && (
                                    <motion.div
                                        id={`faq-panel-${index}`}
                                        role="region"
                                        aria-labelledby={`faq-header-${index}`}
                                        aria-live="polite" //領域は動的に変わることを宣言
                                        aria-atomic="true" //新しい回答が表示されたら、まとめて読んでと指示
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={
                                            reduce
                                                ? { duration: 0 }
                                                : { duration: 0.25, ease: "easeOut" }
                                        }
                                        className="overflow-hidden"
                                    >
                                        <div
                                            className={`pl-8 pr-4 py-3 text-left font-semibold ${isMobile ? "text-xs" : "text-sm pl-10"}`}
                                            style={{ color: COLORS.textPrimary }}
                                        >
                                            <span className="sr-only">回答</span>
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}