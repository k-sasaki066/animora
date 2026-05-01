// animation-guide
import { detailMap as cssAnimationMap } from "./animation-guides/css-animations/css-animation-details/detail-map";

// js
import { detailMap as domManipulationMap } from "./js/dom-manipulations/dom-manipulation-details/detail-map";
import { detailMap as displayTextContentUpdateMap } from "./js/display-manipulations/text-content-update-details/detail-map";
import { detailMap as displayHtmlContentUpdateMap } from "./js/display-manipulations/html-content-update-details/detail-map";
import { detailMap as displayStyleUpdateMap } from "./js/display-manipulations/style-update-details/detail-map";
import { detailMap as formManipulationMap } from "./js/form-manipulations/form-manipulation-details/detail-map";
import { detailMap as attributeManipulationMap } from "./js/attribute-manipulations/attribute-manipulation-details/detail-map";
import { detailMap as relMap } from "./js/attribute-manipulations/rel-details/detail-map";
import { detailMap as elementManipulationMap } from "./js/element-manipulations/element-manipulation-details/detail-map";
import { detailMap as returnValueMap } from "./js/dom-manipulations/return-value-details/detail-map";
import { detailMap as jsEventMap } from "./js/events/js-event-details/detail-map";
import { detailMap as jsEventObjectMap } from "./js/events/js-event-object-details/detail-map";
import { detailMap as jsHelperMap } from "./js/helpers/helper-details/detail-map";
import { detailMap as xhrMap } from "./js/xml-http-requests/xml-http-request-details/detail-map";
import { detailMap as xhrEventMap } from "./js/xml-http-requests/xhr-event-details/detail-map";

export const detailMap = {
    ...cssAnimationMap,
    ...domManipulationMap,
    ...displayTextContentUpdateMap,
    ...displayHtmlContentUpdateMap,
    ...displayStyleUpdateMap,
    ...formManipulationMap,
    ...attributeManipulationMap,
    ...relMap,
    ...elementManipulationMap,
    ...returnValueMap,
    ...jsEventMap,
    ...jsEventObjectMap,
    ...jsHelperMap,
    ...xhrMap,
    ...xhrEventMap,
} as const;

export type DetailKey = keyof typeof detailMap;