"use client";

import { useState } from "react";
import { TabCard } from "./TabCard";
import { TabModal } from "./TabModal";
import { tabData } from "./tabData";

export function TabList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
                {tabData.map((item) => (
                    <TabCard
                        key={item.key}
                        title={item.title}
                        animationKey={item.key}
                        onClick={() => setActiveKey(item.key)}
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