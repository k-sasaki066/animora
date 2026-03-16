import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type GraphComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>
    >;

export const graphMap: Record<string, GraphComponent> = {
    salesBarGraph: lazy(() => import("./examples/SalesBarGraph")),
    accessLineGraph: lazy(() => import("./examples/access-line/AccessLineGraph")),
    goodsSalesDonutGraph: lazy(() => import("./examples/goods-sales/GoodsSalesDonutGraph")),
    studyTimeGraph: lazy(() => import("./examples/study-time/StudyTimeGraph")),
    heatmapGraph: lazy(() => import("./examples/heat-map/HeatmapGraph")),
    evaluationRadarGraph: lazy(() => import("./examples/radar/EvaluationRadarGraph")),
    iceCreamScatterGraph: lazy(() => import("./examples/scatter/IceCreamScatterGraph")),
}