"use client";

import { useState, useEffect, useRef } from "react";
import { items, Category } from "./categoryData";

export function useCategorySearch() {
    const [selected, setSelected] = useState<Category | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const listRef = useRef<HTMLUListElement>(null);

    const filtered = selected
        ? items.filter((item) => item.category === selected)
        : [];

    // キーボード操作
    useEffect(() => {
        if (!selected) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setActiveIndex((prev) =>
                    prev < filtered.length - 1 ? prev + 1 : 0
                );
            }

            if (e.key === "ArrowUp") {
                e.preventDefault();
                setActiveIndex((prev) =>
                    prev > 0 ? prev - 1 : filtered.length - 1
                );
            }

            if (e.key === "Enter" && activeIndex >= 0) {
                e.preventDefault();
            }

            if (e.key === "Escape") {
                setSelected(null);
                setActiveIndex(-1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selected, filtered.length, activeIndex]);

    // カテゴリ変更時にリセット
    useEffect(() => {
        setActiveIndex(-1);
    }, [selected]);

    // スクロール追従
    useEffect(() => {
        if (activeIndex < 0) return;

        const list = listRef.current;
        if (!list) return;

        const activeItem = list.children[activeIndex] as HTMLElement;
        if (!activeItem) return;

        activeItem.scrollIntoView({
            block: "nearest",
            behavior: "smooth",
        });
    }, [activeIndex]);

    return {
        selected,
        setSelected,
        activeIndex,
        setActiveIndex,
        filtered,
        listRef,
    };
}