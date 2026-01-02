"use client";

import { useState } from "react";
import { LoadingCard } from "./LoadingCard";
import { LoadingModal } from "./LoadingModal";
import { loadingData } from "./loadingData";

export function LoadingList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
                {loadingData.map((item) => (
                    <LoadingCard
                        key={item.key}
                        title={item.title}
                        animationKey={item.key}
                        onClick={() => setActiveKey(item.key)}
                    />
                ))}
            </div>

            <LoadingModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}