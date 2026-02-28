"use client";

import { useState } from "react";
import { TextAnimationCard } from "./TextAnimationCard";
import { TextAnimationModal } from "./TextAnimationModal";
import { textAnimationData } from "./textAnimationData";

export function TextAnimationList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
                {textAnimationData.map((item) => (
                    <TextAnimationCard
                        key={item.key}
                        title={item.title}
                        animationKey={item.key}
                        onClick={() => setActiveKey(item.key)}
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