import { useState, useMemo } from "react";
import { useReducedMotion } from "framer-motion";

type UseCapsulePaginationOptions<T> = {
    items: T[];
    itemsPerPage: number;
};

export function useCapsulePagination<T>({
    items,
    itemsPerPage,
}: UseCapsulePaginationOptions<T>) {
    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState<T | null>(null);
    const [direction, setDirection] = useState(0);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const currentItems = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return items.slice(start, start + itemsPerPage);
    }, [currentPage, items, itemsPerPage]);

    const changePage = (newPage: number) => {
        setDirection(newPage > currentPage ? 1 : -1);
        setCurrentPage(newPage);
    };

    const goPrev = () => {
        if (currentPage > 1) changePage(currentPage - 1);
    };

    const goNext = () => {
        if (currentPage < totalPages) changePage(currentPage + 1);
    };

    return {
        reduce,
        currentPage,
        totalPages,
        currentItems,
        selectedItem,
        setSelectedItem,
        direction,
        goPrev,
        goNext,
    };
}