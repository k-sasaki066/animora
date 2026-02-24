"use client";

import { useState } from "react";
import { ListCard } from "./ListCard";
import { ListModal } from "./ListModal";
import { listData } from "./listData";

export function ListList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
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