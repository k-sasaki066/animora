export const detailMap = {
    cssAnimationKeyframesName: () => import("./css-animation-keyframes-name"),
    cssAnimationDuration: () => import("./css-animation-duration"),
    cssAnimationDelay: () => import("./css-animation-delay"),
    cssAnimationTimingFunction: () => import("./css-animation-timing-function"),
    cssAnimationIterationCount: () => import("./css-animation-iteration-count"),
    cssAnimationDirection: () => import("./css-animation-direction"),
    cssAnimationFillMode: () => import("./css-animation-fill-mode"),
    cssAnimationPlayState: () => import("./css-animation-play-state"),
    cssAnimationShorthand: () => import("./css-animation-shorthand"),
} as const;

export type DetailKey = keyof typeof detailMap;