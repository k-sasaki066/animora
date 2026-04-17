"use client";

import { useState } from "react";
import { PartCard } from "./PartCard";
import { PartModal } from "./PartModal";
import { partData } from "./partData";
import { useReducedMotion } from "framer-motion";

export default function PartList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const reduceMotion = prefersReducedMotion ?? false;
    const paused = !!activeKey || reduceMotion;

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
                {partData.map((item) => (
                    <PartCard
                        key={item.key}
                        title={item.title}
                        video={item.video}
                        onClick={() => setActiveKey(item.key)}
                        paused={paused}
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