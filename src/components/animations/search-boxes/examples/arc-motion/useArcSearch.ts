"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export function useArcSearch() {
    const [value, setValue] = useState("");
    const [results, setResults] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    const inputRef = useRef<HTMLInputElement>(null);
    const isTyping = value.length > 0;

    const reset = useCallback(() => {
        setValue("");
        setResults([]);
        setActiveIndex(-1);
        inputRef.current?.blur();
    }, []);

    const select = useCallback((item: string) => {
        setValue(item);
        setResults([]);
        setActiveIndex(-1);
    }, []);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (!results.length) return;

            if (e.key === "ArrowDown") {
                e.preventDefault();
                setActiveIndex((prev) =>
                    prev < results.length - 1 ? prev + 1 : 0
                );
            }

            if (e.key === "ArrowUp") {
                e.preventDefault();
                setActiveIndex((prev) =>
                    prev > 0 ? prev - 1 : results.length - 1
                );
            }

            if (e.key === "Enter") {
                e.preventDefault();
                if (activeIndex >= 0) {
                    select(results[activeIndex]);
                }
            }

            if (e.key === "Escape") {
                reset();
            }
        },
        [results, activeIndex, select, reset]
    );

    useEffect(() => {
        setActiveIndex(-1);

        if (!value.trim()) {
            setResults([]);
            return;
        }

        setIsLoading(true);

        const timer = setTimeout(() => {
            const fakeData = [
                "Apple",
                "Banana",
                "Orange",
                "Grapes",
                "Mango",
                "Strawberry",
            ];

            const filtered = fakeData.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            );

            setResults(filtered);
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [value]);

    return {
        value,
        setValue,
        results,
        isLoading,
        activeIndex,
        setActiveIndex,
        isTyping,
        inputRef,
        reset,
        select,
        handleKeyDown,
    };
}