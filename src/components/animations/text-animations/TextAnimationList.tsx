"use client";

import { useState } from "react";
import { TextAnimationCard } from "./TextAnimationCard";
import { TextAnimationModal } from "./TextAnimationModal";
import { textAnimationData } from "./textAnimationData";

export function TextAnimationList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {textAnimationData.map((item) => (
                    <TextAnimationCard
                        key={item.key}
                        title={item.title}
                        previewText={item.previewText}
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