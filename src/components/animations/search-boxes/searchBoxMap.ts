import type { ComponentType } from "react";
import ElasticFocusSearch from "./examples/ElasticFocusSearch";
import ExpandSearch from "./examples/ExpandSearch";

export const searchBoxMap: Record<string, ComponentType> = {
    elasticFocusSearch: ElasticFocusSearch,
    expandSearch: ExpandSearch,
};