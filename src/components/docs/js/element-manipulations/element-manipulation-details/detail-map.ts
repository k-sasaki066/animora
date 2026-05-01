export const detailMap = {
    elementAppend: () => import("./element-append"),
    elementPrepend: () => import("./element-prepend"),
    elementInnerHtml: () => import("./element-inner-html"),
    elementInsertAdjacentHtml: () => import("./element-insert-adjacent-html"),
    elementRemove: () => import("./element-remove"),
    elementRemoveAllChildren: () => import("./element-remove-all-children"),
    elementRemoveSpecific: () => import("./element-remove-specific"),
    elementReplaceWith: () => import("./element-replace-with"),
    elementCloneNode: () => import("./element-clone-node"),
    elementCheckAndAppend: () => import("./element-check-and-append"),
} as const;

export type DetailKey = keyof typeof detailMap;