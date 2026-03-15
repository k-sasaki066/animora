import { motion, Variants, AnimatePresence, useReducedMotion } from "framer-motion";
import { NAV_MENUS, COLORS } from "./constants";
import { RefObject, forwardRef } from "react";

type Props = {
    isOpen: boolean;
    scale: number;
    activeMenu: typeof NAV_MENUS[number];
    itemRefs: RefObject<(HTMLAnchorElement | null)[]>;
    onClose: () => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
};

export const PushDownMenu = forwardRef<HTMLElement, Props>(
    ({ isOpen, scale, activeMenu, itemRefs, onClose, onKeyDown,}, ref) => {
        const shouldReduceMotion = useReducedMotion();

        const itemVariants: Variants = {
            closed: { y: -100, opacity: 0 },
            open: (i: number) => ({
                y: 0,
                opacity: 1,
                transition: shouldReduceMotion
                    ? { duration: 0 }
                    : { delay: i * 0.05, type: "spring", stiffness: 300 },
            }),
        };

        return (
            <motion.nav
                ref={ref}
                id="overlay-menu"
                role="navigation"
                aria-label="Main menu"
                aria-hidden={!isOpen}
                className="absolute w-full h-full top-0 left-0 z-1"
                style={{ backgroundColor: COLORS.menuBg }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={
                    shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.3, ease: "easeOut" }
                }
            >
                <motion.ul
                    role="menu"
                    className="flex justify-end items-center gap-4 p-3 origin-top-right"
                    animate={{ scale }}
                >
                    <AnimatePresence>
                        {isOpen &&
                            NAV_MENUS.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.li
                                        key={item.label}
                                        role="none"
                                        custom={i}
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <a
                                            href="#"
                                            role="menuitem"
                                            className="flex flex-col gap-1 px-1.5 text-lg cursor-pointer text-blue-500 hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:text-blue-400"
                                            ref={(el) => {
                                                itemRefs.current[i] = el;
                                            }}
                                            tabIndex={activeMenu.label === item.label ? 0 : -1}
                                            onKeyDown={onKeyDown}
                                            onPointerDown={(e) => {
                                                // マウス・タッチのみ反応
                                                if (e.pointerType === "mouse" || e.pointerType === "touch") {
                                                    e.preventDefault();
                                                    onClose();
                                                }
                                            }}
                                        >
                                            <div
                                                className="w-8 h-8 flex items-center justify-center rounded-full text-white text-xl mx-auto"
                                                style={{
                                                    backgroundColor: COLORS.iconBg,
                                                    color: COLORS.label
                                                }}
                                            >
                                                <Icon />
                                            </div>
                                            <h4
                                                className="text-white text-xs text-center"
                                                style={{
                                                    color: COLORS.label
                                                }}
                                            >
                                                {item.label}
                                            </h4>
                                        </a>
                                    </motion.li>
                                );
                            })}
                    </AnimatePresence>
                </motion.ul>
            </motion.nav>
        );
    }
);

PushDownMenu.displayName = "PushDownMenu";