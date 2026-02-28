"use client";

import { useState } from "react";
import { CardCard } from "./CardCard";
import { CardModal } from "./CardModal";
import { cardData } from "./cardData";

export function CardList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                {cardData.map((item) => (
                    <CardCard
                        key={item.key}
                        title={item.title}
                        animationKey={item.key}
                        onClick={() => setActiveKey(item.key)}
                    />
                ))}
            </div>

            <CardModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}