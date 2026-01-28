"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { NAV_MENUS, NavMenu } from "./constants";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";

type Props = {
    isOpen: boolean;
    scale: number;
    isCircleOpen: boolean;
    setIsCircleOpen: (v: boolean) => void;
    activeMenu: NavMenu;
    setActiveMenu: (v: NavMenu) => void;
    itemRefs: React.RefObject<(HTMLAnchorElement | null)[]>;
    onClose: () => void;
};

export function CircleSpreadMenu({
    isOpen,
    scale,
    isCircleOpen,
    setIsCircleOpen,
    activeMenu,
    setActiveMenu,
    itemRefs,
    onClose,
}: Props) {
    const reduce = useReducedMotion();
    const menuValues = NAV_MENUS.map(v => v);

    const { onKeyDown } = useRovingTabFocus({
        values: menuValues,
        activeValue: activeMenu,
        setActiveValue: setActiveMenu,
        refs: itemRefs,
        onActivate: onClose,
    });

    return (
        <div className="relative w-full h-full overflow-hidden">
            <motion.nav
                id="overlay-menu"
                role="navigation"
                aria-label="メインメニュー"
                aria-hidden={!isOpen}
                className="absolute inset-0 top-0 left-0 bg-[#f2f0f0] z-10 aspect-square"
                initial={false}
                animate={{
                    width: isCircleOpen ? "150%" : "20%",
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: isCircleOpen ? 0 : "100%",
                }}
                transition={
                reduce
                    ? { duration: 0 }
                    : { duration: 0.3, ease: "easeInOut" }
                }
            />
            <AnimatePresence
                mode="wait"
                onExitComplete={() => {
                    // メニューが完全に消えたあとに円を縮める
                    setIsCircleOpen(false);
                }}
            >
                {isOpen && (
                    <motion.div
                        className="absolute top-[15%] left-[10%] z-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={
                            reduce
                            ? { duration: 0 }
                            : { duration: 0.2, ease: "easeInOut" }
                        }
                    >
                        <motion.ul
                            role="menu"
                            className="flex flex-col justify-center items-center gap-3 text-center origin-top-left"
                            animate={{ scale }}
                        >
                            {NAV_MENUS.map((label, i) => (
                                <motion.li key={label} role="none">
                                    <a
                                        href="#"
                                        role="menuitem"
                                        className="px-5 py-3 text-lg text-blue-500 font-bold hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:text-blue-400"
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
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}