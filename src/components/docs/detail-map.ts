import { detailMap as domManipulationMap } from "./js/dom-manipulations/dom-manipulation-details/detail-map";
import { detailMap as returnValueMap } from "./js/dom-manipulations/return-value-details/detail-map";
import { detailMap as xhrMap } from "./js/xml-http-requests/xml-http-request-details/detail-map";
import { detailMap as eventMap } from "./js/xml-http-requests/xhr-event-details/detail-map";

export const detailMap = {
    ...domManipulationMap,
    ...returnValueMap,
    ...xhrMap,
    ...eventMap,
} as const;

export type DetailKey = keyof typeof detailMap;