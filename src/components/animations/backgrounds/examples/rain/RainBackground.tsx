"use client";

import { Fragment } from "react";
import RainDrop from "./RainDrop";
import RainSplat from "./RainSplat";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function RainBackground() {
    const { ref, height } = useContainerSize<HTMLDivElement>();

    const drops = Array.from({ length: Math.floor(height / 8) }).map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 0.5 + Math.random(),
    }));

    return (
        <div
            ref={ref}
            className="relative w-full aspect-video bg-black overflow-hidden"
        >
            {height > 0 &&
            drops.map((d, i) => (
                <Fragment key={i}>
                    <RainDrop {...d} containerHeight={height} />
                    <RainSplat {...d} containerHeight={height} />
                </Fragment>
            ))}
        </div>
    );
}