"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { NAV_MENUS } from "./constants";
import { RefObject, forwardRef } from "react";

type Props = {
    isOpen: boolean;
    scale: number;
    activeMenu: typeof NAV_MENUS[number];
    itemRefs: RefObject<(HTMLAnchorElement | null)[]>;
    onClose: () => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
};

export const SlideInMenu = forwardRef<HTMLElement, Props>(
    ({ isOpen, scale, activeMenu, itemRefs, onClose, onKeyDown, }, ref) => {
        const shouldReduceMotion = useReducedMotion();

        return (
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        ref={ref}
                        id="global-navigation"
                        role="navigation"
                        aria-label="メインメニュー"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={
                            shouldReduceMotion
                                ? { duration: 0 }
                                : { duration: 0.4, ease: "easeInOut" }
                        }
                        className="absolute top-0 left-0 z-90 w-35 sm:w-45 h-full shadow-lg bg-[#fbfbfb] flex flex-col justify-center"
                    >
                        <motion.ul
                            className="list-none"
                            role="menu"
                            animate={{ scale }}
                            transition={
                                shouldReduceMotion
                                    ? { duration: 0 }
                                    : { duration: 0.3 }
                            }
                        >
                            {NAV_MENUS.map((label, i) => (
                                <li key={label} className="px-2" role="none">
                                    <motion.a
                                        href="#"
                                        role="menuitem"
                                        className="block py-3 text-sm text-gray-800 font-semibold border-b border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#eee] focus-visible:text-[#ffafbd]"
                                        whileHover={{ color: "#ffafbd" }}
                                        ref={(el) => {
                                            itemRefs.current[i] = el;
                                        }}
                                        tabIndex={activeMenu === label ? 0 : -1}
                                        onKeyDown={onKeyDown}
                                        onPointerDown={(e) => {
                                            // マウス・タッチのみ反応
                                            if (e.pointerType === "mouse" || e.pointerType === "touch") {
                                                e.preventDefault();
                                                onClose();
                                            }
                                        }}
                                    >
                                        {label}
                                    </motion.a>
                                </li>
                            ))}
                        </motion.ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        );
    }
);
SlideInMenu.displayName = "SlideInMenu";
//forwardRef を使うとReact DevTools / エラーメッセージ / デバッグ時にコンポーネント名を表示させるため