import type { ComponentType } from "react";
import SimplePagination from "./examples/simple/SimplePagination";
import CirclePagination from "./examples/circle/CirclePagination";

export const paginationMap: Record<string, ComponentType> = {
    simplePagination: SimplePagination,
    circlePagination: CirclePagination,
};