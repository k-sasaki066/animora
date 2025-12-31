import { BREAKPOINTS } from "./breakpoints";

export const getCarouselConfig = (width: number) => {
    const aspect = 3 / 4;
    const baseWidth = width * 0.28;

    if (width < BREAKPOINTS.mobile) {
        return {
            cardWidth: baseWidth,
            cardHeight: baseWidth / aspect,
            visibleRange: 1,
            centerScale: 1.1,
        };
    }

    if (width < BREAKPOINTS.tablet) {
        return {
            cardWidth: baseWidth,
            cardHeight: baseWidth / aspect,
            visibleRange: 2,
            centerScale: 1.15,
        };
    }

    return {
        cardWidth: baseWidth,
        cardHeight: baseWidth / aspect,
        visibleRange: 2,
        centerScale: 1.2,
    };
};