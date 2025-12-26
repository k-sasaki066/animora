"use client";

import { useRef, useLayoutEffect, useState, Fragment } from "react";
import RainDrop from "./RainDrop";
import RainSplat from "./RainSplat";

export default function RainBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    // カードの高さを取得
    useLayoutEffect(() => {
        if (!containerRef.current) return;

        const updateHeight = () => {
            setHeight(containerRef.current!.offsetHeight);
        };

        updateHeight();

        // リサイズ対応
        const observer = new ResizeObserver(updateHeight);
        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    const drops = Array.from({ length: Math.floor(height / 8) }).map((_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 0.5 + Math.random(),
    }));

    return (
        <div
            ref={containerRef}
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