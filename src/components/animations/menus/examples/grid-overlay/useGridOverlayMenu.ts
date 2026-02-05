import { useEffect, useRef, useState } from "react";
import { MENU_SECTIONS } from "./constants";

export function useGridOverlayMenu() {
    const NAV_MENUS = MENU_SECTIONS.flatMap((s) => s.links);

    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(NAV_MENUS[0]);

    const buttonRef = useRef<HTMLButtonElement>(null);
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const toggle = () => setIsOpen((v) => !v);

    const close = () => {
        setIsOpen(false);
        requestAnimationFrame(() => {
            buttonRef.current?.focus();
        });
    };

    /** ESC キーで閉じる */
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen]);

    /** メニュー開閉時の初期フォーカス */
    useEffect(() => {
        if (!isOpen) return;
        const index = NAV_MENUS.indexOf(activeMenu);
        const target = itemRefs.current[index] ?? itemRefs.current[0];
        target?.focus();
    }, [isOpen, activeMenu]);

    /* body scroll lock */
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
    }, [isOpen]);

    return {
        // state
        isOpen,
        activeMenu,
        setActiveMenu,

        // refs
        buttonRef,
        itemRefs,

        // actions
        toggle,
        close,
    };
}