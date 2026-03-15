import { useState, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";
import { MENUS } from "./constants";

export function useFoldingMenu() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const menuButtonRefs = useRef<HTMLButtonElement[]>([]);
    const menuItemRefs = useRef<HTMLAnchorElement[][]>([]);

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const toggleMobileMenu = () => setMobileOpen(prev => !prev);

    const { onKeyDown: onMenuKeyDown } = useRovingTabFocus({
        values: MENUS.map((_, i) => i),
        activeValue: activeIndex,
        setActiveValue: setActiveIndex,
        refs: menuButtonRefs,
        onExpand: (index) => {
            if (index === null) return;
            if (!MENUS[index].items?.length) return;

            setOpenIndex(index);
            requestAnimationFrame(() => {
                menuItemRefs.current[index]?.[0]?.focus();
            });
        },
    });

    const onMenuItemKeyDown = (
        e: React.KeyboardEvent,
        menuIndex: number,
        itemIndex: number
    ) => {
        const items = menuItemRefs.current[menuIndex];
        if (!items) return;

        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                items[(itemIndex + 1) % items.length]?.focus();
                break;

            case "ArrowUp":
                e.preventDefault();
                items[(itemIndex - 1 + items.length) % items.length]?.focus();
                break;

            case "ArrowRight":
                e.preventDefault();
                const next = (menuIndex + 1) % MENUS.length;
                setActiveIndex(next);
                setOpenIndex(next);
                requestAnimationFrame(() => {
                    menuItemRefs.current[next]?.[0]?.focus();
                });
                break;

            case "ArrowLeft":
                e.preventDefault();
                const prev = (menuIndex - 1 + MENUS.length) % MENUS.length;
                setActiveIndex(prev);
                setOpenIndex(prev);
                requestAnimationFrame(() => {
                    menuItemRefs.current[prev]?.[0]?.focus();
                });
                break;

            case "Escape":
                e.preventDefault();
                setOpenIndex(null);
                menuButtonRefs.current[menuIndex]?.focus();
                break;
        }
    };

    return { openIndex, setOpenIndex, menuButtonRefs, menuItemRefs, onMenuKeyDown, onMenuItemKeyDown, reduce, mobileOpen, setMobileOpen, toggleMobileMenu };
}