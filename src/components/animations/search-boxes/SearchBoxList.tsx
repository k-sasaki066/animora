"use client";

import { useState } from "react";
import { SearchBoxCard } from "./SearchBoxCard";
import { SearchBoxModal } from "./SearchBoxModal";
import { searchBoxData } from "./searchBoxData";
import { useReducedMotion } from "framer-motion";

export default function SearchBoxList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const reduceMotion = prefersReducedMotion ?? false;
    const paused = !!activeKey || reduceMotion;

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                {searchBoxData.map((item) => (
                    <SearchBoxCard
                        key={item.key}
                        title={item.title}
                        video={item.video}
                        onClick={() => setActiveKey(item.key)}
                        paused={paused}
                    />
                ))}
            </div>

            <SearchBoxModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}