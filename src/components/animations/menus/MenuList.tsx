"use client";

import { useState } from "react";
import { MenuCard } from "./MenuCard";
import { MenuModal } from "./MenuModal";
import { menuData } from "./menuData";
import { useReducedMotion } from "framer-motion";

export default function MenuList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const reduceMotion = prefersReducedMotion ?? false;
    const paused = !!activeKey || reduceMotion;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                {menuData.map((item) => (
                    <MenuCard
                        key={item.key}
                        title={item.title}
                        video={item.video}
                        onClick={() => setActiveKey(item.key)}
                        paused={paused}
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