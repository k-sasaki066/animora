"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { NAV_MENUS } from "./constants";
import { RefObject, forwardRef } from "react";

type Props = {
    isOpen: boolean;
    scale: number;
    activeMenu: typeof NAV_MENUS[number];
    itemRefs: RefObject<(HTMLAnchorElement | null)[]>;
    onClose: () => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    isDesktop: boolean;
    shouldReduceMotion: boolean;
};

export const CurtainRevealMenu = forwardRef<HTMLElement, Props>(
    ({ isOpen, scale, activeMenu, itemRefs, onClose, onKeyDown, isDesktop, shouldReduceMotion }, ref) => {

        const textVariants: Variants = {
            hidden: {
                opacity: 0,
                y: 12,
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        duration: 0.25,
                        delay: NAV_MENUS.length * 0.25 + 0.2,
                        ease: "easeOut",
                    },
            },
        };

        const panelVariants: Variants = {
            hidden: (isDesktop: boolean) => ({
                opacity: 0,
                x: isDesktop ? 0 : "-100%", // 縦並び → 左から
                y: isDesktop ? "-100%" : 0, // 横並び → 上から
            }),
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: shouldReduceMotion
                    ? { duration: 0 }
                    :{
                        duration: 0.4,
                        ease: "easeOut",
                    },
            },
            exit: (isDesktop: boolean) => ({
                opacity: 0,
                x: isDesktop ? 0 : "100%", // mobile: 右へ抜ける
                y: isDesktop ? "100%" : 0, // desktop: 下へ抜ける
                transition: shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        duration: 0.35,
                        ease: "easeIn",
                    },
            }),
        };

        return (
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.nav
                        id="global-navigation"
                        role="navigation"
                        aria-label="メインメニュー"
                        className="absolute inset-0 z-90 flex"
                    >
                        <motion.ul
                            role="menu"
                            className="flex h-full w-full flex-col md:flex-row list-none"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: shouldReduceMotion
                                        ? {}
                                        : {
                                            staggerChildren: 0.25,
                                        },
                                },
                                exit: {
                                    transition: shouldReduceMotion
                                        ? {}
                                        : {
                                            staggerChildren: 0.25,
                                        },
                                },
                            }}
                        >
                            {NAV_MENUS.map((item, i) => (
                                <motion.li
                                    key={item.label}
                                    role="none"
                                    className={`flex h-1/5 md:h-full md:w-1/5 items-center justify-center ${item.bg}`}
                                    custom={isDesktop}
                                    variants={panelVariants}
                                >
                                    <motion.a
                                        href="#"
                                        className={`group relative text-center text-white uppercase tracking-[4px] text-xs md:text-sm font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-[#eee] focus-visible:text-[#ffffff] ${item.hoverText}`}
                                        whileHover={{
                                            scale: 1.05,
                                            fontWeight: 500,
                                        }}
                                        variants={textVariants}
                                        initial="hidden"
                                        animate="visible"
                                        ref={(el) => {
                                            itemRefs.current[i] = el;
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
                                        {item.label}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        );
    }
);
CurtainRevealMenu.displayName = "CurtainRevealMenu";