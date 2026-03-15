import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type SearchBoxComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>
    >;

export const searchBoxMap: Record<string, SearchBoxComponent> = {
    elasticFocusSearch: lazy(() => import("./examples/ElasticFocusSearch")),
    expandSearch: lazy(() => import("./examples/ExpandSearch")),
    arcMotionSearch: lazy(() => import("./examples/arc-motion/ArcMotionSearch")),
    categorySearch: lazy(() => import("./examples/category/CategorySearch")),
    filterSearch: lazy(() => import("./examples/filter/FilterSearch")),
};