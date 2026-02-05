"use client";

import { useRef, useState, useEffect } from "react";
import { NAV_MENUS } from "./constants";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";

export function usePushDownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(NAV_MENUS[0]);

    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const navRef = useRef<HTMLElement | null>(null);

    const toggle = () => setIsOpen((prev) => !prev);
    const close = () => {
        setIsOpen(false);
        requestAnimationFrame(() => buttonRef.current?.focus());
    };

    // 外側クリック & ESCで閉じる
    useEffect(() => {
        if (!isOpen) return;

        const handleEvent = (e: MouseEvent | KeyboardEvent) => {
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

        document.addEventListener("mousedown", handleEvent);
        document.addEventListener("keydown", handleEvent);

        return () => {
            document.removeEventListener("mousedown", handleEvent);
            document.removeEventListener("keydown", handleEvent);
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

    return { isOpen, activeMenu, setActiveMenu, buttonRef, itemRefs, navRef, toggle, close, onKeyDown };
}