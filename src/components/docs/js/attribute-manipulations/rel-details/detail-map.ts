export const detailMap = {
    relNoopener: () => import("./rel-noopener"),
    relNoreferrer: () => import("./rel-noreferrer"),
    relNofollow: () => import("./rel-nofollow"),
    relPrev: () => import("./rel-prev"),
    relNext: () => import("./rel-next"),
    relStylesheet: () => import("./rel-stylesheet"),
} as const;

export type DetailKey = keyof typeof detailMap;