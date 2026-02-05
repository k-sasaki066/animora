"use client";

import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "./constants";
import { MobileNavToggle } from "./MobileNavToggle";
import { useActiveRailMenu } from "./useActiveRailMenu";

export default function ActiveRailMenu() {

    const { ref, scale, isMobile, menuOpen, activeItem, setActiveItem, toggleButtonRef, itemRefs, layoutRef, contentRef, reduce, toggle, onKeyDown} = useActiveRailMenu();

    return (
        <div ref={ref} className="relative flex w-full h-full bg-[#1d1d31] z-0 text-white overflow-hidden">

            <MobileNavToggle
                ref={toggleButtonRef}
                isMobile={isMobile}
                isOpen={menuOpen}
                scale={scale}
                reduce={reduce}
                onToggle={toggle}
            />

            <div ref={layoutRef} className="flex-1 flex">
                {/* left menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.nav
                            aria-label="Primary navigation"
                            id="global-navigation"
                            initial={{ x: isMobile ? -250 : 0 }}
                            animate={{ x: 0 }}
                            exit={{ x: isMobile ? -250 : 0 }}
                            transition={
                                reduce
                                    ? { duration: 0 }
                                    : { type: "spring", stiffness: 300, damping: 50 }
                            }
                            className="z-10 top-0 left-0 h-full bg-[#272743] w-40 px-4 py-6 font-['Oswald'] uppercase overflow-y-auto no-scrollbar"
                            style={{ position: isMobile ? "absolute" : "relative"}}
                        >
                            <ul className="relative space-y-1 text-right" role="menu">
                                {NAV_ITEMS.map((item, index) => {
                                    const isActive = item.id === activeItem.id;

                                    return (
                                        <li
                                            key={item.id}
                                            role="none"
                                            className="relative h-8 flex items-center justify-end"
                                        >
                                            <button
                                                type="button"
                                                ref={(el) => {
                                                    itemRefs.current[index] = el;
                                                }}
                                                role="menuitem"
                                                tabIndex={isMobile ? (isActive ? 0 : -1) : 0}
                                                aria-current={isActive ? "page" : undefined}
                                                onKeyDown={onKeyDown}
                                                onClick={() => setActiveItem(item)}
                                                className="relative z-10 text-sm font-bold hover:text-gray-300 transition-colors touch-manipulation focus-visible:outline-none"
                                            >
                                                <motion.span
                                                    animate={{
                                                        scale: isActive ? 1.25 : 1,
                                                        color: isActive ? "#fff" : "#d1d5dc",
                                                    }}
                                                    transition={
                                                        reduce
                                                            ? { duration: 0 }
                                                            : { duration: 0.4 }
                                                    }
                                                    className="inline-block origin-right"
                                                >
                                                    {item.label}
                                                </motion.span>
                                            </button>

                                            {isActive && (
                                                <motion.div
                                                    layoutId="active-rail"
                                                    className="absolute -right-4 w-1 h-7 rounded-sm bg-linear-to-r from-[#ff5e5e] to-[#f54985]"
                                                    transition={
                                                        reduce
                                                            ? { duration: 0 }
                                                            :{
                                                                type: "spring",
                                                                stiffness: 400,
                                                                damping: 45,
                                                            }
                                                    }
                                                />
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </motion.nav>
                    )}
                </AnimatePresence>

                {/* Right Content */}
                <motion.div ref={contentRef} className="flex-1 p-8 overflow-y-auto relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeItem.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={
                                reduce
                                    ? { duration: 0 }
                                    : { duration: reduce ? 0 : 0.4 }
                            }
                            className="w-full h-full"
                        >
                            <h2 className="text-2xl text-white font-bold mb-4">
                                {activeItem.label}
                            </h2>
                            <p className="text-base">
                                {activeItem.content}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};