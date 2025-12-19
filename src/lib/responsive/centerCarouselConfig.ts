import { BREAKPOINTS } from "./breakpoints";

export const getCarouselConfig = (width: number) => {
    if (width < BREAKPOINTS.mobile) {
        return {
            cardWidth: 90,
            cardHeight: 140,
            visibleRange: 2,
            centerScale: 1.1,
        };
    }

    if (width < BREAKPOINTS.tablet) {
        return {
            cardWidth: 120,
            cardHeight: 180,
            visibleRange: 2,
            centerScale: 1.15,
        };
    }

    return {
        cardWidth: 160,
        cardHeight: 220,
        visibleRange: 2,
        centerScale: 1.2,
    };
};