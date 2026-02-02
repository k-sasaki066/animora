"use client";

import { useState } from "react";
import { MenuCard } from "./MenuCard";
import { MenuModal } from "./MenuModal";
import { menuData } from "./menuData";

export function MenuList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
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