"use client";

import { motion, useReducedMotion, AnimatePresence, Variants } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { BASE_WIDTH, MENU_ITEMS } from "./constants";
import { useSpeechBubbleMenu } from "./useSpeechBubbleMenu";

export default function SpeechBubbleMenu() {
    const { width, ref } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.6), 1)
        : 1;
    const reduce = useReducedMotion();

    const { openMenu, setOpenMenu, hovered, setHovered, itemRefs, navRef, toggle, onTopItemKeyDown } = useSpeechBubbleMenu();

    const submenuVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.85,
            y: 0,
            pointerEvents: "none"
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 25,
            pointerEvents: "auto",
            transition: reduce
                ? { duration: 0 }
                :{ duration: 0.15, ease: "easeOut" },
        },
    };

    return (
        <div ref={ref} className="relative w-full h-full bg-[#2fc7f0]">
            <motion.nav
                className="w-full h-full max-w-3xl mx-auto font-[Georgia] text-sm px-6 py-3" role="navigation"
                aria-label="Main menu"
            >
                <motion.ul
                    ref={navRef}
                    className="flex items-center gap-x-6 gap-y-2 whitespace-nowrap justify-center"
                    role="menubar"
                >
                    <AnimatePresence>
                        {MENU_ITEMS.map((item, index) => {
                            const hasSubmenu = !!item.submenu;

                            return (
                                <motion.li
                                    key={item.label}
                                    className="relative shrink-0 text-xs md:text-sm"
                                    whileHover="hover"
                                    onHoverStart={() => setHovered(item.label)}
                                    onHoverEnd={() => setHovered(null)}
                                >
                                    {hasSubmenu ? (
                                        <motion.button
                                            role="menuitem"
                                            aria-haspopup="menu"
                                            aria-expanded={openMenu === item.label}
                                            aria-controls={hasSubmenu ? `submenu-${item.label}` : undefined}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggle(item.label);
                                            }}
                                            ref={(el) => {
                                                itemRefs.current[index] = el;
                                            }}
                                            tabIndex={0}
                                            onKeyDown={(e) => onTopItemKeyDown(e, index)}
                                            className="relative inline-block pr-4 font-bold tracking-wider text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#eee]"
                                        >
                                            {item.label}
                                            <span className="absolute right-0 top-1/2 -translate-y-[2.5px] border-[5px] border-transparent border-t-white" />
                                        </motion.button>
                                    ) : (
                                        <a
                                            role="menuitem"
                                            aria-expanded={openMenu === item.label}
                                            aria-controls={hasSubmenu ? `submenu-${item.label}` : undefined}
                                            href={item.link}
                                            ref={(el) => {
                                                itemRefs.current[index] = el;
                                            }}
                                            tabIndex={0}
                                            onKeyDown={(e) => onTopItemKeyDown(e, index)}
                                            onPointerDown={(e) => {
                                                e.stopPropagation();
                                                setOpenMenu(null);
                                            }}
                                            className="font-bold tracking-wider text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#eee]"
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                    {/* 共通 underline */}
                                    {hovered === item.label && (
                                        <motion.span
                                            layoutId="nav-underline"
                                            className="absolute left-0 -bottom-1 h-0.75 w-full bg-[#2396b6]"
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 6 }}
                                            transition={
                                                reduce
                                                    ? { duration: 0 }
                                                    :{
                                                        duration: 0.2,
                                                        ease: "easeOut"
                                                    }
                                            }
                                        />
                                    )}
                                    {/* Submenu */}
                                    {hasSubmenu && (
                                        <motion.div animate={{scale}}>
                                            <AnimatePresence>
                                                {openMenu === item.label && (
                                                    <motion.nav
                                                        role="menu"
                                                        id={`submenu-${item.label}`}
                                                        variants={submenuVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                        exit="hidden"
                                                        className="absolute left-1/2 top-full z-50 w-35 -translate-x-1/2 rounded bg-white shadow-lg"
                                                    >
                                                        {/* arrow */}
                                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2">
                                                            <div className="absolute -top-0.5 border-10 border-transparent" />
                                                            <div className="border-10 border-transparent border-b-white" />
                                                        </div>
                                                        <ul className="py-2 text-left">
                                                            {item.submenu?.map((subItem, i) => subItem === "---"
                                                                ? (
                                                                    <li
                                                                        key={i}
                                                                        role="none"
                                                                        className="my-2 border-t border-gray-200"
                                                                    />
                                                                ) : (
                                                                    <li key={subItem} role="none">
                                                                        <a
                                                                            role="menuitem"
                                                                            href="#"
                                                                            onPointerDown={(e) => {
                                                                                e.stopPropagation();
                                                                                setOpenMenu(null);
                                                                            }}
                                                                            className="block px-5 py-2 text-blue-500 hover:underline"
                                                                        >
                                                                            {subItem}
                                                                        </a>
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    </motion.nav>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    )}
                                </motion.li>
                            );
                        })}
                    </AnimatePresence>
                </motion.ul>
            </motion.nav>
        </div>
    );
}