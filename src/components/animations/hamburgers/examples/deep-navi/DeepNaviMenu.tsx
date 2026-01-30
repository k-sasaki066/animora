"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { NAV_MENUS } from "./constants";
import { forwardRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type Props = {
    isOpen: boolean;
    activeIndex: number;
    expandedIndex: number | null;
    setExpandedIndex: React.Dispatch<React.SetStateAction<number | null>>;
    itemRefs: React.RefObject<(HTMLElement | null)[]>;
    childRefs: React.RefObject<Record<number, HTMLAnchorElement[]>>;
    onKeyDown: (e: React.KeyboardEvent) => void;
    onChildKeyDown: (
        e: React.KeyboardEvent,
        parentIndex: number,
        childIndex: number
    ) => void;
    onToggle: () => void;
    onClose: () => void;
    isDesktop: boolean;
    menuWidth: number;
};

export const DeepNaviMenu = forwardRef<HTMLElement, Props>(
    ({ isOpen, activeIndex, expandedIndex, setExpandedIndex, itemRefs, childRefs, onKeyDown, onChildKeyDown, onClose, isDesktop, menuWidth }, ref) => {
        const shouldReduceMotion = useReducedMotion();

        return (
            <motion.nav
                id="side-menu"
                role="Main navigation"
                aria-label="サイドメニュー"
                hidden={!isDesktop && !isOpen}
                initial={false}
                animate={{ x: isOpen || isDesktop ? menuWidth : 0, }}
                transition={
                    shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.4, ease: "easeInOut" }
                }
                className="absolute top-0 z-40 h-full overflow-y-auto bg-white"
                style={{
                    width: menuWidth,
                    left: -menuWidth,
                }}
            >
                <ul>
                    {NAV_MENUS.map((item, index) => {
                        const hasChildren = !!item.children;

                        return (
                            <li key={item.label} className="text-sm md:text-lg">
                                {hasChildren ? (
                                    <button
                                        type="button"
                                        className="w-full text-left px-4 md:px-6 py-2 md:py-3 flex justify-between items-center border-b border-b-white/50 text-white bg-[#4F7389] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d1d0d0] focus-visible:text-[#fa879e]
                                        "
                                        aria-expanded={expandedIndex === index}
                                        aria-controls={`submenu-${index}`}
                                        onClick={() =>
                                            setExpandedIndex(expandedIndex === index ? null : index)
                                        }
                                        ref={(el) => {
                                            itemRefs.current[index] = el;
                                        }}
                                        tabIndex={index === activeIndex ? 0 : -1}
                                        onKeyDown={onKeyDown}
                                    >
                                        {item.label}
                                        <span>
                                            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                                        </span>
                                    </button>
                                ) : (
                                    <a
                                        href="#"
                                        className="block text-left px-4 md:px-6 py-2 md:py-3 text-white bg-[#4F7389] border-b border-b-white/50 focus:outline-none focus-visible:ring-1
                                        focus-visible:ring-[#d1d0d0]
                                        focus-visible:text-[#fa879e]"
                                        ref={(el) => {
                                            itemRefs.current[index] = el;
                                        }}
                                        tabIndex={index === activeIndex ? 0 : -1}
                                        onKeyDown={onKeyDown}
                                        onPointerDown={(e) => {
                                            if (e.pointerType === "mouse" || e.pointerType === "touch") {
                                                e.preventDefault();
                                                onClose();
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                )}


                                {item.children && (
                                    <AnimatePresence initial={false}>
                                        {expandedIndex === index && (
                                            <motion.ul
                                                id={`submenu-${index}`}
                                                role="menu"
                                                className="uppercase overflow-hidden"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={
                                                    shouldReduceMotion
                                                        ? { duration: 0 }
                                                        : {
                                                            height: { duration: 0.3, ease: "easeInOut" },
                                                            opacity: { duration: 0.2 },
                                                        }
                                                }
                                            >
                                                {item.children.map((child, childIndex) => (
                                                    <li key={child} role="none">
                                                        <a
                                                            href="#"
                                                            role="menuitem"
                                                            ref={(el) => {
                                                                if (!childRefs.current[index]) {
                                                                    childRefs.current[index] = [];
                                                                }
                                                                childRefs.current[index][childIndex] = el!;
                                                            }}
                                                            tabIndex={0}
                                                            className="block px-4 md:px-6 py-2 md:py-3
                                                            text-gray-600 hover:text-[#fa879e]
                                                            focus-visible:outline-none
                                                            focus-visible:ring-2
                                                            focus-visible:ring-[#d1d0d0]
                                                            focus-visible:text-[#fa879e]"
                                                            onPointerDown={(e) => {
                                                                if (e.pointerType === "mouse" || e.pointerType === "touch") {
                                                                    e.preventDefault();
                                                                    onClose();
                                                                }
                                                            }}
                                                            onKeyDown={(e) => onChildKeyDown(e, index, childIndex)}
                                                        >
                                                            {child}
                                                        </a>
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </motion.nav>
        );
    }
);
DeepNaviMenu.displayName = "DeepNaviMenu";