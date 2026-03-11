import { useState } from "react";

export function useToggleHover() {
    const [active, setActive] = useState(false);

    return {
        active,
        setActive,
        bind: {
            onClick: () => setActive(v => !v),
            onHoverStart: () => setActive(true),
            onHoverEnd: () => setActive(false),
        }
    };
}