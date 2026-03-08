import { Year } from "./iceCreamDataset";
import { getYearColor, getCorrelationColor } from "./color";

type Analysis = {
    year: Year;
    count: number;
    avgTemp: number;
    avgSales: number;
    maxSales: number;
    minSales: number;
    slope: number;
    intercept: number;
    correlation: number;
    r2: number;
};

type Props = {
    analysis: Analysis[];
    years: Year[];
};

export default function AnalysisPanel({ analysis, years }: Props) {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {analysis.map((a) => {
                const color = getYearColor(a.year, years)

                return (
                    <div
                        key={a.year}
                        className="bg-gray-800 rounded-lg p-4 text-sm text-gray-200 min-w-45"
                        style={{ borderTop: `4px solid ${color}` }}
                    >
                        <div className="font-bold mb-2">{a.year}年</div>

                        <div>データ数: {a.count}</div>
                        <div>平均気温: {a.avgTemp.toFixed(1)}°C</div>
                        <div>平均売上: {Math.round(a.avgSales)} 個</div>
                        <div>最高売上: {Math.round(a.maxSales)} 個</div>
                        <div>最低売上: {Math.round(a.minSales)} 個</div>

                        <div className="mt-2 text-gray-400">
                            回帰式
                        </div>

                        <div>
                            売上 = {a.slope.toFixed(2)} × 気温 + {a.intercept.toFixed(1)}
                        </div>

                        <div
                            style={{ color: getCorrelationColor(a.correlation) }}
                            className="mt-2 font-semibold"
                        >
                            相関係数 (R): {a.correlation.toFixed(2)}
                        </div>

                        <div>
                            決定係数 (R²): {a.r2.toFixed(2)}
                        </div>

                    </div>
                )
            })}
        </div>
    );
}