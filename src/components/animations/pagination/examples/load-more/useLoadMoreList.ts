import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { useReducedMotion } from "framer-motion";

export const useLoadMoreList = (allItems: string[], initialVisible = 4) => {
    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const [visibleCount, setVisibleCount] = useState(initialVisible);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [focusedIndex, setFocusedIndex] = useState(0);

    const listRef = useRef<HTMLUListElement>(null);
    const lastItemRef = useRef<HTMLLIElement | null>(null);

    const currentItems = allItems.slice(0, visibleCount);

    const handleKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();

            let nextIndex = focusedIndex;

            if (e.key === "ArrowDown") {
                nextIndex = focusedIndex < currentItems.length - 1 ? focusedIndex + 1 : 0;
            } else if (e.key === "ArrowUp") {
                nextIndex = focusedIndex > 0 ? focusedIndex - 1 : currentItems.length - 1;
            }

            setFocusedIndex(nextIndex);

            // フォーカスだけ移動
            const button = listRef.current?.querySelectorAll<HTMLButtonElement>("button")[nextIndex];
            button?.focus();

        } else if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            const item = currentItems[focusedIndex];
            setSelectedItem(item);
        }
    };

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 4, allItems.length));
    };

    useEffect(() => {
        lastItemRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    }, [visibleCount, reduce]);

    return {
        reduce,
        visibleCount,
        setSelectedItem,
        selectedItem,
        currentItems,
        listRef,
        lastItemRef,
        handleKeyDown,
        handleLoadMore,
    };
};