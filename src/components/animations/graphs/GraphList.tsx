"use client";

import { useState } from "react";
import { GraphCard } from "./GraphCard";
import { GraphModal } from "./GraphModal";
import { graphData } from "./graphData";

export function GraphList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                {graphData.map((item) => (
                    <GraphCard
                        key={item.key}
                        title={item.title}
                        image={item.image}
                        onClick={() => setActiveKey(item.key)}
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