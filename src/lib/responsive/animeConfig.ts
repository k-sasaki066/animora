import { BREAKPOINTS } from "./breakpoints";

export interface AnimeConfig {
    containerClass: string,
    mainTextClass: string,
    imageWidth: number,
    height: number,
    controlPaddingClass: string,
}

export function getAnimeConfig(width: number): AnimeConfig {
    const height = Math.round(width * 0.5);
    const imageWidth = width ? Math.min(Math.max(width * 0.3, 80), 300) : 150;

    if (width < BREAKPOINTS.mobile) {
        return {
            containerClass: "gap-4",
            mainTextClass: "text-2xl",
            imageWidth,
            height,
            controlPaddingClass:"px-2 py-1"
        }
    }

    if (width < BREAKPOINTS.tablet) {
        return {
            containerClass: "gap-16",
            mainTextClass: "text-4xl",
            imageWidth,
            height,
            controlPaddingClass:"px-4 py-2"
        }
    }

    return {
        containerClass: "gap-20",
        mainTextClass: "text-5xl",
        imageWidth,
        height,
        controlPaddingClass:"px-6 py-3"
    }
}