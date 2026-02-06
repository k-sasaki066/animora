"use client";

import { useState } from "react";
import { FormPartCard } from "./FormPartCard";
import { FormPartModal } from "./FormPartModal";
import { formPartData } from "./formPartData";

export function FormPartList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
                {formPartData.map((item) => (
                    <FormPartCard
                        key={item.key}
                        title={item.title}
                        animationKey={item.key}
                        onClick={() => setActiveKey(item.key)}
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