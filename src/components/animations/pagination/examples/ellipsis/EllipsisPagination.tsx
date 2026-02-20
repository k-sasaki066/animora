"use client";

import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useEllipsisPagination } from "./useEllipsisPagination";
import { PaginationArrow } from "../PaginationArrow";

const BASE_WIDTH = 420;

export default function EllipsisPagination() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.2)
        : 1;

    const items = Array.from({ length: 36 }, (_, i) => `Item ${i + 1}`);

    const {
        currentItems,
        currentPage,
        setCurrentPage,
        totalPages,
        selectedItem,
        setSelectedItem,
        goPrev,
        goNext,
        getPages,
        reduce,
    } = useEllipsisPagination({ items, itemsPerPage: 4 });


    return (
        <div ref={ref} className="w-full min-h-full flex justify-center items-center gap-10 p-6 bg-[#f8fafc]">
            <motion.div className="w-full h-full flex flex-col justify-center items-center gap-10" animate={{ scale }}>
                {/* 表示リスト */}
                <ul
                    className="w-full max-w-65 space-y-2"
                    role="listbox"
                    aria-label="Item list"
                >
                    {currentItems.map((item) => {
                        const isSelected = selectedItem === item;

                        return (
                            <li key={item}>
                                <button
                                    id={item}
                                    type="button"
                                    onClick={() => setSelectedItem(item)}
                                    role="option"
                                    aria-selected={isSelected}
                                    className={`w-full p-2 rounded text-center text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6a7282] transition
                                        ${isSelected
                                            ? "bg-[#4FD1C5] text-white"
                                            : "bg-white hover:bg-[#e5e7eb]"
                                        }
                                    `}
                                >
                                    {item}
                                </button>
                            </li>
                        );
                    })}
                </ul>

                {/* ページネーション */}
                <nav
                    className="w-54 flex justify-between items-center gap-1.5 border-b border-[#e5e7eb] pb-3"
                    role="navigation"
                    aria-label="Pagination Navigation"
                >
                    {/* Prev */}
                    <PaginationArrow
                        icon="←"
                        direction="prev"
                        onClick={goPrev}
                        disabled={currentPage === 1}
                        className="text-[#4FD1C5] text-sm hover:text-[#4a5565] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#99a1af]"
                    />

                    {/* Page Numbers */}
                    <div aria-live="polite" className="sr-only">
                        Page {currentPage} of {totalPages}
                    </div>
                    {getPages.map((page, index) => {
                        const isActive = currentPage === page;

                        return page === "..."
                            ? (
                                <span key={`${page}-${index}`} className="text-gray-400 text-sm px-2">
                                    ...
                                </span>
                            ) : (
                                <motion.button
                                    key={`${page}-${index}`}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setCurrentPage(page as number)}
                                    aria-current={
                                        currentPage === page ? "page" : undefined
                                    }
                                    className={`w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium transition-colors
                                        ${isActive
                                            ? "bg-[#4FD1C5] text-white"
                                            : "text-gray-500 hover:bg-[#e5e7eb]"
                                        }
                                    `}
                                    transition={
                                        reduce
                                            ? { duration: 0 }
                                            : { duration: 0.2 }
                                    }
                                >
                                    {page}
                                </motion.button>
                            )
                    })}

                    {/* Next */}
                    <PaginationArrow
                        icon="→"
                        direction="next"
                        onClick={goNext}
                        disabled={currentPage === totalPages}
                        className="text-[#4FD1C5] text-sm hover:text-[#4a5565] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#99a1af]"
                    />
                </nav>
            </motion.div>
        </div>
    );
}