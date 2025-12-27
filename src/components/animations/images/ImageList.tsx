"use client";

import { useState } from "react";
import { ImageCard } from "./ImageCard";
import { ImageModal } from "./ImageModal";
import { imageData } from "./imageData";

export function ImageList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {imageData.map((item) => (
                    <ImageCard
                        key={item.key}
                        title={item.title}
                        animationKey={item.key}
                        onClick={() => setActiveKey(item.key)}
                    />
                ))}
            </div>

            <ImageModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}