export const detailMap = {
    keyframesFromTo: () => import("./keyframes-from-to"),
    keyframesPercent: () => import("./keyframes-percent"),
} as const;

export type DetailKey = keyof typeof detailMap;