"use client";

import { useState } from "react";
import { CardCard } from "./CardCard";
import { CardModal } from "./CardModal";
import { cardData } from "./cardData";

export function CardList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
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