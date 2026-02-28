"use client";

import { useState } from "react";
import { MenuCard } from "./MenuCard";
import { MenuModal } from "./MenuModal";
import { menuData } from "./menuData";

export function MenuList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                {menuData.map((item) => (
                    <MenuCard
                        key={item.key}
                        title={item.title}
                        animationKey={item.key}
                        onClick={() => setActiveKey(item.key)}
                    />
                ))}
            </div>

            <MenuModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}