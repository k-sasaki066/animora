"use client";

import { useState } from "react";
import { BackgroundCard } from "./BackgroundCard";
import { BackgroundModal } from "./BackgroundModal";
import { backgroundData } from "./backgroundData";
import { useReducedMotion } from "framer-motion";

export default function BackgroundList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const reduceMotion = prefersReducedMotion ?? false;
    const paused = !!activeKey || reduceMotion;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {backgroundData.map(item => (
                    <BackgroundCard
                        key={item.key}
                        title={item.title}
                        video={item.video}
                        onClick={() => setActiveKey(item.key)}
                        paused={paused}
                    />
                ))}
            </div>

            <BackgroundModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}