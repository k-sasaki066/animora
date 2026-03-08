import { Data } from "./iceCreamDataset";

export const analyzeYear = <T extends string>(
    year: T,
    data: Data[]
) => {
    const count = data.length;

    const avgTemp =
        data.reduce((sum, d) => sum + d.temp, 0) / count;

    const avgSales =
        data.reduce((sum, d) => sum + d.sales, 0) / count;

    const maxSales = Math.max(...data.map((d) => d.sales));
    const minSales = Math.min(...data.map((d) => d.sales));

    const meanX = avgTemp;
    const meanY = avgSales;

    let sumXY = 0;
    let sumXX = 0;
    let sumYY = 0;

    data.forEach((d) => {
        const dx = d.temp - meanX;
        const dy = d.sales - meanY;

        sumXY += dx * dy;
        sumXX += dx * dx;
        sumYY += dy * dy;
    });

    // 回帰係数
    const slope = sumXY / sumXX;
    const intercept = meanY - slope * meanX;

    // 相関係数
    const correlation = sumXY / Math.sqrt(sumXX * sumYY);

    // 決定係数
    const r2 = correlation * correlation;

    return {
        year,
        count,
        avgTemp,
        avgSales,
        maxSales,
        minSales,
        slope,
        intercept,
        correlation,
        r2,
    };
};