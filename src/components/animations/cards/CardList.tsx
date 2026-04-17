"use client";

import { useState } from "react";
import { CardCard } from "./CardCard";
import { CardModal } from "./CardModal";
import { cardData } from "./cardData";
import { useReducedMotion } from "framer-motion";

export default function CardList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const reduceMotion = prefersReducedMotion ?? false;
    const paused = !!activeKey || reduceMotion;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                {cardData.map((item) => (
                    <CardCard
                        key={item.key}
                        title={item.title}
                        video={item.video}
                        onClick={() => setActiveKey(item.key)}
                        paused={paused}
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