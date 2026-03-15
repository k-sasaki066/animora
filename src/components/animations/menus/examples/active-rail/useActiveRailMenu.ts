import { useReducedMotion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";
import { BASE_WIDTH, NavItem, NAV_ITEMS } from "./constants";

export function useActiveRailMenu() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.6), 1)
        : 1;

    const isMobile = width ? width < 530 : true;
    const [menuOpen, setMenuOpen] = useState<boolean>(!isMobile);

    const [activeItem, setActiveItem] = useState<NavItem>(NAV_ITEMS[0]);

    const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const toggleButtonRef = useRef<HTMLButtonElement>(null);
    const layoutRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const toggle = (): void => {
        setMenuOpen((prev) => !prev);
    };

    // 左メニュークリック時にスクロールトップに戻す
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [activeItem]);

    // メニュークローズ時にフォーカスを戻す
    useEffect(() => {
        if (!menuOpen && isMobile) {
            toggleButtonRef.current?.focus();
        }
    }, [menuOpen, isMobile]);

    // モバイルリサイズ時にメニュー自動切り替え
    useEffect(() => {
        setMenuOpen(!isMobile);
    }, [isMobile]);

    const { onKeyDown } = useRovingTabFocus({
        values: NAV_ITEMS,
        activeValue: activeItem,
        setActiveValue: setActiveItem,
        refs: itemRefs,
        onActivate: (value) => {
            if (isMobile) toggle();
        }
    });

    return { ref, scale, isMobile, menuOpen, activeItem, setActiveItem, toggleButtonRef, itemRefs, layoutRef, contentRef, reduce, toggle, onKeyDown };
}