export const detailMap = {
    jsEventClick: () => import("./js-event-click"),
    jsEventInput: () => import("./js-event-input"),
    jsEventChange: () => import("./js-event-change"),
    jsEventSubmit: () => import("./js-event-submit"),
    jsEventScroll: () => import("./js-event-scroll"),
    jsEventKeydown: () => import("./js-event-keydown"),
    jsEventLoad: () => import("./js-event-load"),
    jsEventMouseover: () => import("./js-event-mouseover"),
    jsEventMouseout: () => import("./js-event-mouseout"),
} as const;

export type DetailKey = keyof typeof detailMap;