"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { PaginationArrow } from "../PaginationArrow";
import { useCapsulePagination } from "./useCapsulePagination";

const BASE_WIDTH = 400;

export default function CapsulePagination() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.2)
        : 1;

    const items = Array.from({ length: 24 }, (_, i) => `Item ${i + 1}`);

    const {
        reduce,
        currentPage,
        totalPages,
        currentItems,
        selectedItem,
        setSelectedItem,
        direction,
        goPrev,
        goNext,
    } = useCapsulePagination({
        items,
        itemsPerPage: 4,
    });

    const variants: Variants = {
        enter: (dir: number) => ({
            x: 40 * dir,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir: number) => ({
            x: -40 * dir,
            opacity: 0,
        }),
    };

    return (
        <div ref={ref} className="w-full min-h-full flex justify-center items-center p-4">
            <motion.div className="w-full h-full flex flex-col justify-center items-center gap-8" animate={{ scale }}>
                {/* 表示 */}
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.ul
                        key={currentPage}
                        role="listbox"
                        aria-label="Items"
                        aria-activedescendant={selectedItem ?? undefined}
                        variants={variants}
                        custom={direction}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={
                            reduce
                                ? { duration: 0 }
                                : { duration: 0.25 }
                        }
                        className="w-full max-w-xs space-y-2"
                    >
                        {currentItems.map((item) => {
                            const isSelected = selectedItem === item;

                            return (
                                <li key={item}>
                                    <button
                                        id={item}
                                        role="option"
                                        aria-selected={isSelected}
                                        type="button"
                                        onClick={() => setSelectedItem(item)}
                                        className={`w-full p-2 rounded text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F6BFF]
                                            ${isSelected
                                                ? "bg-[#4F6BFF] text-white"
                                                : "bg-[#f3f4f6] hover:bg-[#e5e7eb]"
                                            }
                                        `}
                                    >
                                        {item}
                                    </button>
                                </li>
                            );
                        })}
                    </motion.ul>
                </AnimatePresence>

                {/* ページネーション */}
                <motion.nav
                    layout
                    className="w-50 flex justify-between items-center gap-6 px-8 py-2 rounded-full bg-[#e5e7eb]"
                    role="navigation"
                    aria-label="Pagination Navigation"
                >
                    {/* Prev */}
                    <PaginationArrow
                        icon="‹"
                        direction="prev"
                        onClick={goPrev}
                        disabled={currentPage === 1}
                        className="text-[#4F6BFF] text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#99a1af]"
                    />

                    {/* Page Info */}
                    <div aria-live="polite" className="sr-only">
                        Page {currentPage} of {totalPages}
                    </div>
                    <motion.span
                        key={currentPage}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={
                            reduce
                                ? { duration: 0 }
                                : { duration: 0.3 }
                        }
                        className="text-[#4F6BFF] font-medium tracking-wide"
                    >
                        Page {currentPage}/{totalPages}
                    </motion.span>

                    {/* Next */}
                    <PaginationArrow
                        icon="›"
                        direction="next"
                        onClick={goNext}
                        disabled={currentPage === totalPages}
                        className="text-[#4F6BFF] text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#99a1af]"
                    />
                </motion.nav>
            </motion.div>
        </div>
    );
}