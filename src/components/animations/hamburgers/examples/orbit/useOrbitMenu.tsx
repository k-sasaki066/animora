"use client";

import { useRef, useState, useEffect } from "react";
import { useReducedMotion, useAnimation } from "framer-motion";
import { NAV_MENUS, BUTTON_MOVE, ITEM_POSITIONS } from "./constants";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";

export function useOrbitMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeMenu, setActiveMenu] = useState(NAV_MENUS[0]);

    const menuRootRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const prefersReducedMotion = useReducedMotion();
    const shouldReduceMotion = prefersReducedMotion ?? false;

    const buttonControls = useAnimation();
    const itemsControls = useAnimation();

    const openMenu = async () => {
        setIsOpen(true);

        // ① ボタン移動
        await buttonControls.start({
            ...BUTTON_MOVE,
            transition: shouldReduceMotion
                ? { duration: 0 }
                : { type: 'spring', stiffness: 300, damping: 20 }
        });

        // ② アイテム表示
        itemsControls.start(i => ({
            opacity: 1,
            scale: 1,
            x: ITEM_POSITIONS[i].x,
            y: ITEM_POSITIONS[i].y,
            transition: shouldReduceMotion
                ? { duration: 0 }
                : {
                type: 'spring',
                stiffness: 500,
                damping: 20,
                delay: i * 0.08
            }
        }));
    };

    const closeMenu = async () => {
        // ① アイテム消す
        await itemsControls.start({
            opacity: 0,
            scale: 0.5,
            x: 20,
            y: 20,
            transition: shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.2 }
        });

        // ② ボタン戻す
        await buttonControls.start({
            x: 0,
            y: 0,
            transition: shouldReduceMotion
                ? { duration: 0 }
                : { type: 'spring', stiffness: 300, damping: 25 }
        });

        setIsOpen(false);
    };

    // メニュー開閉
    const toggle = () => {
        if (isOpen) closeMenu();
        else openMenu();
    };

    const close = () => {
        closeMenu();

        // フォーカスをボタンに戻す
        requestAnimationFrame(() => {
            buttonRef.current?.focus();
        });
    };

    /** ESC キーで閉じる */
    useEffect(() => {
        if (!isOpen) return;

        const handler = (e: MouseEvent | KeyboardEvent) => {
            if (e instanceof KeyboardEvent && e.key === "Escape") {
                close();
                return;
            }
            if (
                e instanceof MouseEvent &&
                menuRootRef.current &&
                !menuRootRef.current.contains(e.target as Node)
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

    return { isOpen, activeMenu, setActiveMenu, buttonRef, itemRefs, menuRootRef, toggle, close, onKeyDown, buttonControls, itemsControls, shouldReduceMotion };
}