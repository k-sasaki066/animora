"use client";

import { useState } from "react";
import { HamburgerCard } from "./HamburgerCard";
import { HamburgerModal } from "./HamburgerModal";
import { hamburgerData } from "./hamburgerData";
import { useReducedMotion } from "framer-motion";

export default function HamburgerList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const reduceMotion = prefersReducedMotion ?? false;
    const paused = !!activeKey || reduceMotion;

    return (
        <>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
                {hamburgerData.map((item) => (
                    <HamburgerCard
                        key={item.key}
                        title={item.title}
                        video={item.video}
                        onClick={() => setActiveKey(item.key)}
                        paused={paused}
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