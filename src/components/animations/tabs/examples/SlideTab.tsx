"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";
import { standardTabData } from "./animationTabData";

const BASE_WIDTH = 300;
const tabs = standardTabData;

const TAB_WIDTH = 220; //px

export default function SlideTab() {
    const [activeTab, setActiveTab] = useState<number>(1);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1.6)
        : 1;

    const values = tabs.map((tab) => tab.id);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const { onKeyDown } = useRovingTabFocus({
        values,
        activeValue: activeTab,
        setActiveValue: setActiveTab,
        refs: tabRefs,
    });

    return (
        <div ref={ref} className="w-full h-full">
            <motion.div className="w-full h-full flex justify-center items-center" animate={{scale}}>
                <div className="max-w-120 aspect-video flex flex-col" style={{width: TAB_WIDTH}}>
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
                                    ref={(el) => {
                                        tabRefs.current[index] = el;
                                    }}
                                    tabIndex={isActive ? 0 : -1}

                                    onClick={() => setActiveTab(tab.id)}
                                    onPointerDown={() => setActiveTab(tab.id)}
                                    onKeyDown={onKeyDown}

                                    className={`relative w-1/4 h-full text-lg transition-colors border-b-3 ${isActive ? "bg-black text-white border-white" : "border-black"}`}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Container */}
                    <div className="relative w-full flex-1 text-left overflow-hidden">
                        <motion.div
                            className="flex"
                            style={{ width: TAB_WIDTH * tabs.length }}
                            animate={{ x: -TAB_WIDTH * (activeTab - 1) }}
                            transition={{
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                            {tabs.map((tab) => (
                                <div
                                    key={tab.id}
                                    role="tabpanel"
                                    id={`panel-${tab.id}`}
                                    aria-labelledby={`tab-${tab.id}`}
                                    className="w-full flex items-center justify-center"
                                >
                                    <div className="px-4 py-3">
                                        <h2 className="mb-1 text-lg font-bold">
                                            {tab.title}
                                        </h2>
                                        <p className="text-xs">
                                            {tab.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}