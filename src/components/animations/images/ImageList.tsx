"use client";

import { useState } from "react";
import { ImageCard } from "./ImageCard";
import { ImageModal } from "./ImageModal";
import { imageData } from "./imageData";
import { useReducedMotion } from "framer-motion";

export function ImageList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const reduceMotion = prefersReducedMotion ?? false;
    const paused = !!activeKey || reduceMotion;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {imageData.map((item) => (
                    <ImageCard
                        key={item.key}
                        title={item.title}
                        video={item.video}
                        onClick={() => setActiveKey(item.key)}
                        paused={paused}
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