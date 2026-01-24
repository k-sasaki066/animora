"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { standardTabData } from "./animationTabData";

const BASE_WIDTH = 300;
const tabs = standardTabData;

export default function StandardTab() {
    const [activeTab, setActiveTab] = useState<number>(1);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1.6)
        : 1;

    const values = tabs.map((tab) => tab.id);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const moveFocus = (nextIndex: number) => {
        const nextId = values[nextIndex];
        setActiveTab(nextId);
        tabRefs.current[nextIndex]?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>
    ) => {
        const currentIndex = values.indexOf(activeTab);

        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
            e.preventDefault();
            moveFocus((currentIndex + 1) % values.length);
        }

        if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
            e.preventDefault();
            moveFocus(
                (currentIndex - 1 + values.length) % values.length
            );
        }

        if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
        }
    };

    return (
        <div ref={ref} className="w-full h-full">
            <motion.div className="w-full h-full flex justify-center items-center" animate={{scale}}>
                <div className="max-w-150 aspect-video flex flex-col">
                    {/* Tabs */}
                    <div className="flex shrink-0 h-1/4" role="tablist">
                        {tabs.map((tab, index) => {
                            const isActive = activeTab === tab.id;

                            return (
                                <button
                                    key={tab.id}
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-controls={`panel-${tab.id}`}
                                    id={`tab-${tab.id}`}
                                    onClick={() => setActiveTab(tab.id)}
                                    onPointerDown={() => setActiveTab(tab.id)}
                                    ref={(el) => {
                                        tabRefs.current[index] = el;
                                    }}
                                    tabIndex={isActive ? 0 : -1}
                                    onKeyDown={(e) => handleKeyDown(e)}
                                    className={`relative h-full w-1/4 font-bold text-sm transition-colors duration-150
                                        ${isActive ? "bg-[#cf3939] text-white" : "bg-[#d9d9d9] text-[#565656]"}
                                    `}
                                >
                                    {/* Top border animation */}
                                    <motion.div
                                        className="absolute top-0 left-0 h-1 w-full"
                                        initial={false}
                                        animate={{
                                            backgroundColor: isActive ? "#8f2a2a" : "#d9d9d9",
                                        }}
                                        transition={{
                                            duration: 0.15,
                                            ease: "easeIn"
                                        }}
                                    />
                                    <span className="relative z-10 leading-none text-xs">
                                        {tab.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Content */}
                    <div className="flex-1 border-4 border-[#cf3939] bg-white overflow-hidden">
                        <AnimatePresence mode="wait">
                            {tabs
                                .filter((tab) => tab.id === activeTab)
                                .map((tab) => (
                                    <motion.div
                                        key={tab.id}
                                        role="tabpanel"
                                        id={`panel-${tab.id}`}
                                        aria-labelledby={`tab-${tab.id}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{
                                            duration: 0.2,
                                            ease: "easeOut"
                                        }}
                                        className="px-4 py-3 text-left"
                                    >
                                        <h2 className="mb-1 text-lg font-bold">
                                            {tab.title}
                                        </h2>
                                        <p className="text-xs">
                                            {tab.text}
                                        </p>
                                    </motion.div>
                                ))}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}