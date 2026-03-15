import { motion, AnimatePresence } from "framer-motion";
import { MENU_ITEMS, LINES } from "./constants";
import { forwardRef } from "react";

type Props = {
    isOpen: boolean;
    toggleMobileMenu: () => void;
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    openMenu: string | null;
    toggleSubMenu: (label: string) => void;
    scale: number;
    reduce: boolean;
};

export const MobileMenu = forwardRef<HTMLElement, Props>(
    ({ isOpen, toggleMobileMenu, setMobileMenuOpen, openMenu, toggleSubMenu, scale, reduce }, ref) => {
        return (
            <>
                <div className="absolute top-[5%] right-[3%] w-8 h-5 z-100">
                    <motion.div
                        className="w-full h-full origin-top-right"
                        animate={{ scale }}
                        transition={
                            reduce
                                ? { duration: 0 }
                                : { type: "spring", stiffness: 200, damping: 20 }
                        }
                    >
                        {/* ハンバーガーボタン */}
                        <button
                            type="button"
                            className="w-full h-full flex flex-col justify-between items-center md:hidden text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#eee] z-50 cursor-pointer"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                        >
                            {LINES.map((line) => (
                                <motion.span
                                    key={line.key}
                                    className={`absolute left-0 w-full h-0.5 bg-white rounded ${line.className}`}
                                    animate={line.animate(isOpen)}
                                    transition={
                                        reduce
                                        ? { duration: 0 }
                                        : { duration: 0.4 }
                                    }
                                />
                            ))}
                        </button>
                    </motion.div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.nav
                            id="mobile-menu"
                            role="navigation"
                            className="absolute inset-0 z-1 bg-black/20 flex items-start justify-center text-white md:hidden overflow-y-auto no-scrollbar"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={ reduce
                                ? { duration: 0 }
                                : { duration: 0.3, ease: "easeOut" }
                            }
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <ul
                                className="space-y-6 text-center py-20 z-50"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {MENU_ITEMS.map((item) => (
                                    <li key={item.label}>
                                        {item.submenu ? (
                                            <div className="flex flex-col items-center">
                                                <button
                                                    className="relative font-bold text-lg focus:outline-none focus-visible:text-[#81d3ea] cursor-pointer hover:text-[#81d3ea]"
                                                    onClick={() => toggleSubMenu(item.label)}
                                                >
                                                    {item.label}
                                                    <span
                                                        className="absolute -right-5 top-1/2 -translate-y-0.5 border-[5px] border-transparent border-t-white"
                                                    />
                                                </button>

                                                <AnimatePresence initial={false}>
                                                    {openMenu === item.label && (
                                                        <motion.ul
                                                            className="mt-2 space-y-2 overflow-hidden"
                                                            initial={{
                                                                height: 0,
                                                                opacity: 0,
                                                                y: -6
                                                            }}
                                                            animate={{
                                                                height: "auto",
                                                                opacity: 1,
                                                                y: 0
                                                            }}
                                                            exit={{
                                                                height: 0,
                                                                opacity: 0,
                                                                y: -6
                                                            }}
                                                            transition={
                                                                reduce
                                                                ? { duration: 0 }
                                                                :{
                                                                    duration: 0.25,
                                                                    ease: "easeOut"
                                                                }
                                                            }
                                                        >
                                                            {item.submenu.map((subItem, i) =>
                                                                subItem === "---" ? (
                                                                    <li
                                                                        key={i}
                                                                        className="border-t border-white/40 w-32 mx-auto"
                                                                    />
                                                                ) : (
                                                                    <li key={subItem}>
                                                                        <a
                                                                            href="#"
                                                                            className="block text-[#525252] text-base focus:outline-none  focus-visible:text-[#81d3ea] hover:text-[#81d3ea]"
                                                                        >
                                                                            {subItem}
                                                                        </a>
                                                                    </li>
                                                                ),
                                                            )}
                                                        </motion.ul>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <a href={item.link} className="font-bold text-lg block focus:outline-none focus-visible:text-[#81d3ea] cursor-pointer hover:text-[#81d3ea]">
                                                {item.label}
                                            </a>
                                        )}
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