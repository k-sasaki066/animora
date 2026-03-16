"use client";

import { useState } from "react";
import { GraphCard } from "./GraphCard";
import { GraphModal } from "./GraphModal";
import { graphData } from "./graphData";
import { useReducedMotion } from "framer-motion";

export function GraphList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const reduceMotion = prefersReducedMotion ?? false;
    const paused = !!activeKey || reduceMotion;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                {graphData.map((item) => (
                    <GraphCard
                        key={item.key}
                        title={item.title}
                        video={item.video}
                        onClick={() => setActiveKey(item.key)}
                        paused={paused}
                    />
                ))}
            </div>

            <GraphModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}