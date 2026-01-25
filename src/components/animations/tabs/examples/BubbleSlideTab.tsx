"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useRef } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";
import { FaHouse, FaHeart, FaCartShopping, FaUser } from "react-icons/fa6";
import GooeyFilter from "@/components/ui/GooeyFilter";

const BASE_WIDTH = 400;
const TAB_WIDTH = 50;
const BUBBLE_OFFSET = -16;

export default function BubbleSlideTab() {
    const [active, setActive] = useState<IconId>("home");
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1.4)
        : 1;

    type IconId = "home" | "heart" | "cart" | "user";

    const tabs = [
        { id: "home", label: "Home", icon: FaHouse },
        { id: "heart", label: "Likes", icon: FaHeart },
        { id: "cart", label: "Cart", icon: FaCartShopping },
        { id: "user", label: "User", icon: FaUser },
    ] satisfies {
        id: IconId;
        label: string;
        icon: React.ComponentType;
    }[];
    const shouldReduceMotion = useReducedMotion();

    const values = tabs.map((tab) => tab.id);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const { onKeyDown } = useRovingTabFocus<IconId>({
        values,
        activeValue: active,
        setActiveValue: setActive,
        refs: tabRefs,
    });

    const activeIndex = tabs.findIndex(i => i.id === active)!;
    const bubbleX = BUBBLE_OFFSET + activeIndex * TAB_WIDTH;

    return (
        <div ref={ref} className="w-full h-full bg-[#1e1536]">
            <motion.div className="w-fll h-full flex justify-center items-center" animate={{scale}}>
                <div className="relative w-55 max-w-120 h-45 bg-[#31274d] flex flex-col justify-center rounded-md overflow-hidden">
                    {/* Tabs */}
                    <div
                        className="absolute bottom-0 left-0 w-full rounded-b-md px-6 py-4"
                        style={{ filter: "url(#goo)" }}
                        role="tablist"
                        aria-label="Main navigation"
                    >
                        <GooeyFilter id="goo" />
                        <div className="absolute bottom-0 left-0 w-full rounded-b-md flex items-center justify-between px-6 py-4 bg-[#fd6465]">
                            {/* icons */}
                            {tabs.map(({ id, label, icon: Icon }, index) => {
                                const isActive = id === active;

                                return (
                                    <motion.button
                                        key={id}
                                        role="tab"
                                        aria-selected={isActive}
                                        aria-label={label}
                                        tabIndex={isActive ? 0 : -1}
                                        ref={(el) => {
                                            tabRefs.current[index] = el;
                                        }}
                                        onPointerDown={() => setActive(id)}
                                        onKeyDown={onKeyDown}
                                        className="relative z-10 flex items-center justify-center"
                                        animate={{
                                            scale: isActive ? 1.15 : 0.8,
                                            color: isActive ? "#ffffff" : "#ffd6b3",
                                        }}
                                        transition={
                                        shouldReduceMotion
                                            ? { duration: 0 }
                                            : {
                                                duration: 0.3,
                                                ease: [0.87, -0.91, 0.66, 1.42],
                                            }
                                        }
                                    >
                                        <Icon className="text-2xl" size={18} />
                                    </motion.button>
                                );
                            })}

                            {/* bubble */}
                            <motion.div
                                className="absolute -top-3.5 h-13 w-13 rounded-full bg-[#fd6465]"
                                animate={{ x: bubbleX }}
                                transition={
                                shouldReduceMotion
                                    ? { duration: 0 }
                                    : {
                                        duration: 0.3,
                                        ease: [0.87, -0.91, 0.66, 1.42],
                                    }
                                }
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}