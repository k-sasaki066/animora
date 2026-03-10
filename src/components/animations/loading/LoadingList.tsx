"use client";

import { useState, Suspense } from "react";
import { LoadingCard } from "./LoadingCard";
import { LoadingModal } from "./LoadingModal";
import { loadingData } from "./loadingData";
import { useReducedMotion } from "framer-motion";
import { PageLoader } from "@/components/ui/PageLoader";

export function LoadingList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const reduceMotion = prefersReducedMotion ?? false;
    const paused = !!activeKey || reduceMotion;

    return (
        <>
            <div className="relative flex flex-wrap gap-6 p-4 justify-center">
                <Suspense fallback={<PageLoader />}>
                    {loadingData.map((item) => (
                        <LoadingCard
                            key={item.key}
                            title={item.title}
                            animationKey={item.key}
                            onClick={() => setActiveKey(item.key)}
                            paused={paused}
                        />
                    ))}
                </Suspense>
            </div>

            <LoadingModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}