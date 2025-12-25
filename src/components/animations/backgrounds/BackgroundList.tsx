"use client";

import { useState } from "react";
import { BackgroundCard } from "./BackgroundCard";
import { BackgroundModal } from "./BackgroundModal";
import { backgroundData } from "./backgroundData";


export function BackgroundList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {backgroundData.map(item => (
                    <BackgroundCard
                        key={item.key}
                        title={item.title}
                        animationKey={item.key}
                        onClick={() => setActiveKey(item.key)}
                    />
                ))}
            </div>

            <BackgroundModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}