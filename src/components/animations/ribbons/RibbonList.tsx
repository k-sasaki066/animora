"use client";

import { useState } from "react";
import { RibbonCard } from "./RibbonCard";
import { RibbonModal } from "./RibbonModal";
import { ribbonData } from "./ribbonData";

export default function RibbonList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
                {ribbonData.map((item) => (
                    <RibbonCard
                        key={item.key}
                        title={item.title}
                        image={item.image}
                        onClick={() => setActiveKey(item.key)}
                    />
                ))}
            </div>

            <RibbonModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}