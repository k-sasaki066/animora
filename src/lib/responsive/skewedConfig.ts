import { BREAKPOINTS } from "./breakpoints";

export interface SkewedSliderConfig {
    height: number
    magicVH: number
    titleClass: string
    descriptionClass: string
}

export function getSkewedSliderConfig(containerWidth: number): SkewedSliderConfig {
    const magicVH = clamp(containerWidth * 0.0238, 6.5, 11)
    const width = clamp(containerWidth, 260, 460)
    const height = Math.round(width * 0.67)

    if (containerWidth < BREAKPOINTS.mobile) {
        return {
            height,
            magicVH,
            titleClass: "text-sm tracking-widest",
            descriptionClass: "text-xs",
        }
    }

    if (containerWidth < BREAKPOINTS.tablet) {
        return {
            height,
            magicVH,
            titleClass: "text-lg tracking-widest",
            descriptionClass: "text-sm",
        }
    }

    return {
        height,
        magicVH,
        titleClass: "text-2xl tracking-widest",
        descriptionClass: "text-base",
    }
}

/* ---------------- utils ---------------- */

function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max)
}