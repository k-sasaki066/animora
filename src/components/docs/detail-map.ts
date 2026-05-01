import { detailMap as xhrMap } from "./js/xml-http-requests/xml-http-request-details/detail-map";
import { detailMap as eventMap } from "./js/xml-http-requests/xhr-event-details/detail-map";

export const detailMap = {
    ...xhrMap,
    ...eventMap,
} as const;

export type DetailKey = keyof typeof detailMap;