import { BREAKPOINTS } from "./breakpoints";

export type getCarouselConfig = {
    cardWidth: number;
    imageSize: number;
    gap: number;
    visibleRange: number;
    inactiveScale: number;
    inactiveOpacity: number;
};

export const getCarouselConfig = (
    width: number
    ): getCarouselConfig => {
    if (width < BREAKPOINTS.mobile) {
        return {
            cardWidth: 220,
            imageSize: 60,
            gap: 230,
            visibleRange: 1,
            inactiveScale: 0.85,
            inactiveOpacity: 0.2,
        };
    }

    if (width < BREAKPOINTS.tablet) {
        return {
            cardWidth: 280,
            imageSize: 80,
            gap: 290,
            visibleRange: 2,
            inactiveScale: 0.85,
            inactiveOpacity: 0.3,
        };
    }

    return {
        cardWidth: 320,
        imageSize: 90,
        gap: 320,
        visibleRange: 2,
        inactiveScale: 0.8,
        inactiveOpacity: 0.25,
    };
};