import { Year } from "./iceCreamDataset";

export const colorList = [
    "#60a5fa",
    "#34d399",
    "#f472b6",
    "#fbbf24",
    "#a78bfa"
];

export const getYearColor = (
    year: Year,
    years: Year[]
) => {
    return colorList[years.indexOf(year) % colorList.length];
};

export const getCorrelationColor = (r: number) => {
    const value = Math.abs(r);

    if (value >= 0.7) return "#22c55e";
    if (value >= 0.4) return "#eab308";
    return "#ef4444";
};