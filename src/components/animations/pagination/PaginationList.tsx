"use client";

import { useState } from "react";
import { PaginationCard } from "./PaginationCard";
import { PaginationModal } from "./PaginationModal";
import { paginationData } from "./paginationData";

export function PaginationList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                {paginationData.map((item) => (
                    <PaginationCard
                        key={item.key}
                        title={item.title}
                        animationKey={item.key}
                        onClick={() => setActiveKey(item.key)}
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