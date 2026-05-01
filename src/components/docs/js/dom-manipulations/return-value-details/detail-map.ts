export const detailMap = {
    returnHtmlElement: () => import("./return-html-element"),
    returnHtmlCollection: () => import("./return-html-collection"),
    returnNodeList: () => import("./return-node-list"),
    returnLiveCollection: () => import("./return-live-collection"),
    returnStaticCollection: () => import("./return-static-collection"),
    returnComparisonData: () => import("./return-comparison-data"),
} as const;

export type DetailKey = keyof typeof detailMap;