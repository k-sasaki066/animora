import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";
import { textTabData } from "./animationTabData";

const BASE_WIDTH = 420;
const tabs = textTabData;
const truncateText = (text: string, max: number) =>
    text.length > max ? text.slice(0, max) + "…" : text;

export default function MotionTab() {
    const [activeTab, setActiveTab] = useState("about");
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1.4)
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
        <div ref={ref} className="w-full h-full bg-[#122638]">
            <div className="w-full h-full flex justify-center" >
                <div className="flex flex-col items-start">
                    <motion.div
                        className="pt-2"
                        animate={{ scale }}
                        style={{ transformOrigin: "top center" }}
                    >
                        <div className="w-57 max-w-120 aspect-video flex flex-col">
                            {/* Tabs */}
                            <ul className="flex shrink-0 gap-0.5 h-8" role="tablist">
                                {tabs.map((tab, index) => {
                                    const isActive = activeTab === tab.id;

                                    return (
                                        <motion.button
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

                                            className={`w-1/3 cursor-pointer px-4 py-2 rounded-t-lg text-xs transition-colors ${isActive ? "bg-red-700 text-white" : "bg-red-400 text-white"}`}
                                        >
                                            {tab.label}
                                        </motion.button>
                                    );
                                })}
                            </ul>

                            {/* Panels */}
                            <div className="w-full bg-white rounded-b-lg overflow-hidden">
                                <AnimatePresence mode="wait">
                                    {tabs.filter((tab) => tab.id === activeTab)
                                        .map((tab) => (
                                            <motion.div
                                                className="relative px-4 text-left "
                                                style={{ transformOrigin: "top" }}
                                                key={tab.id}
                                                role="tabpanel"
                                                id={`panel-${tab.id}`}
                                                aria-labelledby={`tab-${tab.id}`}
                                                initial={{
                                                    height: 0,
                                                    opacity: 0,
                                                    paddingTop: 0,
                                                    paddingBottom: 0
                                                }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                    paddingTop: 16,
                                                    paddingBottom: 16
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                    paddingTop: 0,
                                                    paddingBottom: 0
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                    ease: "easeInOut"
                                                }}
                                            >
                                                <h3 className="text-md font-bold mb-2">
                                                    {tab.label}
                                                </h3>
                                                <p className="text-xs text-gray-700">
                                                    {truncateText(tab.content, 180)}
                                                </p>
                                            </motion.div>
                                        ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}