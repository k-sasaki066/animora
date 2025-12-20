import { BREAKPOINTS } from "./breakpoints";

export interface AnimeConfig {
    containerClass: string,
    mainTextClass: string,
    imageClass: string,
}

export function getAnimeConfig(width: number): AnimeConfig {

    if (width < BREAKPOINTS.mobile) {
        return {
            containerClass: "gap-4",
            mainTextClass: "text-3xl",
            imageClass: "w-30",
        }
    }

    if (width < BREAKPOINTS.tablet) {
        return {
            containerClass: "gap-16",
            mainTextClass: "text-4xl",
            imageClass: "w-50",
        }
    }

    return {
        containerClass: "gap-20",
        mainTextClass: "text-5xl",
        imageClass: "w-70",
    }
}