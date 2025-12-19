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
        if (width < BREAKPOINTS.mobile) {
            return {
                cardWidth: 240,
                cardHeight: 140,
                gap: 140,
                activeScale: 1,
                inactiveScale: 0.85,
                maxVisibleOffset: 1,
            };
        }

        if (width < BREAKPOINTS.tablet) {
            return {
                cardWidth: 300,
                cardHeight: 180,
                gap: 160,
                activeScale: 1.05,
                inactiveScale: 0.9,
                maxVisibleOffset: 2,
            };
        }

        return {
            cardWidth: 360,
            cardHeight: 220,
            gap: 180,
            activeScale: 1.1,
            inactiveScale: 0.9,
            maxVisibleOffset: 2,
        };

};