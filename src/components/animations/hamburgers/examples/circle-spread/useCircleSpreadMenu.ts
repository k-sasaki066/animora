"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_MENUS, NavMenu } from "./constants";

export function useCircleSpreadMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [isCircleOpen, setIsCircleOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<NavMenu>(NAV_MENUS[0]);

    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const open = () => {
        setIsCircleOpen(true);
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);

        requestAnimationFrame(() => {
            buttonRef.current?.focus();
        });
    };

    const toggle = () => (isOpen ? close() : open());

    // Escapeキー
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault();
                close();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [isOpen]);

    // 初期フォーカス
    useEffect(() => {
        if (isOpen) {
            const index = NAV_MENUS.indexOf(activeMenu);
            const target = itemRefs.current[index] ?? itemRefs.current[0];
            target?.focus();
        }
    }, [isOpen, activeMenu]);

    return {
        isOpen,
        isCircleOpen,
        setIsCircleOpen,
        activeMenu,
        setActiveMenu,
        buttonRef,
        itemRefs,
        toggle,
        close,
    };
}