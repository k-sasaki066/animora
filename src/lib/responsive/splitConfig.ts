import { BREAKPOINTS } from "./breakpoints";

export interface SplitConfig {
    containerClass: string,
    mainTextClass: string,
    imageClass: string,
}

export function getSplitConfig(width: number): SplitConfig {

    if (width < BREAKPOINTS.mobile) {
        return {
            containerClass: "w-[240px] h-[160px]",
            mainTextClass: "text-xl",
            imageClass: "w-30",
        }
    }

    if (width < BREAKPOINTS.tablet) {
        return {
            containerClass: "w-[420px] h-[280px]",
            mainTextClass: "text-3xl",
            imageClass: "w-50",
        }
    }

    return {
        containerClass: "w-[480px] h-80",
        mainTextClass: "text-4xl",
        imageClass: "w-70",
    }
}