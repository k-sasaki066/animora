"use client";

import { motion, useReducedMotion } from "framer-motion";
import { COLORS, NAV_MENUS } from "./constants";
import { forwardRef } from "react";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";

type Props = {
    isOpen: boolean;
    scale: number;
    activeMenu: string;
    setActiveMenu: (val:string) => void;
    itemRefs: React.RefObject<(HTMLAnchorElement | null)[]>;
    onClose: () => void;
};

export const SlideMenu = forwardRef<HTMLElement, Props>(
    ({ isOpen, scale, activeMenu, setActiveMenu, itemRefs, onClose }, ref) => {
        const shouldReduceMotion = useReducedMotion();

        const { onKeyDown } = useRovingTabFocus({
            values: NAV_MENUS,
            activeValue: activeMenu,
            setActiveValue: setActiveMenu,
            refs: itemRefs,
            onActivate: onClose,
        });

        return (
            <motion.nav
                ref={ref}
                id="global-navigation"
                role="navigation"
                aria-label="メインメニュー"
                aria-hidden={!isOpen}
                initial={false}
                animate={{
                    width: isOpen ? "100%" : 0,
                    opacity: isOpen ? 1 : 0
                }}
                transition={
                    shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.3, ease: "easeInOut" }
                }
                className="absolute top-0 left-0 overflow-hidden z-50 max-h-full"
                style={{ backgroundColor: COLORS.menuBg }}
            >
                <motion.ul
                    role="menu"
                    className="list-none flex flex-col justify-center items-center gap-1 origin-top"
                    animate={{ scale }}
                    transition={
                        shouldReduceMotion
                            ? { duration: 0 }
                            : { duration: 0.3 }}
                >
                    {NAV_MENUS.map((item, index) => (
                        <li key={item} className="px-4 py-2.5 text-center" role="none">
                            <motion.a
                                href="#"
                                role="menuitem"
                                className="text-white text-base font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-[#745e4f] focus-visible:text-[#745e4f]"
                                whileHover={{ color: COLORS.hoverText }}
                                ref={(el) => {
                                    itemRefs.current[index] = el;
                                }}
                                tabIndex={activeMenu === item ? 0 : -1}
                                onKeyDown={onKeyDown}
                                onPointerDown={(e) => {
                                    // マウス・タッチのみ反応
                                    if (e.pointerType === "mouse" || e.pointerType === "touch") {
                                        e.preventDefault();
                                        onClose();
                                    }
                                }}
                            >
                                {item}
                            </motion.a>
                        </li>
                    ))}
                </motion.ul>
            </motion.nav>
        );
    }
);