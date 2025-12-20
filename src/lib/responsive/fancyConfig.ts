import { BREAKPOINTS } from "./breakpoints";

export interface FancyConfig {
    indicatorClass: string,
    cardPaddingClass: string,
    mainTextClass: string,
    buttonTextClass: string,
}

export function getFancyConfig(width: number): FancyConfig {

    if (width < BREAKPOINTS.mobile) {
        return {
            indicatorClass: "bottom-4",
            cardPaddingClass: "p-4",
            mainTextClass: "text-xl mb-2",
            buttonTextClass: "text-xs",
        }
    }

    if (width < BREAKPOINTS.tablet) {
        return {
            indicatorClass: "bottom-6",
            cardPaddingClass: "p-6",
            mainTextClass: "text-2xl mb-4",
            buttonTextClass: "text-sm",
        }
    }

    return {
        indicatorClass: "bottom-8",
        cardPaddingClass: "p-10",
        mainTextClass: "text-3xl mb-6",
        buttonTextClass: "text-base",
    }
}