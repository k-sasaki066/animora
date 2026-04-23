export interface GraphItem {
    key: string;
    title: string;
    video: string;
}

export const graphData: GraphItem[] = [
    {
        key: "salesBarGraph",
        title: "Sales Bar Graph",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/graphs/sales-bar-graph.mp4`,
    },
    {
        key: "accessLineGraph",
        title: "Access Line Graph",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/graphs/access-line-graph.mp4`,
    },
    {
        key: "goodsSalesDonutGraph",
        title: "Goods Sales Donut Graph",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/graphs/goods-sales-donut-graph.mp4`,
    },
    {
        key: "studyTimeGraph",
        title: "Study Time Graph",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/graphs/study-time-graph.mp4`,
    },
    {
        key: "heatmapGraph",
        title: "Heatmap Graph",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/graphs/heatmap-graph.mp4`,
    },
    {
        key: "evaluationRadarGraph",
        title: "Evaluation Radar Graph",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/graphs/evaluation-radar-graph.mp4`,
    },
    {
        key: "iceCreamScatterGraph",
        title: "IceCream Scatter Graph",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/graphs/scatter-graph.mp4`,
    },
];