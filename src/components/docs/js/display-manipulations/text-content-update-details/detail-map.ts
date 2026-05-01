export const detailMap = {
    textContentUpdateProductCount: () => import("./text-content-update-product-count"),
    textContentUpdateLoginStatus: () => import("./text-content-update-login-status"),
    textContentUpdateChangeButtonText: () => import("./text-content-update-change-button-text"),
    textContentUpdateSendingButton: () => import("./text-content-update-sending-button"),
    textContentUpdateErrorMessage: () => import("./text-content-update-error-message"),
    textContentUpdateApiFetch: () => import("./text-content-update-api-fetch"),
    textContentUpdateMenuToggle: () => import("./text-content-update-menu-toggle"),
    textContentUpdateAddToCart: () => import("./text-content-update-add-to-cart"),
    textContentUpdateLanguageSwitch: () => import("./text-content-update-language-switch"),
} as const;

export type DetailKey = keyof typeof detailMap;