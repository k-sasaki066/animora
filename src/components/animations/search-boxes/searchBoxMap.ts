import type { ComponentType } from "react";
import ElasticFocusSearch from "./examples/ElasticFocusSearch";
import ExpandSearch from "./examples/ExpandSearch";
import ArcMotionSearch from "./examples/arc-motion/ArcMotionSearch";
import CategorySearch from "./examples/category/CategorySearch";

export const searchBoxMap: Record<string, ComponentType> = {
    elasticFocusSearch: ElasticFocusSearch,
    expandSearch: ExpandSearch,
    arcMotionSearch: ArcMotionSearch,
    categorySearch: CategorySearch,
};