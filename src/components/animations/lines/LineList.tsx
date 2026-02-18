"use client";

import { useState } from "react";
import { LineCard } from "./LineCard";
import { LineModal } from "./LineModal";
import { lineData } from "./lineData";

export function LineList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
                {lineData.map((item) => (
                    <LineCard
                        key={item.key}
                        title={item.title}
                        animationKey={item.key}
                        onClick={() => setActiveKey(item.key)}
                    />
                ))}
            </div>

            <LineModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}