"use client";

import { useState } from "react";
import { PartCard } from "./PartCard";
import { PartModal } from "./PartModal";
import { partData } from "./partData";

export function PartList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
                {partData.map((item) => (
                    <PartCard
                        key={item.key}
                        title={item.title}
                        animationKey={item.key}
                        onClick={() => setActiveKey(item.key)}
                    />
                ))}
            </div>

            <PartModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}