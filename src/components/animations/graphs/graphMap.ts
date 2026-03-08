import type { ComponentType } from "react";
import SalesBarGraph from "./examples/SalesBarGraph";
import AccessLineGraph from "./examples/access-line/AccessLineGraph";
import GoodsSalesDonutGraph from "./examples/goods-sales/GoodsSalesDonutGraph";
import StudyTimeGraph from "./examples/study-time/StudyTimeGraph";
import HeatmapGraph from "./examples/heat-map/HeatmapGraph";
import EvaluationRadarGraph from "./examples/radar/EvaluationRadarGraph";
import IceCreamScatterGraph from "./examples/scatter/IceCreamScatterGraph";

export const graphMap: Record<string, ComponentType> = {
    salesBarGraph: SalesBarGraph,
    accessLineGraph: AccessLineGraph,
    goodsSalesDonutGraph: GoodsSalesDonutGraph,
    studyTimeGraph: StudyTimeGraph,
    heatmapGraph: HeatmapGraph,
    evaluationRadarGraph: EvaluationRadarGraph,
    iceCreamScatterGraph: IceCreamScatterGraph,
}