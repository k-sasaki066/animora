"use client";

import { useState } from "react";
import { ActionButtonCard } from "./ActionButtonCard";
import { ActionButtonModal } from "./ActionButtonModal";
import { actionButtonData } from "./actionButtonData";

export function ActionButtonList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
                {actionButtonData.map((item) => (
                    <ActionButtonCard
                        key={item.key}
                        title={item.title}
                        animationKey={item.key}
                        onClick={() => setActiveKey(item.key)}
                    />
                ))}
            </div>

            <ActionButtonModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}