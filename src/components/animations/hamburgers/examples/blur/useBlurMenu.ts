"use client";

import { useRef, useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { NAV_MENUS } from "./constants";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";

export function useBlurMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeMenu, setActiveMenu] = useState(NAV_MENUS[0]);

    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const prefersReducedMotion = useReducedMotion();
    const shouldReduceMotion = prefersReducedMotion ?? false;

    // メニュー開閉
    const toggle = () => {
        setIsOpen((prev) => !prev);
    };

    const close = () => {
        setIsOpen(false);

        // フォーカスをボタンに戻す
        requestAnimationFrame(() => {
            buttonRef.current?.focus();
        });
    };

    /** ESC キーで閉じる */
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                close();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, close]);

    // 初期フォーカス
    useEffect(() => {
        if (isOpen) {
            const index = NAV_MENUS.indexOf(activeMenu);
            const target = itemRefs.current[index] ?? itemRefs.current[0];
            target?.focus();
        }
    }, [isOpen, activeMenu]);

    const { onKeyDown } = useRovingTabFocus({
        values: NAV_MENUS,
        activeValue: activeMenu,
        setActiveValue: setActiveMenu,
        refs: itemRefs,
        onActivate: close,
    });

    return { isOpen, activeMenu, setActiveMenu, buttonRef, itemRefs, toggle, close, onKeyDown, shouldReduceMotion };
}