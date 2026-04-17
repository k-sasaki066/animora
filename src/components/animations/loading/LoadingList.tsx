"use client";

import { useState } from "react";
import { LoadingCard } from "./LoadingCard";
import { LoadingModal } from "./LoadingModal";
import { loadingData } from "./loadingData";
import { useReducedMotion } from "framer-motion";

export default function LoadingList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const reduceMotion = prefersReducedMotion ?? false;
    const paused = !!activeKey || reduceMotion;

    return (
        <>
            <div className="relative flex flex-wrap gap-6 p-4 justify-center">
                {loadingData.map((item) => (
                    <LoadingCard
                        key={item.key}
                        title={item.title}
                        video={item.video}
                        onClick={() => setActiveKey(item.key)}
                        paused={paused}
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