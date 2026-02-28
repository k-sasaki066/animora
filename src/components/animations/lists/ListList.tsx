"use client";

import { useState } from "react";
import { ListCard } from "./ListCard";
import { ListModal } from "./ListModal";
import { listData } from "./listData";

export function ListList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                {listData.map((item) => (
                    <ListCard
                        key={item.key}
                        title={item.title}
                        animationKey={item.key}
                        onClick={() => setActiveKey(item.key)}
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