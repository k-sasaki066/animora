import { BREAKPOINTS } from "./breakpoints";

export const getCarouselConfig = (width: number) => {
    if (!width) {
        return {
            cardWidth: 0,
            imageSize: 0,
            gap: 0,
            visibleRange: 0,
            inactiveScale: 1,
            inactiveOpacity: 1,
        };
    }

    if (width < BREAKPOINTS.mobile) {
        const cardWidth = Math.min(width * 0.65, 180);

        return {
            cardWidth,
            imageSize: cardWidth * 0.35,
            gap: cardWidth * 1.1,
            visibleRange: 1,
            inactiveScale: 0.85,
            inactiveOpacity: 0.25,
        };
    }

    if (width < BREAKPOINTS.tablet) {
        const cardWidth = Math.min(width * 0.45, 280);

        return {
            cardWidth,
            imageSize: cardWidth * 0.35,
            gap: cardWidth * 1.1,
            visibleRange: 2,
            inactiveScale: 0.85,
            inactiveOpacity: 0.3,
        };
    }

    const cardWidth = 320;

    return {
        cardWidth,
        imageSize: 90,
        gap: cardWidth,
        visibleRange: 2,
        inactiveScale: 0.8,
        inactiveOpacity: 0.25,
    };
};