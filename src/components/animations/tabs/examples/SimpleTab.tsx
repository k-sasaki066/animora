"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";
import { textTabData } from "./animationTabData";

const BASE_WIDTH = 300;
const tabs = textTabData;
const truncateText = (text: string, max: number) =>
    text.length > max ? text.slice(0, max) + "…" : text;

export default function SimpleTab() {
    const [active, setActive] = useState("about");
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1.6)
        : 1;

    const values = tabs.map((tab) => tab.id);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const { onKeyDown } = useRovingTabFocus({
        values,
        activeValue: active,
        setActiveValue: setActive,
        refs: tabRefs,
    });

    return (
        <div ref={ref} className="w-full h-full">
            <motion.div className="w-full h-full flex justify-center items-center" animate={{scale}}>
                <div className="w-57 max-w-120 aspect-video flex flex-col">
                    {/* Tabs */}
                    <div
                        className="relative grid border border-[#6f86d6] rounded-xs overflow-hidden"
                        style={{ gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))` }}
                        role="tablist"
                    >
                        {/* Active background */}
                        <motion.div
                            layout
                            className="absolute inset-y-0 bg-[#6f86d6]"
                            style={{ width: `${100 / tabs.length}%` }}
                            animate={{
                                x: `${tabs.findIndex(t => t.id === active) * 100}%`,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                            }}
                        />

                        {tabs.map((tab, index) => {
                            const isActive = tab.id === active;

                            return (
                                <button
                                    key={tab.id}
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-controls={`panel-${tab.id}`}
                                    id={`tab-${tab.id}`}
                                    onClick={() => setActive(tab.id)}
                                    onPointerDown={() => setActive(tab.id)}
                                    onKeyDown={onKeyDown}
                                    ref={(el) => {
                                        tabRefs.current[index] = el;
                                    }}
                                    tabIndex={isActive ? 0 : -1}
                                    className={`relative z-10 px-4 py-1 text-xs font-medium transition-colors ${isActive ? "text-white" : "text-blue-600 hover:bg-blue-50"}`}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Content */}
                    <div className="mt-4 text-left">
                        <AnimatePresence mode="wait">
                            {tabs
                                .filter(tab => tab.id === active)
                                .map(tab => (
                                    <div
                                        key={tab.id}
                                        role="tabpanel"
                                        id={`panel-${tab.id}`}
                                        aria-labelledby={`tab-${tab.id}`}
                                    >
                                        <h3 className="text-md font-bold mb-2">
                                            {tab.label}
                                        </h3>
                                        <p className="text-xs text-gray-700">
                                            {truncateText(tab.content, 180)}
                                        </p>
                                </div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}