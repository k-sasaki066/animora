"use client";

import { useState } from "react";
import { TextAnimationCard } from "./TextAnimationCard";
import { TextAnimationModal } from "./TextAnimationModal";
import { textAnimationData } from "./textAnimationData";
import { useReducedMotion } from "framer-motion";

export default function TextAnimationList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const reduceMotion = prefersReducedMotion ?? false;
    const paused = !!activeKey || reduceMotion;

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
                {textAnimationData.map((item) => (
                    <TextAnimationCard
                        key={item.key}
                        title={item.title}
                        video={item.video}
                        onClick={() => setActiveKey(item.key)}
                        paused={paused}
                    />
                ))}
            </div>

            <TextAnimationModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}