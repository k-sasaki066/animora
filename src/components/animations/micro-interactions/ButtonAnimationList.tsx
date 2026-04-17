"use client";

import { useState } from "react";
import { ButtonAnimationCard } from "./ButtonAnimationCard";
import { ButtonAnimationModal } from "./ButtonAnimationModal";
import { buttonAnimationData } from "./buttonAnimationData";
import { useReducedMotion } from "framer-motion";

export default function ButtonAnimationList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const reduceMotion = prefersReducedMotion ?? false;
    const paused = !!activeKey || reduceMotion;

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
                {buttonAnimationData.map((item) => (
                    <ButtonAnimationCard
                        key={item.key}
                        title={item.title}
                        video={item.video}
                        onClick={() => setActiveKey(item.key)}
                        paused={paused}
                    />
                ))}
            </div>

            <ButtonAnimationModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}