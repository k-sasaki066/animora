import type { ComponentType } from "react";
import ElasticFocusSearch from "./examples/ElasticFocusSearch";
import ExpandSearch from "./examples/ExpandSearch";
import ArcMotionSearch from "./examples/arc-motion/ArcMotionSearch";

export const searchBoxMap: Record<string, ComponentType> = {
    elasticFocusSearch: ElasticFocusSearch,
    expandSearch: ExpandSearch,
    arcMotionSearch: ArcMotionSearch,
};