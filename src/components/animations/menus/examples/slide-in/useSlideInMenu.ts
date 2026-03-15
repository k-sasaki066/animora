import { useEffect, useRef, useState } from "react";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";
import { NAV_MENUS } from "./constants";

export function useSlideInMenu() {
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

    // 外側クリック
    useEffect(() => {
        if (!isOpen) return;

        const handleDocumentEvent = (event: MouseEvent | KeyboardEvent) => {
            // ESC で閉じる
            if (event instanceof KeyboardEvent && event.key === "Escape") {
                close();
                return;
            }

            // 外側クリックで閉じる
            if (
                event instanceof MouseEvent &&
                navRef.current &&
                buttonRef.current &&
                !navRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                close();
            }
        };

        document.addEventListener("mousedown", handleDocumentEvent);
        document.addEventListener("keydown", handleDocumentEvent);

        return () => {
            document.removeEventListener("mousedown", handleDocumentEvent);
            document.removeEventListener("keydown", handleDocumentEvent);
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