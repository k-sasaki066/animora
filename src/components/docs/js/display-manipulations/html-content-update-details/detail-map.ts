export const detailMap = {
    htmlContentUpdateInfo: () => import("./html-content-update-info"),
    htmlContentUpdateMessageWithIcon: () => import("./html-content-update-message-with-icon"),
    htmlContentUpdateRichText: () => import("./html-content-update-rich-text"),
    htmlContentUpdateLoading: () => import("./html-content-update-loading"),
    htmlContentUpdateCardGeneration: () => import("./html-content-update-card-generation"),
    htmlContentUpdateModal: () => import("./html-content-update-modal"),
    htmlContentUpdateTagToggle: () => import("./html-content-update-tag-toggle"),
    htmlContentUpdatePagination: () => import("./html-content-update-pagination"),
    htmlContentUpdateFaq: () => import("./html-content-update-faq"),
    htmlContentUpdateChatInterface: () => import("./html-content-update-chat-interface"),
    htmlContentUpdateEmptyState: () => import("./html-content-update-empty-state"),
} as const;

export type DetailKey = keyof typeof detailMap;