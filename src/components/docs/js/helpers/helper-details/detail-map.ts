export const detailMap = {
    helperTruncateText: () => import("./helper-truncate-text"),
    helperFormatNumber: () => import("./helper-format-number"),
    helperFormatDate: () => import("./helper-format-date"),
    helperFormatCapitalize: () => import("./helper-format-capitalize"),
    helperIsEmpty: () => import("./helper-is-empty"),
    helperIsOverLimit: () => import("./helper-is-over-limit"),
    helperArrayUnique: () => import("./helper-array-unique"),
    helperArrayFind: () => import("./helper-array-find"),
    helperArrayShuffle: () => import("./helper-array-shuffle"),
    helperArrayRandomItem: () => import("./helper-array-random-item"),
    helperArrayClean: () => import("./helper-array-clean"),
    helperStringSplit: () => import("./helper-string-split"),
    helperArrayFilter: () => import("./helper-array-filter"),
    helperUtilDebounce: () => import("./helper-util-debounce"),
    helperUtilThrottle: () => import("./helper-util-throttle"),
    helperUtilSleep: () => import("./helper-util-sleep"),
    helperDomCopy: () => import("./helper-dom-copy"),
    helperDomScrollToTop: () => import("./helper-dom-scroll-to-top"),
    helperUrlSearchParams: () => import("./helper-url-search-params"),
} as const;

export type DetailKey = keyof typeof detailMap;