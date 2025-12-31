import { BREAKPOINTS } from "./breakpoints";

export type HeroConfig = {
    containerHeight: string
    textPadding: string
    titleClass: string
    descriptionClass: string
    buttonMargin: string
    navClass: string
    buttonSize: string
    imageTransform: {
        active: string
        inactive: string
    }
}

export function getHeroConfig(width: number): HeroConfig {
    if (width < BREAKPOINTS.mobile) {
        return {
            containerHeight: "h-80",
            textPadding: "px-4 py-6",
            titleClass: "text-2xl tracking-wide",
            descriptionClass: "text-sm leading-6 mt-2",
            buttonMargin: "mt-4",
            navClass: "mt-4 gap-4",
            buttonSize: "w-10 h-10",
            imageTransform: {
                active: "translate-y-0",
                inactive: "translate-y-full",
            },
        }
    }

    if (width < BREAKPOINTS.tablet) {
        return {
            containerHeight: "h-[300px]",
            textPadding: "px-6 py-6",
            titleClass: "text-3xl tracking-widest",
            descriptionClass: "text-base leading-6 mt-2",
            buttonMargin: "mt-4",
            navClass: "mt-4 gap-4",
            buttonSize: "w-10 h-10",
            imageTransform: {
                active: "translate-y-0",
                inactive: "translate-y-full",
            },
        }
    }

    return {
        containerHeight: "h-[340px]",
        textPadding: "px-8 py-0",
        titleClass: "text-4xl tracking-widest",
        descriptionClass: "text-base leading-7 mt-3",
        buttonMargin: "mt-8",
        navClass: "mt-6 gap-6",
        buttonSize: "w-12 h-12",
        imageTransform: {
        active: "translate-x-0",
        inactive: "translate-x-full",
        },
    }
}