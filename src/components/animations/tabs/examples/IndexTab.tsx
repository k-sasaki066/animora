import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";
import { standardTabData } from "./animationTabData";

const BASE_WIDTH = 300;
const tabs = standardTabData;

export default function IndexTab() {
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
                <div className="w-55 max-w-120 aspect-video flex flex-col">
                    {/* Tabs */}
                    <div className="flex shrink-0 h-1/5 gap-0.5" role="tablist">
                        {tabs.map((tab, index) => {
                            const isActive = activeTab === tab.id;

                            return (
                                <motion.button
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
                                    className={`relative w-1/4 h-[110%] font-bold text-sm rounded-t-sm transition-colors duration-150 ${isActive ? "bg-[#388dd1] text-white" : "bg-[#bababa] text-[#565656]"}`}
                                    animate={{
                                        y: isActive ? -3 : 0,
                                    }}
                                    transition={{
                                        duration: 0.15,
                                        ease: "easeIn"
                                    }}
                                >
                                <span className="relative z-10 leading-none">
                                    {tab.label}
                                </span>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Content */}
                    <div className="bg-[#f3f3f3] p-6 text-left overflow-hidden z-20">
                        <AnimatePresence mode="wait">
                            {tabs.filter((tab) => tab.id === activeTab)
                                .map((tab) => (
                                    <motion.div
                                        key={tab.id}
                                        role="tabpanel"
                                        id={`panel-${tab.id}`}
                                        aria-labelledby={`tab-${tab.id}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            duration: 0.15,
                                            ease: "easeOut"
                                        }}
                                    >
                                        <h2 className="text-lg mb-1 text-[#388dd1] border-b">
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