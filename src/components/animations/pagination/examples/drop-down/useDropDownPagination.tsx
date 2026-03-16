import { useState, useMemo } from "react";
import { useReducedMotion } from "framer-motion";

type UseDropDownPaginationProps<T> = {
    items: T[];
    itemsPerPage: number;
};

export function useDropDownPagination<T>({
    items,
    itemsPerPage,
}: UseDropDownPaginationProps<T>) {
    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const currentItems = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return items.slice(start, start + itemsPerPage);
    }, [currentPage, items, itemsPerPage]);

    const handlePrev = () => {
        setCurrentPage((p) => Math.max(p - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((p) => Math.min(p + 1, totalPages));
    };

    const handleSelectPage = (page: number) => {
        setCurrentPage(page);
        setIsOpen(false);
    };

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return {
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
    };
}