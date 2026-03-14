import { useState } from "react";

export function useToggleHover() {
    const [active, setActive] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return {
        active,
        setActive,
        activeIndex,
        setActiveIndex,
        bind: {
            onPointerDown: () => setActive(v => !v),
            onHoverStart: () => setActive(true),
            onHoverEnd: () => setActive(false),
        },
        bindIndex: (i: number) => ({
            onPointerDown: () => setActiveIndex(prev => (prev === i ? null : i)),
            onHoverStart: () => setActiveIndex(i),
            onHoverEnd: () => setActiveIndex(null),
        })
    };
}