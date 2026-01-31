"use client";

import { motion, AnimatePresence } from "framer-motion";
import { NAV_MENUS, PARTICLE_COLORS } from "./constants";
import { RefObject, forwardRef } from "react";

type Props = {
    isOpen: boolean;
    scale: number;
    activeMenu: typeof NAV_MENUS[number];
    itemRefs: RefObject<(HTMLAnchorElement | null)[]>;
    onClose: () => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    shouldReduceMotion: boolean;
    explode: boolean;
};

export const ExplodingMenu = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, scale, activeMenu, itemRefs, onClose, onKeyDown, shouldReduceMotion, explode }, ref) => {

        interface CircleProps {
            colorClass: string;
        }


        const Circle: React.FC<CircleProps> = ({ colorClass }) => (
            <svg viewBox="0 0 13 12" className="w-4 h-4">
                <path
                className={`fill-current ${colorClass}`}
                d="M6.5,0.1C3.4,0.1,0.8,2.8,0.8,6s2.6,5.9,5.7,5.9s5.7-2.7,5.7-5.9S9.7,0.1,6.5,0.1L6.5,0.1z M6.5,8.8
                C5,8.8,3.8,7.6,3.8,6S5,3.2,6.5,3.2S9.2,4.4,9.2,6S8,8.8,6.5,8.8L6.5,8.8z"
                />
            </svg>
        );

        return (
            <motion.div
                className="w-full h-full flex justify-center items-center"
                animate={{ scale }}
                transition={
                    shouldReduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 200, damping: 20 }
                }
            >
                {/* 爆発パーティクル */}
                <AnimatePresence>
                    {explode && (
                        <>
                        {Array.from({ length: 40 }).map((_, i) => {
                            const colorClass = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];

                            // ランダム方向
                            const angle = Math.random() * 2 * Math.PI; // 0 ~ 360度
                            const radius = 50 + Math.random() * 850;

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ x: 0, y: 0, opacity: 1 }}
                                    animate={{ x: Math.cos(angle) * radius, y: Math.sin(angle) * radius, opacity: 0, }}
                                    transition={shouldReduceMotion
                                        ? { duration: 0 }
                                        : {
                                            duration: 0.7 + Math.random() * 0.4,
                                            ease: "easeOut",
                                        }
                                    }
                                    className={`pointer-events-none absolute left-1/2 top-1/2`}
                                >
                                    <Circle colorClass={colorClass}/>
                                </motion.div>
                                );
                            })}
                        </>
                    )}
                </AnimatePresence>

                {/* ナビ */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            ref={ref}
                            id="global-navigation"
                            role="menu"
                            aria-orientation="vertical"
                            onKeyDown={onKeyDown}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={shouldReduceMotion
                                ? { duration: 0 }
                                : { duration: 0.5, ease: "easeInOut" }
                            }
                            className="grid h-50 w-50  grid-cols-2 grid-rows-2 gap-0.5 rounded-sm bg-transparent"
                        >
                            {NAV_MENUS.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href="#"
                                        role="menuitem"
                                        aria-current={activeMenu === item}
                                        className={`flex items-center justify-center text-3xl text-white focus:outline-none  focus-visible:ring-1 focus-visible:ring-[#49403c] ${item.color}`}
                                        whileHover={{
                                            borderWidth: 1, borderColor: "#49403c"
                                        }}
                                        ref={(el) => {
                                            itemRefs.current[index] = el;
                                        }}
                                        tabIndex={activeMenu === item ? 0 : -1}
                                        onPointerDown={(e) => {
                                            // マウス・タッチのみ反応
                                            if (e.pointerType === "mouse" || e.pointerType === "touch") {
                                                e.preventDefault();
                                                onClose();
                                            }
                                        }}
                                    >
                                        <Icon />
                                    </motion.a>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    }
);
ExplodingMenu.displayName = "ExplodingMenu";