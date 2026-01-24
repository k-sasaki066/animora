"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";
import { FaHouse, FaHeart, FaCartShopping, FaUser } from "react-icons/fa6";

const BASE_WIDTH = 300;
const tabs = [
    { id: 1, icon: FaHouse, title: "HOME", text: "Sample text for HOME goes here." },
    { id: 2, icon: FaHeart, title: "FAVORITE", text: "Sample text for FAVORITE goes here." },
    { id: 3, icon: FaCartShopping, title: "SHOPPING", text: "Sample text for SHOPPING goes here." },
    { id: 4, icon: FaUser, title: "MY PAGE", text: "Sample text for MY PAGE goes here." },
];

export default function IconTab() {
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
                <div className="w-58 max-w-120 aspect-video flex flex-col">
                    {/* Tabs */}
                    <motion.div
                        layout
                        className="relative flex shrink-0 h-1/4 border-b"
                        role="tablist"
                    >
                        {tabs.map((tab, index) => {
                            const Icon = tab.icon;
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
                                    onKeyDown={onKeyDown}
                                    ref={(el) => {
                                        tabRefs.current[index] = el;
                                    }}
                                    tabIndex={isActive ? 0 : -1}
                                    className={`relative w-1/4 h-full flex items-center justify-center transition-colors duration-150 ${isActive ? "text-orange-500" : "text-gray-500"}`}
                                >
                                    <Icon size={18} />

                                    {/* underline */}
                                    {isActive && (
                                        <motion.div
                                            layout
                                            className="absolute -bottom-0.5 h-0.75 bg-orange-500"
                                            animate={{
                                                width: "100%",
                                                left: `${(activeTab - 1 )}%`,
                                            }}
                                            transition={{
                                                duration: 0.25,
                                                ease: "easeOut"
                                            }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </motion.div>

                    {/* Content */}
                    <div className="w-full flex-1 bg-white shadow-lg p-6 text-left">
                        <AnimatePresence mode="wait">
                            {tabs.filter((tab) => tab.id === activeTab)
                                .map((tab) => (
                                <motion.div
                                    key={tab.id}
                                    role="tabpanel"
                                    id={`panel-${tab.id}`}
                                    aria-labelledby={`tab-${tab.id}`}
                                    className="w-full"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 0.25,
                                        ease: "easeOut"
                                    }}
                                >
                                    <h2 className="text-xl font-bold mb-2">
                                        {tab.title}
                                    </h2>
                                    <p className="text-xs text-gray-600">
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