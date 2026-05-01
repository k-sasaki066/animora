export const detailMap = {
    attributeGet: () => import("./attribute-get"),
    attributeUpdate: () => import("./attribute-update"),
    attributeRemove: () => import("./attribute-remove"),
    attributeDisableInput: () => import("./attribute-disable-input"),
    attributePlaceholderUpdate: () => import("./attribute-placeholder-update"),
    attributeCheckStateChange: () => import("./attribute-check-state-change"),
    attributeImgAltUpdate: () => import("./attribute-img-alt-update"),
    attributeLinkHrefUpdate: () => import("./attribute-link-href-update"),
    attributeGetData: () => import("./attribute-get-data"),
    attributeToggleHidden: () => import("./attribute-toggle-hidden"),
} as const;

export type DetailKey = keyof typeof detailMap;