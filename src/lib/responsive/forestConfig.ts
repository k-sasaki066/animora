import { BREAKPOINTS } from "./breakpoints"

export interface ForestSliderConfig {
    containerHeight: string
    rankTextClass: string
    contentPadding: string
    titleClass: string
    textClass: string
}

export function getForestSliderConfig(
    containerWidth: number
): ForestSliderConfig {

    if (containerWidth < BREAKPOINTS.mobile) {
        return {
        containerHeight: "h-[50svh] min-h-80",
        rankTextClass: "text-[clamp(64px,12vw,120px)]",
        contentPadding: "p-4 space-y-3",
        titleClass: "text-xl",
        textClass: "text-xs",
        }
    }

    if (containerWidth < BREAKPOINTS.tablet) {
        return {
        containerHeight: "h-[50svh]",
        rankTextClass: "text-[clamp(80px,10vw,150px)]",
        contentPadding: "p-6 space-y-4",
        titleClass: "text-2xl",
        textClass: "text-sm",
        }
    }

    return {
        containerHeight: "h-[40svh]",
        rankTextClass: "text-[clamp(100px,8vw,180px)]",
        contentPadding: "p-12 space-y-4",
        titleClass: "text-3xl",
        textClass: "text-base",
    }
}