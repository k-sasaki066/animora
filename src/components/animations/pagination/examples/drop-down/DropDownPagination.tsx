"use client";

import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { PaginationArrow } from "../PaginationArrow";
import { PageSelectDropdown } from "./PageSelectDropdown";
import { useDropDownPagination } from "./useDropDownPagination";

const BASE_WIDTH = 400;

export default function DropDownPagination() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.4), 1.2)
        : 1;

    const items = Array.from({ length: 40 }, (_, i) => `Item ${i + 1}`);
    const itemsPerPage = 4;

    const {
        reduce,
        selectedItem,
        setSelectedItem,
        isOpen,
        currentPage,
        totalPages,
        currentItems,
        handlePrev,
        handleNext,
        handleSelectPage,
        toggleOpen,
    } = useDropDownPagination({
        items,
        itemsPerPage,
    });

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center bg-[#dfd6d2] py-6">
            <motion.div className="w-full h-full flex flex-col justify-center items-center gap-4 origin-center" animate={{scale}}>
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
                                    type="button"
                                    onClick={() => setSelectedItem(item)}
                                    role="option"
                                    aria-selected={isSelected}
                                    className={`w-full p-2 rounded text-center text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6a7282] transition
                                        ${isSelected
                                            ? "bg-[#797878] text-white"
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
                <div className="relative">
                    <div className="w-60 flex bg-[#3f3f3f] text-white rounded-md overflow-hidden text-sm">

                        {/* prev */}
                        <PaginationArrow
                            icon="prev"
                            direction="prev"
                            onClick={handlePrev}
                            disabled={currentPage === 1}
                            className="px-4 py-1.5 border-r border-white/20 text-xs hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:bg-[#808080]"
                        />

                        {/* 中央（ドロップダウン開閉） */}
                        <button
                            onClick={toggleOpen}
                            aria-haspopup="listbox"
                            aria-expanded={isOpen}
                            aria-controls="pagination-listbox"
                            className="flex-1 flex items-center justify-center gap-2 py-1.5 cursor-pointer hover:bg-white/10 focus:outline-none focus-visible:bg-[#808080]"
                        >
                            <span>
                                {currentPage} / {totalPages}
                            </span>

                            <motion.span
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={
                                    reduce
                                        ? { duration: 0 }
                                        : { duration: 0.2 }
                                }
                            >
                                ▼
                            </motion.span>
                        </button>

                        {/* next */}
                        <PaginationArrow
                            icon="next"
                            direction="next"
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className="px-4 py-1.5 border-l border-white/20 text-xs hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:bg-[#808080]"
                        />
                    </div>

                    {/* ページ選択ドロップダウン */}
                    <PageSelectDropdown
                        isOpen={isOpen}
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onSelect={handleSelectPage}
                        reduce={reduce}
                    />
                </div>
            </motion.div>
        </div>
    );
}