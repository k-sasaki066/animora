export interface GraphItem {
    key: string;
    title: string;
    previewText: string;
    image: string;
}

export const graphData: GraphItem[] = [
    {
        key: "salesBarGraph",
        title: "Sales Bar Graph",
        previewText: "Sales Bar Graph Example",
        image: "/images/graphs/sales-bar.webp",
    },
    {
        key: "accessLineGraph",
        title: "Access Line Graph",
        previewText: "Access Line Graph Example",
        image: "/images/graphs/access-line.webp",
    },
    {
        key: "goodsSalesDonutGraph",
        title: "Goods Sales Donut Graph",
        previewText: "Goods Sales Donut Graph Example",
        image: "/images/graphs/goods-sales.webp",
    },
    {
        key: "studyTimeGraph",
        title: "Study Time Graph",
        previewText: "Study Time Graph Example",
        image: "/images/graphs/study-time.webp",
    },
    {
        key: "heatmapGraph",
        title: "Heatmap Graph",
        previewText: "Heatmap Graph Example",
        image: "/images/graphs/heat-map.webp",
    },
    {
        key: "evaluationRadarGraph",
        title: "Evaluation Radar Graph",
        previewText: "Evaluation Radar Graph Example",
        image: "/images/graphs/radar.webp",
    },
    {
        key: "iceCreamScatterGraph",
        title: "IceCream Scatter Graph",
        previewText: "IceCream Scatter Graph Example",
        image: "/images/graphs/scatter.webp",
    },
];