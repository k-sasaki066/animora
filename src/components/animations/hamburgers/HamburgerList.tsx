"use client";

import { useState } from "react";
import { HamburgerCard } from "./HamburgerCard";
import { HamburgerModal } from "./HamburgerModal";
import { hamburgerData } from "./hamburgerData";

export function HamburgerList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
                {hamburgerData.map((item) => (
                    <HamburgerCard
                        key={item.key}
                        title={item.title}
                        animationKey={item.key}
                        onClick={() => setActiveKey(item.key)}
                    />
                ))}
            </div>

            <HamburgerModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}