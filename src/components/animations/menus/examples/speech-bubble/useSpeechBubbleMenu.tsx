"use client";

import { useState, useRef, useEffect } from "react";
import { MENU_ITEMS } from "./constants";

export function useSpeechBubbleMenu() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [hovered, setHovered] = useState<string | null>(null);
    const itemRefs = useRef<(HTMLElement | null)[]>([]);
    const navRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        const onDocPointerDown = (e: MouseEvent) => {
            if (!navRef.current?.contains(e.target as Node)) {
                setOpenMenu(null);
            }
        };
        document.addEventListener("click", onDocPointerDown);
        return () => {
            document.removeEventListener("click", onDocPointerDown);
        };
    }, []);

    const toggle = (label: string) => {
        setOpenMenu((prev) => (prev === label ? null : label));
    };

    const onTopItemKeyDown = (e: React.KeyboardEvent, itemIndex: number
    ) => {
        const items = MENU_ITEMS;
        const max = items.length;

        switch (e.key) {
            case "ArrowRight":
            case "ArrowDown": {
                e.preventDefault();
                const next = (itemIndex + 1) % max;
                itemRefs.current[next]?.focus();
                break;
            }

            case "ArrowLeft":
            case "ArrowUp": {
                e.preventDefault();
                const prev = (itemIndex - 1 + max) % max;
                itemRefs.current[prev]?.focus();
                break;
            }

            case "Enter":
            case " ": {
                if (items[itemIndex].submenu) {
                    e.preventDefault();
                    setOpenMenu(items[itemIndex].label);
                }
                break;
            }

            case "Escape": {
                e.preventDefault();
                setOpenMenu(null);
                break;
            }
        }
    };

    return { openMenu, setOpenMenu, hovered, setHovered, itemRefs, navRef, toggle, onTopItemKeyDown };
}