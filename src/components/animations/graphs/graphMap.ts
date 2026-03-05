import type { ComponentType } from "react";
import SalesBarGraph from "./examples/SalesBarGraph";
import AccessLineGraph from "./examples/access-line/AccessLineGraph";
import GoodsSalesDonutGraph from "./examples/goods-sales/GoodsSalesDonutGraph";

export const graphMap: Record<string, ComponentType> = {
    salesBarGraph: SalesBarGraph,
    accessLineGraph: AccessLineGraph,
    goodsSalesDonutGraph: GoodsSalesDonutGraph,
}