import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";

const BASE_WIDTH = 440;

const CONTAINER_WIDTH = 220;
const CONTAINER_HEIGHT = 120;
const MARKER_WIDTH = 20;
const SLIDE_TIME = 1.2;
const EASING: any = [0.11, 0.65, 0.04, 1];

type Tab = {
    id: number;
    color: string;
    content: string;
    text: string;
};

const tabs: Tab[] = [
    { id: 0, color: "#9575CD", content: "Content 4", text: "Sample text for Content4 goes here." },
    { id: 1, color: "#64B5F6", content: "Content 3", text: "Sample text for Content3 goes here." },
    { id: 2, color: "#81C784", content: "Content 2", text: "Sample text for Content2 goes here." },
    { id: 3, color: "#E57373", content: "Content 1", text: "Sample text for Content1 goes here." },
];

export default function FileTab() {
    const [activeTab, setActiveTab] = useState(3);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.5)
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
        <div ref={ref} className="w-full h-full bg-[#1c1d29]">
            <motion.div className="w-full h-full flex justify-center items-center" animate={{scale}}>
                {/* Tabs */}
                <div
                    className="relative overflow-hidden"
                    style={{
                        width: CONTAINER_WIDTH,
                        height: CONTAINER_HEIGHT,
                    }}
                    role="tablist"
                    aria-label="Main navigation"
                >
                    {tabs.map((tab, index) => {
                        const isActive = activeTab === index;

                        return (
                            <motion.div
                                key={tab.id}
                                className="absolute top-0 h-full w-[90%] cursor-pointer shadow-md origin-right"
                                style={{
                                    backgroundColor: tab.color,
                                    zIndex: index,
                                }}
                                animate={{x: index > activeTab ? "-96%" : 0,}}
                                transition={{
                                    duration: SLIDE_TIME,
                                    ease: EASING,
                                }}
                            >
                                <button
                                    ref={(el) => {
                                        tabRefs.current[index] = el;
                                    }}
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-controls={`panel-${tab.id}`}
                                    id={`tab-${tab.id}`}
                                    tabIndex={isActive ? 0 : -1}

                                    onClick={() => setActiveTab(index)}
                                    onPointerDown={() => setActiveTab(index)}
                                    onKeyDown={onKeyDown}

                                    className="relative w-full h-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                >
                                    {/* マーカー */}
                                    <div
                                        className="absolute -right-3.5 rounded-r-sm shadow-[3px_0_6px_-3px_rgba(0,0,0,0.8)]"
                                        style={{
                                            top: `${(tabs.length - index - 1) * (100 / tabs.length)}%`,
                                            width: MARKER_WIDTH,
                                            height: CONTAINER_HEIGHT / tabs.length,
                                            backgroundColor: tab.color,
                                        }}
                                    />

                                    {/* コンテンツ */}
                                    <motion.div
                                        className="absolute inset-0 flex flex-col items-center justify-center text-white select-none py-2 pr-4 pl-8"
                                        animate={{
                                            opacity: isActive ? 1 : 0,
                                        }}
                                        transition={{
                                            duration: SLIDE_TIME / 3,
                                            ease: EASING,
                                        }}
                                    >
                                        <p className="mb-1 text-lg font-bold">
                                            {tab.content}
                                        </p>
                                        <p className="text-xs text-white/50">
                                            {tab.text}
                                        </p>
                                    </motion.div>
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}