import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type UseInfiniteScrollListProps<T> = {
    items: T[];
    itemsPerLoad: number;
    delay?: number;
};

export function useInfiniteScrollList<T>({
    items,
    itemsPerLoad,
    delay = 800,
}: UseInfiniteScrollListProps<T>) {
    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const [visibleCount, setVisibleCount] = useState(itemsPerLoad);
    const [selectedItem, setSelectedItem] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    const listRef = useRef<HTMLUListElement | null>(null);
    const observerRef = useRef<HTMLDivElement | null>(null);

    const currentItems = items.slice(0, visibleCount);

    const handleScroll = () => {
        if (!hasScrolled) setHasScrolled(true);
    };

    const loadMore = useCallback(() => {
        if (isLoading) return;

        setIsLoading(true);

        setTimeout(() => {
            setVisibleCount((prev) =>
                Math.min(prev + itemsPerLoad, items.length)
            );
            setIsLoading(false);
        }, delay);
    }, [isLoading, items.length, itemsPerLoad, delay]);

    useEffect(() => {
        const target = observerRef.current;
        const root = listRef.current;
        if (!target || !root) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMore();
                }
            },
            {
                root,
                threshold: 0.5, //半分見えたらcallbackを実行
            }
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, [loadMore]);

    return {
        reduce,
        listRef,
        observerRef,
        currentItems,
        visibleCount,
        selectedItem,
        setSelectedItem,
        isLoading,
        hasScrolled,
        handleScroll,
    };
}