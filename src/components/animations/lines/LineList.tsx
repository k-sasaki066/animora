"use client";

import { useState } from "react";
import { LineCard } from "./LineCard";
import { LineModal } from "./LineModal";
import { lineData } from "./lineData";
import { useReducedMotion } from "framer-motion";

export default function LineList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const reduceMotion = prefersReducedMotion ?? false;
    const paused = !!activeKey || reduceMotion;

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
                {lineData.map((item) => (
                    <LineCard
                        key={item.key}
                        title={item.title}
                        video={item.video}
                        onClick={() => setActiveKey(item.key)}
                        paused={paused}
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