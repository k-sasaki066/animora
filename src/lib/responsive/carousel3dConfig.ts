import { BREAKPOINTS } from "./breakpoints";

export type getCarousel3dConfig = {
    cardWidth: number;
    cardHeight: number;
    gap: number;
    activeScale: number;
    inactiveScale: number;
    maxVisibleOffset: number;
};

export const getCarousel3dConfig = (
    width: number
): getCarousel3dConfig => {
    const base = width * 0.3;

    if (width < 640) {
        return {
            cardWidth: base,
            cardHeight: base * 1.2,
            gap: base * 0.55,
            activeScale: 1,
            inactiveScale: 0.85,
            maxVisibleOffset: 1,
        };
    }

    if (width < 1024) {
        return {
            cardWidth: base,
            cardHeight: base * 1.2,
            gap: base * 0.6,
            activeScale: 1.05,
            inactiveScale: 0.9,
            maxVisibleOffset: 2,
        };
    }

    return {
        cardWidth: base,
        cardHeight: base * 1.2,
        gap: base * 0.65,
        activeScale: 1.1,
        inactiveScale: 0.9,
        maxVisibleOffset: 2,
    };
};