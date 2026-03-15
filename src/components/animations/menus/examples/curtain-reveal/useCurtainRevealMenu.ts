import { useRef, useState, useEffect } from "react";
import { NAV_MENUS } from "./constants";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";

export function useCurtainRevealMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeMenu, setActiveMenu] = useState(NAV_MENUS[0]);

    const navRef = useRef<HTMLElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

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

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault();
                close();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
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

    const useIsDesktop = (): boolean => {
        const [isDesktop, setIsDesktop] = useState<boolean>(false);

        useEffect(() => {
        const media = window.matchMedia("(min-width: 768px)");

        const update = (): void => {
            setIsDesktop(media.matches);
        };

        update();
        media.addEventListener("change", update);

        return () => {
            media.removeEventListener("change", update);
        };
        }, []);

        return isDesktop;
    };
    const isDesktop = useIsDesktop();

    return { isOpen, activeMenu, setActiveMenu, buttonRef, itemRefs, navRef, toggle, close, onKeyDown, isDesktop };
}