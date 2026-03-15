import { useState, useRef } from "react";
import { MENU_ITEMS } from "./constants";

export function useCenterAccordionMenu() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const itemRefs = useRef<(HTMLAnchorElement | null)[][]>([]);

    const toggle = (index: number): void => {
        if (openIndex === index) {
            setOpenIndex(null);
            return;
        }

        setOpenIndex(index);
        setActiveItemIndex(0);

        requestAnimationFrame(() => {
            itemRefs.current[index]?.[0]?.focus();
        });
    };

    const close = (index: number): void => {
        setOpenIndex(null);

        requestAnimationFrame(() => {
            buttonRefs.current[index]?.focus();
        });
    };

    const onItemKeyDown = (
        e: React.KeyboardEvent,
        sectionIndex: number,
        itemIndex: number
    ): void => {
        const items = MENU_ITEMS[sectionIndex].items;

        switch (e.key) {
            case "ArrowRight":
            case "ArrowDown":
            e.preventDefault();
            const next = (itemIndex + 1) % items.length;
            setActiveItemIndex(next);
            itemRefs.current[sectionIndex]?.[next]?.focus();
            break;

        case "ArrowLeft":
        case "ArrowUp":
            e.preventDefault();
            const prev = (itemIndex - 1 + items.length) % items.length;
            setActiveItemIndex(prev);
            itemRefs.current[sectionIndex]?.[prev]?.focus();
            break;

        case "Escape":
            e.preventDefault();
            close(sectionIndex);
            break;
        }
    };

    return { openIndex, activeItemIndex, buttonRefs, itemRefs, toggle, close, onItemKeyDown };
}