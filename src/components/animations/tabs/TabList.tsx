"use client";

import { useState } from "react";
import { TabCard } from "./TabCard";
import { TabModal } from "./TabModal";
import { tabData } from "./tabData";
import { useReducedMotion } from "framer-motion";

export function TabList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const reduceMotion = prefersReducedMotion ?? false;
    const paused = !!activeKey || reduceMotion;

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
                {tabData.map((item) => (
                    <TabCard
                        key={item.key}
                        title={item.title}
                        video={item.video}
                        onClick={() => setActiveKey(item.key)}
                        paused={paused}
                    />
                ))}
            </div>

            <TabModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}