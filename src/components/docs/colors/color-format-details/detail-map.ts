export const detailMap = {
    colorHex: () => import("./color-hex"),
    colorRgb: () => import("./color-rgb"),
    colorHsl: () => import("./color-hsl"),
} as const;

export type DetailKey = keyof typeof detailMap;