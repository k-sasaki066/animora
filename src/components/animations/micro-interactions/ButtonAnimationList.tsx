"use client";

import { useState } from "react";
import { ButtonAnimationCard } from "./ButtonAnimationCard";
import { ButtonAnimationModal } from "./ButtonAnimationModal";
import { buttonAnimationData } from "./buttonAnimationData";

export function ButtonAnimationList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
                {buttonAnimationData.map((item) => (
                    <ButtonAnimationCard
                        key={item.key}
                        title={item.title}
                        animationKey={item.key}
                        onClick={() => setActiveKey(item.key)}
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