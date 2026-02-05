import { useEffect, useRef, useState } from "react";
import { NAV_MENUS } from "./constants";


//Overlay メニューの状態・操作をまとめた hook
export function useOverlayMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<(typeof NAV_MENUS)[number]>(
        NAV_MENUS[0]
    );

    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const navRef = useRef<HTMLElement | null>(null);
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    /** メニュー開閉 */
    const toggle = () => {
        setIsOpen((prev) => !prev);
    };

    /** メニューを閉じる */
    const close = () => {
        setIsOpen(false);

        // フォーカスを戻す
        requestAnimationFrame(() => {
            buttonRef.current?.focus();
        });
    };

    /** ESC キーで閉じる */
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault();
                close();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    /** メニューオープン時の初期フォーカス */
    useEffect(() => {
        if (!isOpen) return;

        const index = NAV_MENUS.indexOf(activeMenu);
        const target =
        itemRefs.current[index] ?? itemRefs.current[0];

        target?.focus();
    }, [isOpen, activeMenu]);

    return {
        // state
        isOpen,
        activeMenu,
        setActiveMenu,

        // refs
        buttonRef,
        navRef,
        itemRefs,

        // actions
        toggle,
        close,
    };
}