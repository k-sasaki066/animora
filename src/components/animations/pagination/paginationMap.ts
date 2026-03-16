import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type PaginationComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>
    >;

export const paginationMap: Record<string, PaginationComponent> = {
    simplePagination: lazy(() => import("./examples/simple/SimplePagination")),
    circlePagination: lazy(() => import("./examples/circle/CirclePagination")),
    capsulePagination: lazy(() => import("./examples/capsule/CapsulePagination")),
    ellipsisPagination: lazy(() => import("./examples/ellipsis/EllipsisPagination")),
    loadMoreList: lazy(() => import("./examples/load-more/LoadMoreList")),
    dropDownPagination: lazy(() => import("./examples/drop-down/DropDownPagination")),
    infiniteScrollList: lazy(() => import("./examples/infinite-scroll/InfiniteScrollList")),
};