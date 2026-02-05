import { useState, useRef, useEffect } from "react";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";
import { NAV_MENUS } from "./constants";

export function useDeepNaviMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const navRef = useRef<HTMLElement | null>(null);
    const itemRefs = useRef<(HTMLElement | null)[]>([]);
    const childRefs = useRef<Record<number, HTMLAnchorElement[]>>({});

    const toggle = () => setIsOpen(v => !v);
    const close = () => {
        setIsOpen(false);
        requestAnimationFrame(() => buttonRef.current?.focus());
    };

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
            const target =
            itemRefs.current[activeIndex] ?? itemRefs.current[0];
            target?.focus();
        }
    }, [isOpen, activeIndex]);

    const { onKeyDown } = useRovingTabFocus({
        values: NAV_MENUS.map((_, i) => i),
        activeValue: activeIndex,
        setActiveValue: setActiveIndex,
        refs: itemRefs,
        onExpand: (index) => {
            if (!NAV_MENUS[index].children) {
                close();
                return;
            }
            setExpandedIndex(index);
            requestAnimationFrame(() => {
                childRefs.current[index]?.[0]?.focus();
            });
        },
    });

    const onChildKeyDown = (
        e: React.KeyboardEvent,
        parentIndex: number,
        childIndex: number
    ) => {
        const children = childRefs.current[parentIndex];
        if (!children) return;

        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                children[(childIndex + 1) % children.length]?.focus();
                break;

            case "ArrowUp":
                e.preventDefault();
                children[
                    (childIndex - 1 + children.length) % children.length
                ]?.focus();
                break;

            case "ArrowLeft":
            case "ArrowRight":
                e.preventDefault();
                setExpandedIndex(null);
                itemRefs.current[parentIndex]?.focus();
                break;

            case "Enter":
            case " ":
                e.preventDefault();
                close();
                break;
        }
    };


    return {
        isOpen,
        activeIndex,
        expandedIndex,
        setExpandedIndex,
        itemRefs,
        childRefs,
        buttonRef,
        navRef,
        toggle,
        close,
        onKeyDown,
        onChildKeyDown,
    };
}