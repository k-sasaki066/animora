"use client";

import { motion, useReducedMotion, Transition } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";

const BASE_WIDTH = 480;
const NAV_MENUS = ["ホーム", "about", "サービス", "お問い合わせ"];

// ハンバーガー線定義
type LineConfig = {
    key: string;
    className: string;
    animate: (isOpen: boolean) => {
        y?: number;
        rotate?: number;
        opacity?: number;
    };
};

const HAMBURGER_LINES: LineConfig[] = [
    {
        key: "top",
        className: "top-0",
        animate: (isOpen) => ({
            y: isOpen ? 9 : 0,
            rotate: isOpen ? -45 : 0,
        }),
    },
    {
        key: "middle",
        className: "top-[9px]",
        animate: (isOpen) => ({
            opacity: isOpen ? 0 : 1,
        }),
    },
    {
        key: "bottom",
        className: "bottom-0",
        animate: (isOpen) => ({
            y: isOpen ? -9 : 0,
            rotate: isOpen ? 45 : 0,
        }),
    },
];

export default function SlideInHamburger() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeMenu, setActiveMenu] = useState(NAV_MENUS[0]);

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1)
        : 1;
    const iconScale = scale;
    const navTextScale = scale;

    const navRef = useRef<HTMLElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const shouldReduceMotion = useReducedMotion();

    const menuTransition: Transition = shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.4, ease: "easeInOut" };

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


    // メニュー開閉
    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggle();
        }
    };

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

    return (
        <div ref={ref} className="w-full h-full relative bg-[#4d4c4c] overflow-hidden">
            <motion.div
                className="w-full h-full origin-top-right"
                animate={{ scale: iconScale }}
                transition={
                    shouldReduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 200, damping: 20 }
                }
            >
                {/* ハンバーガーボタン */}
                <motion.button
                    ref={buttonRef}
                    type="button"
                    onKeyDown={handleKeyDown}
                    onPointerDown={toggle}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-controls="global-navigation"
                    aria-expanded={isOpen}
                    className="absolute top-5 right-5 z-100 w-8 h-5 bg-transparent border-none cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eee]"
                >
                    {HAMBURGER_LINES.map((line) => (
                        <motion.span
                            key={line.key}
                            className={`absolute left-0 w-full h-0.5 bg-white ${line.className}`}
                            animate={line.animate(isOpen)}
                            transition={menuTransition}
                        />
                    ))}
                </motion.button>
            </motion.div>

            {/* ナビゲーション */}
            <motion.nav
                ref={navRef}
                id="global-navigation"
                role="navigation"
                aria-label="メインメニュー"
                aria-hidden={!isOpen}
                initial={false}
                animate={{ x: isOpen ? 0 : "-100%" }}
                transition={menuTransition}
                className="absolute top-0 left-0 z-90 w-35 sm:w-45 h-full shadow-lg bg-[#fbfbfb] flex flex-col justify-center"
            >
                <motion.ul
                    className="list-none"
                    role="menu"
                    animate={{ scale: navTextScale }}
                    transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
                >
                    {NAV_MENUS.map((label, i) => (
                        <li key={label} className="px-2" role="none">
                            <motion.a
                                href="#"
                                role="menuitem"
                                className="block py-3 text-sm text-gray-800 border-b border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                                whileHover={{ color: "#ffafbd" }}
                                ref={(el) => {
                                    itemRefs.current[i] = el;
                                }}
                                tabIndex={activeMenu === label ? 0 : -1}
                                onKeyDown={onKeyDown}
                            >
                                {label}
                            </motion.a>
                        </li>
                    ))}
                </motion.ul>
            </motion.nav>
        </div>
    );
}