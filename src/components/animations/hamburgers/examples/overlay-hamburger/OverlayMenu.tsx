"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";
import { NAV_MENUS } from "./constants";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";
import { forwardRef } from "react";

export type OverlayMenuProps = {
    isOpen: boolean;
    scale: number;
    activeMenu: (typeof NAV_MENUS)[number];
    setActiveMenu: React.Dispatch<React.SetStateAction<(typeof NAV_MENUS)[number]>>;
    itemRefs: React.RefObject<(HTMLAnchorElement | null)[]>;
    onClose: () => void;
};

export const OverlayMenu = forwardRef<HTMLElement, OverlayMenuProps>(
    ({ isOpen, scale, activeMenu, setActiveMenu, itemRefs, onClose }, ref) => {
        const reduce = useReducedMotion();

        const { onKeyDown } = useRovingTabFocus({
            values: [...NAV_MENUS],
            activeValue: activeMenu,
            setActiveValue: setActiveMenu,
            refs: itemRefs,
            onActivate: onClose,
        });

        const overlayVariants: Variants = {
            closed: {
                opacity: 0,
            },
            open: {
                opacity: 1,
            },
        };

        const listVariants: Variants = {
            open: {
                transition: {
                    staggerChildren: reduce ? 0 : 0.1,
                },
            },
            closed: {},
        };

        const itemVariants: Variants = {
            closed: {
                opacity: 0,
                y: 20
            },
            open: {
                opacity: 1,
                y: 0,
                transition: reduce ? { duration: 0 } : { duration: 0.6 }
            },
        };

        return (
            <motion.nav
                ref={ref}
                id="overlay-menu"
                role="navigation"
                aria-label="メインメニュー"
                hidden={!isOpen}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={overlayVariants}
                transition={reduce ? { duration: 0 } : { duration: 0.6 }}
                className="absolute inset-0 z-90 bg-black/75"
            >
                <div className="flex justify-center items-center h-full pointer-events-auto">
                    <motion.ul
                        className="flex flex-col justify-center items-center gap-2 text-center list-none"
                        role="menu"
                        animate={{ scale }}
                        variants={listVariants}
                    >
                        {NAV_MENUS.map((label, i) => (
                            <motion.li
                                key={label}
                                variants={itemVariants}
                                role="none"
                            >
                                <a
                                    href="#"
                                    ref={(el) => {
                                        itemRefs.current[i] = el as HTMLAnchorElement | null;
                                    }}
                                    tabIndex={activeMenu === label ? 0 : -1}
                                    role="menuitem"
                                    onKeyDown={onKeyDown}
                                    onPointerDown={(e) => {
                                        // マウス・タッチのみ反応
                                        if (e.pointerType === "mouse" || e.pointerType === "touch") {
                                            e.preventDefault();
                                            onClose();
                                        }
                                    }}
                                    className="inline-block px-4 py-2 text-xl text-white hover:text-blue-400 focus:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                >
                                    {label}
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </motion.nav>
        );
    }
);
