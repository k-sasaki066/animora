import { motion, useAnimation, AnimatePresence } from "framer-motion";
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
    itemsControls: ReturnType<typeof useAnimation>;
};

export const OrbitMenu = forwardRef<HTMLElement, Props>(
    ({ isOpen, scale, activeMenu, itemRefs, onClose, onKeyDown, shouldReduceMotion, itemsControls }, ref) => {

        return (
            <AnimatePresence>
                {isOpen &&
                    NAV_MENUS.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.a
                                key={item.name}
                                custom={index}
                                role="menuitem"
                                aria-label={item.name}
                                ref={(el) => {
                                    itemRefs.current[index] = el;
                                }}
                                tabIndex={activeMenu.name === item.name ? 0 : -1}
                                onKeyDown={onKeyDown}
                                onPointerDown={(e) => {
                                    // マウス・タッチのみ反応
                                    if (e.pointerType === "mouse" || e.pointerType === "touch") {
                                        e.preventDefault();
                                        onClose();
                                    }
                                }}
                                initial={{
                                    opacity: 0,
                                    scale: 0.5,
                                    x: 20,
                                    y: 20
                                }}
                                animate={itemsControls}
                                exit={{
                                    opacity: 0,
                                    scale: 0.5,
                                    x: 20,
                                    y: 20,
                                    transition: shouldReduceMotion
                                        ? { duration: 0 }
                                        : { duration: 0.2 }
                                }}
                                href="#"
                                className="absolute w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#8290a4] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8290a4]"
                            >
                                <Icon className="w-6 h-6" />
                            </motion.a>
                        );
                    })
                }
            </AnimatePresence>
        );
    }
);
OrbitMenu.displayName = "OrbitMenu";