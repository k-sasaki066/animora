"use client";

import { useRef, useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { NAV_MENUS } from "./constants";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";

export function useExplodingMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeMenu, setActiveMenu] = useState(NAV_MENUS[0]);
    const [explode, setExplode] = useState<boolean>(false);

    const navRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const prefersReducedMotion = useReducedMotion();
    const shouldReduceMotion = prefersReducedMotion ?? false;

    // メニュー開閉
    const toggle = () => {
        if (!isOpen) {
            setExplode(true);
            setIsOpen(true);
        } else {
            setIsOpen(false);
            setExplode(false);
        }
    };

    const close = () => {
        setIsOpen(false);

        // フォーカスをボタンに戻す
        requestAnimationFrame(() => {
            buttonRef.current?.focus();
        });
    };

    /* 外側クリック or ESC */
    useEffect(() => {
        if (!isOpen) return;

        const handler = (e: MouseEvent | KeyboardEvent) => {
            if (e instanceof KeyboardEvent && e.key === "Escape") {
                close();
                return;
            }
            if (
                e instanceof MouseEvent &&
                navRef.current &&
                buttonRef.current &&
                !navRef.current.contains(e.target as Node) &&
                !buttonRef.current.contains(e.target as Node)
            ) {
                close();
            }
        };

        document.addEventListener("mousedown", handler);
        document.addEventListener("keydown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("keydown", handler);
        };
    }, [isOpen]);

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

    return { isOpen, activeMenu, setActiveMenu, buttonRef, itemRefs, navRef, toggle, close, onKeyDown, shouldReduceMotion, explode };
}