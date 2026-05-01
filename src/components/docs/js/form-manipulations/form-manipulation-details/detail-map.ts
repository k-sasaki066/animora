export const detailMap = {
    formGetInputValue: () => import("./form-get-input-value"),
    formSetInitialValue: () => import("./form-set-initial-value"),
    formClearInputValue: () => import("./form-clear-input-value"),
    formEventPreventDefault: () => import("./form-event-prevent-default"),
    formRequiredValidation: () => import("./form-required-validation"),
    formRealTimeInputMonitor: () => import("./form-real-time-input-monitor"),
    formCheckboxState: () => import("./form-checkbox-state"),
} as const;

export type DetailKey = keyof typeof detailMap;