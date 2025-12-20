import { BREAKPOINTS } from "./breakpoints";

export interface SkewedSliderConfig {
    width: number
    height: number
    magicVH: number
    titleClass: string
    descriptionClass: string
}

export function getSkewedSliderConfig(width: number): SkewedSliderConfig {

    if (width < BREAKPOINTS.mobile) {
        return {
            width: 280,
            height: 185,
            magicVH: 6.4,
            titleClass: "text-sm tracking-widest",
            descriptionClass: "text-xs",
        }
    }

    if (width < BREAKPOINTS.tablet) {
        return {
            width: 380,
            height: 250,
            magicVH: 8.9,
            titleClass: "text-lg tracking-widest",
            descriptionClass: "text-sm",
        }
    }

    return {
        width: 448,
        height: 300,
        magicVH: 10.7,
        titleClass: "text-2xl tracking-widest",
        descriptionClass: "text-base",
    }
}