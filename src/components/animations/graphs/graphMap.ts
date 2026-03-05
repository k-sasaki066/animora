import type { ComponentType } from "react";
import SalesBarGraph from "./examples/SalesBarGraph";
import AccessLineGraph from "./examples/access-line/AccessLineGraph";

export const graphMap: Record<string, ComponentType> = {
    salesBarGraph: SalesBarGraph,
    accessLineGraph: AccessLineGraph,
}