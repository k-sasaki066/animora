import { useMemo } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

interface ResponsiveFontSizeOptions {
    ratio?: number;    // 親幅に対する割合
    min?: number;      // px
    max?: number;      // px
}

export function useResponsiveFontSize<T extends Element>({
    ratio = 0.06,
    min = 16,
    max = 56,
}: ResponsiveFontSizeOptions = {}) {
    const { ref, width } = useContainerSize<T>();

    const fontSize = useMemo(() => {
        if (!width) return min;
        const preferred = width * ratio;
        return Math.min(Math.max(preferred, min), max);
    }, [width, ratio, min, max]);

    return { ref, width, fontSize };
}