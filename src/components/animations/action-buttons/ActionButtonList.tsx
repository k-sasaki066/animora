"use client";

import { useState } from "react";
import { ActionButtonCard } from "./ActionButtonCard";
import { ActionButtonModal } from "./ActionButtonModal";
import { actionButtonData } from "./actionButtonData";
import { useReducedMotion } from "framer-motion";

export function ActionButtonList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const reduceMotion = prefersReducedMotion ?? false;
    const paused = !!activeKey || reduceMotion;

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
                {actionButtonData.map((item) => (
                    <ActionButtonCard
                        key={item.key}
                        title={item.title}
                        video={item.video}
                        onClick={() => setActiveKey(item.key)}
                        paused={paused}
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