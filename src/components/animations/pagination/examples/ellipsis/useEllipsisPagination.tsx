"use client";

import { useState, useMemo } from "react";
import { useReducedMotion } from "framer-motion";

type UseEllipsisPaginationOptions<T> = {
    items: T[];
    itemsPerPage: number;
};

export function useEllipsisPagination<T>({
    items,
    itemsPerPage,
}: UseEllipsisPaginationOptions<T>) {
    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState<T | null>(null);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    // 現在ページに表示するアイテム
    const currentItems = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return items.slice(start, start + itemsPerPage);
    }, [currentPage, items, itemsPerPage]);

    // ページ変更
    const changePage = (newPage: number) => {
        setCurrentPage(Math.min(Math.max(newPage, 1), totalPages));
    };

    const goPrev = () => changePage(currentPage - 1);
    const goNext = () => changePage(currentPage + 1);

  // Ellipsisページ番号計算
    const getPages = useMemo<(number | string)[]>(() => {
        const pages: (number | string)[] = [];

        if (currentPage <= 2) {
            pages.push(1, 2, 3, "...", totalPages);
            return pages;
        }

        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (currentPage >= totalPages - 2) {
            pages.push(
                1,
                "...",
                totalPages - 2,
                totalPages - 1,
                totalPages
            );
            return pages;
        }

        pages.push(
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "...",
            totalPages
        );

        return pages;
    }, [currentPage, totalPages]);

    return {
        reduce,
        setCurrentPage,
        currentPage,
        totalPages,
        currentItems,
        selectedItem,
        setSelectedItem,
        goPrev,
        goNext,
        getPages,
    };
}