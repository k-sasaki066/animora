"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { ChevronDown } from "lucide-react";
import { BASE_WIDTH, MENU_ITEMS } from "./constants";
import { useCenterAccordionMenu } from "./useCenterAccordionMenu";

export default function CenterAccordionMenu() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.6), 1)
        : 1;

    const { openIndex, activeItemIndex, buttonRefs, itemRefs, toggle, close, onItemKeyDown } = useCenterAccordionMenu();

    const reduce = useReducedMotion();

    return (
        <div
            ref={ref}
            className="w-full h-full overflow-y-scroll p-4 no-scrollbar bg-center bg-cover bg-no-repeat"
            style={{
                backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url('https://picsum.photos/id/163/684/370')",
            }}
        >
            <motion.div className="w-full h-full origin-top" animate={{scale}}>
                <div className="mx-auto w-full max-w-sm rounded bg-white shadow">
                    <ul>
                        {MENU_ITEMS.map((section, index) => {
                            const isOpen = openIndex === index;
                            const contentId = `menu-panel-${index}`;

                            return (
                                <li
                                    key={section.title}
                                    className="border-b last:border-b-0"
                                >
                                    {/* Header */}
                                    <button
                                        type="button"
                                        onClick={() => toggle(index)}
                                        aria-label={`${section.title} を ${isOpen ? "閉じる" : "開く"}`}
                                        aria-expanded={isOpen}
                                        aria-controls={contentId}
                                        ref={(el) => {
                                            buttonRefs.current[index] = el;
                                        }}
                                        className="relative flex w-full items-center gap-3 px-3.5 py-3.5 text-left text-gray-800 transition hover:bg-gray-50"
                                        style={{color: isOpen ? "#dc9a39" : "#1e2939" }}
                                    >
                                        <span className="flex-1 text-lg tracking-wide font-semibold">
                                            {section.title}
                                        </span>

                                        <motion.span
                                            style={{color: isOpen ? "#dc9a39" : "#1e2939" }}
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={
                                                reduce
                                                ? { duration: 0 }
                                                : { duration: 0.3 }
                                            }
                                        >
                                            <ChevronDown className="h-5 w-5" />
                                        </motion.span>
                                    </button>

                                    {/* Content */}
                                    <div
                                        id="menu-panel-0"
                                        role="region"
                                        aria-labelledby="menu-button-0"
                                    >
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.ul
                                                    initial={{
                                                        height: 0,
                                                        opacity: 0
                                                    }}
                                                    animate={{
                                                        height: "auto",
                                                        opacity: 1
                                                    }}
                                                    exit={{
                                                        height: 0,
                                                        opacity: 0
                                                    }}
                                                    transition={
                                                        reduce
                                                        ? { duration: 0 }
                                                        : {
                                                            duration: 0.35, ease: "easeOut"
                                                            }
                                                    }
                                                    className="overflow-hidden bg-green-100"
                                                >
                                                    {section.items.map((item, itemIndex ) => (
                                                        <li key={item} className="border-b last:border-b-0">
                                                            <a
                                                                href="#"
                                                                ref={(el) => {
                                                                    if (!itemRefs.current[index]) {
                                                                        itemRefs.current[index] = [];
                                                                    }
                                                                    itemRefs.current[index][itemIndex] = el;
                                                                }}
                                                                tabIndex={itemIndex === activeItemIndex ? 0 : -1}
                                                                onKeyDown={(e) => onItemKeyDown(e, index, itemIndex)}
                                                                onPointerDown={(e) => {
                                                                    // マウス・タッチのみ反応
                                                                    if (e.pointerType === "mouse" || e.pointerType === "touch") {
                                                                        e.preventDefault();
                                                                        close(index);
                                                                    }
                                                                }}
                                                                className="block px-8 py-3 text-gray-600 transition hover:bg-lime-400 hover:text-white focus:outline-none focus-visible:text-white focus-visible:bg-lime-400"
                                                            >
                                                                {item}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}