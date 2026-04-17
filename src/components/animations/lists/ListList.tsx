"use client";

import { useState } from "react";
import { ListCard } from "./ListCard";
import { ListModal } from "./ListModal";
import { listData } from "./listData";
import { useReducedMotion } from "framer-motion";

export default function ListList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const reduceMotion = prefersReducedMotion ?? false;
    const paused = !!activeKey || reduceMotion;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                {listData.map((item) => (
                    <ListCard
                        key={item.key}
                        title={item.title}
                        video={item.video}
                        onClick={() => setActiveKey(item.key)}
                        paused={paused}
                    />
                ))}
            </div>

            <ListModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}