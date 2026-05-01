export const detailMap = {
    domGetElementById: () => import("./dom-get-element-by-id"),
    domGetElementsByClassName: () => import("./dom-get-elements-by-class-name"),
    domGetElementsByTagName: () => import("./dom-get-elements-by-tag-name"),
    domQuerySelector: () => import("./dom-query-selector"),
    domQuerySelectorAll: () => import("./dom-query-selector-all"),
} as const;

export type DetailKey = keyof typeof detailMap;