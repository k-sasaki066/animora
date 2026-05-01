export const detailMap = {
    jsEventObjectTarget: () => import("./js-event-object-target"),
    jsEventObjectTargetValue: () => import("./js-event-object-target-value"),
    jsEventObjectPreventDefault: () => import("./js-event-object-prevent-default"),
    jsEventObjectKey: () => import("./js-event-object-key"),
    jsEventObjectType: () => import("./js-event-object-type"),
} as const;

export type DetailKey = keyof typeof detailMap;