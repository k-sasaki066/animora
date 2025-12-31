"use client"

import { useState, useEffect } from "react";
import { SkewedPage } from "./SkewedPage";
import { skewedPages } from "./data";
import { useContainerSize } from "@/hooks/useContainerSize";
import { getSkewedSliderConfig } from "@/lib/responsive/skewedConfig";
import { SwipeHint } from "@/components/ui/SwipeHint";

const SWIPE_KEY = "skewed_slideshow_swiped";

export function SkewedScrollSlider() {
    const [page, setPage] = useState(0);
    const [locked, setLocked] = useState(false);

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const config = getSkewedSliderConfig(width);

    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        // 初回のみ表示
        const hasSwiped = sessionStorage.getItem(SWIPE_KEY);
        if (!hasSwiped) setShowHint(true);
    }, []);

    const handleFirstSwipe = () => {
        if (!showHint) return;

        sessionStorage.setItem(SWIPE_KEY, "true");
        setShowHint(false);
    };

    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
            if (locked) return;

            setLocked(true);
            setPage((prev) => {
                if (e.deltaY > 0) return Math.min(prev + 1, skewedPages.length - 1);
                return Math.max(prev - 1, 0);
            });

            setTimeout(() => setLocked(false), 1000)
        }

        window.addEventListener("wheel", onWheel)
        return () => window.removeEventListener("wheel", onWheel)
    }, [locked]);

    return (
        <div
            ref={ref}
            className="relative mx-auto overflow-hidden w-full max-w-115"
            style={{ height: config.height }}
            onWheel={handleFirstSwipe}
            onTouchStart={handleFirstSwipe}
            >
            {skewedPages.map((data, i) => (
                <SkewedPage
                    key={i}
                    data={data}
                    isActive={i === page}
                    containerWidth={width}
                />
            ))}
            {/* スワイプヒント */}
            <SwipeHint visible={showHint}/>
        </div>
    )
}