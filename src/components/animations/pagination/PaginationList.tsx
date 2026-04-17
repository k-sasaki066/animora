"use client";

import { useState } from "react";
import { PaginationCard } from "./PaginationCard";
import { PaginationModal } from "./PaginationModal";
import { paginationData } from "./paginationData";
import { useReducedMotion } from "framer-motion";

export default function PaginationList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const reduceMotion = prefersReducedMotion ?? false;
    const paused = !!activeKey || reduceMotion;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                {paginationData.map((item) => (
                    <PaginationCard
                        key={item.key}
                        title={item.title}
                        video={item.video}
                        onClick={() => setActiveKey(item.key)}
                        paused={paused}
                    />
                ))}
            </div>

            <PaginationModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}