"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { PaginationArrow } from "../PaginationArrow";
import { PaginationPages } from "./PaginationPages";

const BASE_WIDTH = 420;

export default function CirclePaginationWithList() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.4), 1.2)
        : 1;

    const totalItems = 20;
    const itemsPerPage = 4;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const items = useMemo(
        () => Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`),
        []
    );

    const currentItems = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return items.slice(start, start + itemsPerPage);
    }, [currentPage, items]);

    // ページ変更時に選択リセット
    useEffect(() => {
        setSelectedItem(null);
    }, [currentPage]);

    const goPrev = () =>
        setCurrentPage((p) => Math.max(p - 1, 1));

    const goNext = () =>
        setCurrentPage((p) => Math.min(p + 1, totalPages));

    return (
        <div ref={ref} className="w-full min-h-full flex justify-center items-center py-4 bg-[#f3f4f6]">
            <motion.div className="w-full h-full flex flex-col justify-center items-center gap-8" animate={{ scale }}>
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
                                    className={`w-full p-2 rounded text-center text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6a7282] transition
                                        ${isSelected
                                            ? "bg-[#6a7282] text-white"
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
                <div className="flex items-center gap-5">
                    {/* Prev */}
                    <PaginationArrow
                        icon="‹"
                        direction="prev"
                        onClick={goPrev}
                        disabled={currentPage === 1}
                        className="text-[#99a1af] text-2xl  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#99a1af]"
                    />

                    {/* Pages */}
                    <PaginationPages
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onChange={setCurrentPage}
                    />

                    {/* Next */}
                    <PaginationArrow
                        icon="›"
                        direction="next"
                        onClick={goNext}
                        disabled={currentPage === totalPages}
                        className="text-[#99a1af] text-2xl  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#99a1af]"
                    />
                </div>
            </motion.div>
        </div>
    );
}