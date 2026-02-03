"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { BASE_WIDTH, MENUS } from "./constants";
import { useFoldingMenu } from "./useFoldingMenu";

export default function FoldingMenu() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.6), 1)
        : 1;
    const reduce = useReducedMotion();

    const { openIndex, setOpenIndex, menuButtonRefs, menuItemRefs, onMenuKeyDown, onMenuItemKeyDown } = useFoldingMenu();

    return (
        <nav ref={ref} aria-label="Main menu" className="relative w-full h-full z-0">
            <ul role="menubar" className="flex justify-center">
                {MENUS.map((menu, index) => {
                    const open = openIndex === index;

                    return (
                        <li
                            key={index}
                            className="relative"
                            onMouseEnter={() => setOpenIndex(index)}
                            onMouseLeave={() => setOpenIndex(null)}
                            onBlurCapture={(e) => {
                                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                                    setOpenIndex(null);
                                }
                            }}
                        >
                            {/* タイトル */}
                            <button
                                type="button"
                                ref={(el) => {
                                    if (el) menuButtonRefs.current[index] = el;
                                }}
                                onKeyDown={onMenuKeyDown}
                                role="menuitem"
                                aria-haspopup="true"
                                aria-expanded={open}
                                className="relative w-37.5 h-12 text-center font-bold uppercase text-white cursor-pointer z-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                style={{ backgroundColor: open ? menu.hoverColor : menu.color }}
                                onFocus={() => setOpenIndex(index)}
                            >
                                <span className="block py-3">{menu.title}</span>

                                {/* 上三角 */}
                                <motion.div
                                    className="absolute left-0 top-full w-0 h-0 -mt-px"
                                    animate={{
                                        borderTopWidth: open ? 0 : 5,
                                    }}
                                    transition={
                                        reduce
                                        ? { duration: 0 }
                                        : { duration: 0.2, ease: "easeInOut" }
                                    }
                                    style={{
                                        borderTopColor: menu.color,
                                        borderLeft: "75px solid transparent",
                                        borderRight: "75px solid transparent",
                                    }}
                                />
                                {/* 下三角 */}
                                <motion.div
                                    className="absolute left-0 bottom-0 w-0 h-0 -mb-px"
                                    animate={{
                                        borderBottomWidth: open ? 5 : 0,
                                    }}
                                    transition={
                                        reduce
                                        ? { duration: 0 }
                                        : { duration: 0.2, delay: open ? 0.1 : 0, ease: "easeInOut" }
                                    }
                                    style={{
                                        borderBottomColor: "#dddddd",
                                        borderLeft: "75px solid transparent",
                                        borderRight: "75px solid transparent",
                                    }}
                                />
                            </button>

                            {/* ドロップダウン */}
                            <motion.ul
                                role="menu"
                                className="absolute left-0 w-full bg-[#dddddd] z-50 -translate-y-1"
                                initial={false}
                                animate={{
                                    paddingTop: open ? 15 : 5,
                                    paddingBottom: open ? 15 : 5,
                                }}
                                transition={
                                    reduce
                                    ? { duration: 0 }
                                    : {
                                        duration: 0.5,
                                        ease: [0.73, 0.32, 0.34, 1.5],
                                    }
                                }
                            >
                                {menu.items.map((item, itemIndex) => (
                                    <motion.li
                                        key={item}
                                        role="none"
                                        className="whitespace-nowrap cursor-pointer overflow-hidden"
                                        animate={{
                                            height: open ? 30 : 0,
                                            opacity: open ? 1 : 0,
                                            marginTop: open ? 4 : 0,
                                        }}
                                        transition={
                                            reduce
                                            ? { duration: 0 }
                                            :{
                                                duration: 0.5,
                                                ease: [0.73, 0.32, 0.34, 1.5],
                                            }
                                        }
                                        whileHover={{
                                            backgroundColor: "#cfd9df",
                                        }}
                                    >
                                        <a
                                            href="#"
                                            role="menuitem"
                                            tabIndex={open ? 0 : -1}
                                            ref={(el) => {
                                                if (!menuItemRefs.current[index]) {
                                                menuItemRefs.current[index] = [];
                                                }
                                                if (el) menuItemRefs.current[index][itemIndex] = el;
                                            }}
                                            onKeyDown={(e) =>
                                                onMenuItemKeyDown(e, index, itemIndex)
                                            }
                                            onPointerDown={(e) => {
                                                e.stopPropagation();
                                                setOpenIndex(null);
                                            }}
                                            className="tracking-wider text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#eee]"
                                        >
                                            {item}
                                        </a>
                                    </motion.li>
                                ))}
                                {/* ▼ 下三角 */}
                                <motion.div
                                    className="absolute left-0 top-full w-0 h-0 border-t-[5px] border-t-[#ddd]-mb-px"
                                    style={{
                                        borderLeft: "75px solid transparent",
                                        borderRight: "75px solid transparent",
                                    }}
                                />
                            </motion.ul>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}