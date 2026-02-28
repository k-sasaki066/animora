"use client";

import { useState } from "react";
import { SearchBoxCard } from "./SearchBoxCard";
import { SearchBoxModal } from "./SearchBoxModal";
import { searchBoxData } from "./searchBoxData";

export function SearchBoxList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                {searchBoxData.map((item) => (
                    <SearchBoxCard
                        key={item.key}
                        title={item.title}
                        animationKey={item.key}
                        onClick={() => setActiveKey(item.key)}
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