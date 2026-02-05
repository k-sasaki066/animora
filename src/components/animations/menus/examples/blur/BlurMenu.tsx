"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { NAV_MENUS } from "./constants";
import { RefObject, forwardRef } from "react";

type Props = {
    isOpen: boolean;
    scale: number;
    activeMenu: typeof NAV_MENUS[number];
    itemRefs: RefObject<(HTMLAnchorElement | null)[]>;
    onClose: () => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    shouldReduceMotion: boolean;
};

export const BlurMenu = forwardRef<HTMLElement, Props>(
    ({ isOpen, scale, activeMenu, itemRefs, onClose, onKeyDown, shouldReduceMotion }, ref) => {

        const navVariants: Variants = {
            hidden: {
                opacity: 0,
                scale: 0.85,
            },
            visible: {
                opacity: 1,
                scale: 1,
                transition: shouldReduceMotion
                    ? { duration: 0 }
                    :{
                        duration: 0.5,
                        ease: "easeOut",
                    },
            },
            exit: {
                opacity: 0,
                scale: 0.85,
                transition: shouldReduceMotion
                    ? { duration: 0 }
                    :{ duration: 0.3 },
            },
        };

        return (
            <AnimatePresence>
                {isOpen &&
                    <motion.nav
                        variants={navVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        id="blur-menu"
                        role="navigation"
                        aria-label="Main menu"
                        className="absolute inset-0 z-30 p-6 text-white"
                    >
                        {/* 背景クリック専用レイヤー */}
                        <motion.div
                            className="absolute inset-0 bg-transparent"
                            aria-hidden="true"
                            onClick={onClose}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        <motion.div
                            className="w-full h-full flex  justify-center items-center"
                            animate={{ scale }}
                            transition={
                            shouldReduceMotion
                                ? { duration: 0 }
                                : { type: "spring", stiffness: 200, damping: 20 }
                            }
                        >
                            <motion.ul className="w-[80%] space-y-2 text-base font-light text-left z-50">
                                {NAV_MENUS.map((item, i) => (
                                    <motion.li
                                        key={item}
                                        role="none"
                                        className="border-b border-white/20 pb-3"
                                    >
                                        <motion.a
                                            href="#"
                                            className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#eee]"
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
                                            whileHover={{
                                                opacity: 0.5,
                                                x: 15,
                                            }}
                                            transition={shouldReduceMotion
                                                ? { duration: 0 }
                                                :{
                                                    duration: 0.5,
                                                    ease: "easeInOut"
                                                }
                                            }
                                        >
                                            {item}
                                        </motion.a>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    </motion.nav>
                }
            </AnimatePresence>
        );
    }
);
BlurMenu.displayName = "BlurMenu";