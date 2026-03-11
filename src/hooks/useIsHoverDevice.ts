"use client";

import { useEffect, useState } from "react";

export function useIsHoverDevice() {
    const [isHoverDevice, setIsHoverDevice] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(hover: hover)");

        const update = () => setIsHoverDevice(media.matches);

        update();
        media.addEventListener("change", update);

        return () => media.removeEventListener("change", update);
    }, []);

    return isHoverDevice;
}