import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";
import { standardTabData } from "./animationTabData";

const BASE_WIDTH = 300;
const BORDER_WIDTH = 2.5;
const OVERLAP = -BORDER_WIDTH;
const tabs = standardTabData;

export default function ModernTab() {
    const [active, setActive] = useState(1);
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
                <div className="w-55 max-w-120 aspect-video flex flex-col">
                    {/* Tabs */}
                    <div
                        className="flex shrink-0 h-1/4 z-10"
                        style={{ marginBottom: OVERLAP }}
                        role="tablist"
                    >
                        {tabs.map((tab, index) => {
                            const isActive = active === tab.id;

                            return (
                                <motion.button
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
                                    className={`relative h-full w-1/4 flex-1 text-sm ${isActive ? "bg-white z-20" : "bg-transparent z-10"}`}
                                    animate={{
                                        borderColor: isActive ? "rgba(0,0,0,1)" : "rgba(0,0,0,0)",
                                    }}
                                    transition={{
                                        duration: 0.15,
                                        ease: "easeIn"
                                    }}
                                    style={{
                                        borderWidth: BORDER_WIDTH,
                                        borderBottomWidth: isActive ? 0 : BORDER_WIDTH,
                                        borderTopRightRadius: 12,
                                    }}
                                >
                                    {tab.label}
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Content */}
                    <div
                        className="relative z-0 flex-1 bg-white"
                        style={{
                            borderWidth: BORDER_WIDTH,
                            borderStyle: "solid",
                            borderColor: "#000",
                        }}
                    >
                        <AnimatePresence mode="wait">
                        {tabs
                            .filter((tab) => tab.id === active)
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
                                        ease: "easeIn"
                                    }}
                                    className="px-3 py-4 text-left"
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