"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { FaPowerOff } from "react-icons/fa";
import { BASE_WIDTH, MENU_ITEMS } from "./constants";
import { NavItem } from "./NavItem";
import { MobileMenuButton } from "./MobileMenuButton";

export default function CollapsibleMenu() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.6), 1)
        : 1;
    const isMobile = width ? width < 530 : true;

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [expanded, setExpanded] = useState<boolean>(false);

    const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
    const navRef = useRef<HTMLElement | null>(null);

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const toggleMenu = (): void => {
        setExpanded((prev) => !prev);
    };

    useEffect(() => {
        const el = navRef.current;
        if (!el) return;

        if (isMobile && !expanded) {
            el.setAttribute("inert", "");
        } else {
            el.removeAttribute("inert");
        }
    }, [isMobile, expanded]);

    const totalItems = MENU_ITEMS.length + 1; // + Logout

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number): void => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            const next = (index + 1) % totalItems;
            setActiveIndex(next);
            itemRefs.current[next]?.focus();
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            const prev = (index - 1 + totalItems) % totalItems;
            setActiveIndex(prev);
            itemRefs.current[prev]?.focus();
        }
    };

    return (
        <div ref={ref} className="relative w-full h-full overflow-y-auto no-scrollbar z-0">
            {/* 背景 */}
            <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('https://picsum.photos/id/130/684/370')" }}
            />
            <div
                className="absolute inset-0 z-20"
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
            />

            {/* ハンバーガーボタン */}
            {isMobile && (
                <MobileMenuButton
                    expanded={expanded}
                    scale={scale}
                    reduce={reduce}
                    onToggle={toggleMenu}
                />
            )}

            <motion.nav
                ref={navRef}
                id="side-menu"
                role="navigation"
                onMouseEnter={!isMobile ? () => setExpanded(true) : undefined}
                onMouseLeave={!isMobile ? () => setExpanded(false) : undefined}
                onFocus={!isMobile ? () => setExpanded(true) : undefined}
                onBlur={(e) => {
                    if (isMobile) return;
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                        setExpanded(false);
                    }
                }}
                animate={
                    isMobile
                        ? { x: expanded ? 0 : -240 }
                        : { width: expanded ? 240 : 50 }
                }
                transition={
                    reduce
                        ? { duration: 0 }
                        : { duration: 0.2, ease: "linear" }
                }
                className="absolute left-0 top-0 z-50 h-full bg-neutral-900 text-gray-400 overflow-hidden flex flex-col"
            >
                {/* メインメニュー（スクロール） */}
                <ul role="menu" className="space-y-1 flex-1 overflow-y-auto no-scrollbar" style={{ paddingTop: isMobile ? "40px" : "8px"}}>
                    {MENU_ITEMS.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <li key={index}>
                                <NavItem
                                    icon={<Icon size={20}/>}
                                    label={item.label}
                                    expanded={expanded}
                                    ref={(el) => {
                                        itemRefs.current[index] = el;
                                    }}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    tabIndex={activeIndex === index ? 0 : -1}
                                />
                            </li>
                        )
                    })}
                </ul>

                {/* Logout（固定）*/}
                <div className="border-t border-neutral-800">
                    <NavItem
                        ref={(el) => {
                            itemRefs.current[MENU_ITEMS.length] = el;
                        }}
                        icon={<FaPowerOff size={20} />}
                        label="Logout"
                        expanded={expanded}
                        onClick={() => {
                            console.log("logout");
                        }}
                        onKeyDown={(e) => handleKeyDown(e, MENU_ITEMS.length)}
                        tabIndex={activeIndex === MENU_ITEMS.length ? 0 : -1}
                    />
                </div>
            </motion.nav>
        </div>
    );
};