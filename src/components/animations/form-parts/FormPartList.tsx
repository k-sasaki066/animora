"use client";

import { useState } from "react";
import { FormPartCard } from "./FormPartCard";
import { FormPartModal } from "./FormPartModal";
import { formPartData } from "./formPartData";
import { useReducedMotion } from "framer-motion";

export default function FormPartList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const reduceMotion = prefersReducedMotion ?? false;
    const paused = !!activeKey || reduceMotion;

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
                {formPartData.map((item) => (
                    <FormPartCard
                        key={item.key}
                        title={item.title}
                        video={item.video}
                        onClick={() => setActiveKey(item.key)}
                        paused={paused}
                    />
                ))}
            </div>

            <FormPartModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}