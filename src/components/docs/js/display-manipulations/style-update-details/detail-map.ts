export const detailMap = {
    styleUpdateWarningColor: () => import("./style-update-warning-color"),
    styleUpdateChangeBackgroundColor: () => import("./style-update-change-background-color"),
    styleUpdateOutOfStock: () => import("./style-update-out-of-stock"),
    styleUpdateStickyHeader: () => import("./style-update-sticky-header"),
    styleUpdateUnreadNotificationBadge: () => import("./style-update-unread-notification-badge"),
    styleUpdateImageLoadFadeIn: () => import("./style-update-image-load-fade-in"),
    styleUpdateInputFocusHighlight: () => import("./style-update-input-focus-highlight"),
    styleUpdateDragVisualFeedback: () => import("./style-update-drag-visual-feedback"),
    styleUpdateTaskCompletedStrikethrough: () => import("./style-update-task-completed-strikethrough"),
} as const;

export type DetailKey = keyof typeof detailMap;