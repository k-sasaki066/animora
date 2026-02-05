"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MENUS, LINES } from "./constants";
import { forwardRef } from "react";

type Props = {
    scale: number;
    reduce: boolean;
    isMobile: boolean;
    mobileOpen: boolean;
    toggleMobileMenu: () => void;
    openIndex: number | null;
    setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

export const MobileMenu = forwardRef<HTMLElement, Props>(
    ({ scale, reduce, isMobile, mobileOpen, toggleMobileMenu, openIndex, setOpenIndex }, ref) => {
        return (
            <>
                {isMobile && (
                    <div className="absolute top-[5%] left-[3%] w-8 h-5 z-100">
                        <motion.div
                            className="w-full h-full origin-top-left"
                            animate={{ scale }}
                            transition={
                                reduce
                                    ? { duration: 0 }
                                    : { type: "spring", stiffness: 200, damping: 20 }
                            }
                        >
                            <motion.button
                                type="button"
                                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                                aria-expanded={mobileOpen}
                                aria-controls="mobile-menu"
                                onClick={toggleMobileMenu}
                                className="z-50 w-full h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#eee]"
                                animate={{ rotate: mobileOpen ? 360 : 0 }}
                                transition={
                                    reduce
                                        ? { duration: 0 }
                                        : { duration: 0.4, ease: "easeInOut" }
                                }
                            >
                                {LINES.map((line) => (
                                    <motion.span
                                        key={line.key}
                                        className={`absolute left-0 w-full h-0.5 rounded ${line.className}`}
                                        animate={line.animate(mobileOpen)}
                                        transition={
                                            reduce
                                                ? { duration: 0 }
                                                : { duration: 0.4, ease: "easeInOut" }
                                        }
                                    />
                                ))}
                            </motion.button>
                        </motion.div>
                    </div>
                )}

                {/* overlay */}
                <AnimatePresence>
                    {isMobile && mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-10 bg-white/20"
                            onClick={toggleMobileMenu}
                        />
                    )}
                </AnimatePresence>

                {/* スライドメニュー */}
                <AnimatePresence>
                    {isMobile && mobileOpen && (
                        <motion.nav
                            id="mobile-menu"
                            role="dialog"
                            aria-label="Main menu"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={
                                reduce
                                    ? { duration: 0 }
                                    : {
                                        duration: 0.4,
                                        ease: [0.4, 0, 0.2, 1],
                                    }
                            }
                            className="absolute inset-y-0 left-0 max-w-50 w-[80%] bg-[#ddd] z-90 overflow-y-auto overscroll-contain touch-pan-y no-scrollbar"
                        >

                            {/* メニュー縦並び */}
                            <ul className="my-16 flex flex-col">
                                {MENUS.map((menu, index) => (
                                    <li key={index} className="border-b">
                                        <button
                                            type="button"
                                            aria-expanded={openIndex === index}
                                            aria-controls={`submenu-${index}`}
                                            onClick={() =>
                                                setOpenIndex(openIndex === index ? null : index)
                                            }
                                            className="relative w-full text-left px-4 py-3 font-bold uppercase focus:outline-none focus-visible:text-white cursor-pointer hover:text-white"
                                            style={{backgroundColor: mobileOpen ? menu.hoverColor : menu.color}}
                                        >
                                            {menu.title}
                                            <span
                                                className="absolute right-5 top-1/2 -translate-y-0.5 border-[5px] border-transparent border-t-white"
                                            />
                                        </button>

                                        <AnimatePresence>
                                            {openIndex === index && (
                                                <motion.ul
                                                    id={`submenu-${index}`}
                                                    role="menu"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={
                                                        reduce
                                                            ? { duration: 0 }
                                                            : {
                                                                duration: 0.5,
                                                                ease: [0.73, 0.32, 0.34, 1.5],
                                                            }
                                                    }
                                                    className="overflow-hidden"
                                                >
                                                    {menu.items.map((item) => (
                                                        <li key={item} className="px-6 py-2 text-left border-b border-b-white/50">
                                                            <a
                                                                href="#"
                                                                className="tracking-wider text-black focus:outline-none focus-visible:text-[#14a1a1] cursor-pointer hover:text-[#14a1a1]"
                                                            >
                                                                {item}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </li>
                                ))}
                            </ul>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </>
        );
    }
);
MobileMenu.displayName = "MobileMenu";