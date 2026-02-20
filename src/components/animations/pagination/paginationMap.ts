import type { ComponentType } from "react";
import SimplePagination from "./examples/simple/SimplePagination";
import CirclePagination from "./examples/circle/CirclePagination";
import CapsulePagination from "./examples/capsule/CapsulePagination";
import EllipsisPagination from "./examples/ellipsis/EllipsisPagination";
import LoadMoreList from "./examples/load-more/LoadMoreList";
import DropDownPagination from "./examples/drop-down/DropDownPagination";

export const paginationMap: Record<string, ComponentType> = {
    simplePagination: SimplePagination,
    circlePagination: CirclePagination,
    capsulePagination: CapsulePagination,
    ellipsisPagination: EllipsisPagination,
    loadMoreList: LoadMoreList,
    dropDownPagination: DropDownPagination,
};