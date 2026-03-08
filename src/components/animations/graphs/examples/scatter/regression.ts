import { Data } from "./iceCreamDataset";

export const calcRegressionLine = (
    data: Data[],
    xMin?: number,
    xMax?: number,
    steps = 50
) => {
    const n = data.length;

    const sumX = data.reduce((acc, d) => acc + d.temp, 0);
    const sumY = data.reduce((acc, d) => acc + d.sales, 0);
    const sumXY = data.reduce((acc, d) => acc + d.temp * d.sales, 0);
    const sumX2 = data.reduce((acc, d) => acc + d.temp * d.temp, 0);

    const slope =
        (n * sumXY - sumX * sumY) /
        (n * sumX2 - sumX * sumX);

    const intercept = (sumY - slope * sumX) / n;

    // X軸の範囲
    const minX = xMin ?? Math.min(...data.map(d => d.temp));
    const maxX = xMax ?? Math.max(...data.map(d => d.temp));

    // steps数で生成
    const lineData = Array.from({ length: steps + 1 }, (_, i) => {
        const x = minX + ((maxX - minX) / steps) * i;

        return {
            temp: x,
            sales: slope * x + intercept
        };
    });

    return lineData;
};