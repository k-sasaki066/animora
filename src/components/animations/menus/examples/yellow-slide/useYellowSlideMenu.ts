import { useState, useRef, useEffect } from "react";
import { NAV_MENUS } from "./constants";

export function useYellowSlideMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(NAV_MENUS[0]);

    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const navRef = useRef<HTMLElement | null>(null);

    const toggle = () => setIsOpen(prev => !prev);
    const close = () => {
        setIsOpen(false);
        requestAnimationFrame(() => buttonRef.current?.focus());
    };

    // 外側クリック or ESC
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

    /** メニューオープン時の初期フォーカス */
    useEffect(() => {
        if (isOpen) {
            const index = NAV_MENUS.indexOf(activeMenu);
            const target = itemRefs.current[index] ?? itemRefs.current[0];
            target?.focus();
        }
    }, [isOpen, activeMenu]);

    return {
        isOpen,
        activeMenu,
        setActiveMenu,
        buttonRef,
        itemRefs,
        navRef,
        toggle,
        close,
    };
}