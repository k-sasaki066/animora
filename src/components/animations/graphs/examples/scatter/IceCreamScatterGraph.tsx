"use client";

import { useState, useMemo, Fragment } from "react";
import { Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea, ReferenceLine, Line, ComposedChart } from "recharts";
import { motion } from "framer-motion";
import { dataset, Year } from "./iceCreamDataset";
import { calcRegressionLine } from "./regression";
import { analyzeYear } from "./statistics";
import { getYearColor } from "./color";
import ScatterShape from "./ScatterShape";
import YearSelector from "./YearSelector";
import AnalysisPanel from "./AnalysisPanel";
import { tempZones, tempLines } from "./chartConfig";

export default function IceCreamScatterGraph() {
    const [activeYears, setActiveYears] = useState<Year[]>(["2023"]);
    const [activePoint, setActivePoint] = useState<any>(null);

    const years = Object.keys(dataset) as Year[];

    const toggleYear = (y: Year) => {
        setActiveYears((prev) =>
            prev.includes(y)
                ? prev.filter((year) => year !== y)
                : [...prev, y]
        );
    };

    const maxSales = useMemo(() => {
        const values = activeYears.flatMap((y) => dataset[y].map((d) => d.sales));
        return Math.max(...values);
    }, [activeYears]);

    const yMax = Math.ceil(maxSales * 1.2);

    const yearAnalysis = useMemo(() => {
        return activeYears.map((y) =>
            analyzeYear(y, dataset[y])
        );
    }, [activeYears]);

    return (
        <div className="w-full h-full mx-auto py-4 space-y-6 bg-gray-900 overflow-auto no-scrollbar **:focus:outline-none">

            <h2 className="text-xl font-bold text-center text-gray-400">
                気温とアイス売上の関係
            </h2>

            {/* 分析 */}
            <AnalysisPanel
                analysis={yearAnalysis}
                years={years}
            />

            {/* 年度切り替え */}
            <YearSelector
                years={years}
                activeYears={activeYears}
                toggleYear={toggleYear}
            />

            {/* グラフ */}
            <motion.div
                key={activeYears.join("-")}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
            >
                <ResponsiveContainer width="100%" height={350}>
                    <ComposedChart margin={{ top: 0, right: 20, bottom: 0, left: 20 }}>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                        />

                        <XAxis
                            type="number"
                            dataKey="temp"
                            name="気温"
                            unit="°C"
                            domain={[0, 40]}
                            padding={{ left: 20, right: 20 }}
                        />

                        <YAxis
                            type="number"
                            dataKey="sales"
                            name="売上"
                            unit="個"
                            domain={[0, yMax]}
                            tickCount={6}
                            allowDecimals={false}  // 整数で表示
                            allowDataOverflow={true}
                            tickFormatter={(value) => `${value}`}
                        />

                        {/* 気温ヒートゾーン */}
                        {tempZones.map((z) => (
                            <ReferenceArea
                                key={z.label}
                                x1={z.x1}
                                x2={z.x2}
                                fill={z.fill}
                                fillOpacity={0.2}
                                label={{
                                    value: z.label,
                                    position: "insideTop",
                                    fontSize: 14,
                                    fill: z.text,
                                    fillOpacity: 0.3,
                                }}
                            />
                        ))}

                        {tempLines.map((x) => (
                            <ReferenceLine
                                key={x}
                                x={x}
                                stroke="#64748b"
                                strokeDasharray="4 4"
                            />
                        ))}

                        <Tooltip
                            cursor={{ stroke: 'none' }}
                            content={({ active, payload }) => {
                                if (active && payload && payload.length > 0) {
                                    const scatterData = payload.find(p => p.payload && p.payload.sales !== undefined && dataset[activeYears[0]].includes(p.payload));
                                    if (!scatterData) return null;

                                    const data = scatterData.payload;

                                    return (
                                        <div className="bg-gray-800 text-white p-2 rounded shadow-lg text-sm">
                                            <div>気温: {data.temp.toFixed(1)}°C</div>
                                            <div>売上: {Math.round(data.sales)} 個</div>
                                            <div>湿度: {Math.round(data.humidity)}%</div>
                                        </div>
                                    );
                                }

                                return null;
                            }}
                        />

                        {activeYears.map((y) => {
                            const color = getYearColor(y, years);
                            const lineData = calcRegressionLine(dataset[y], 0, 40, 100).map(d => ({
                                temp: d.temp,
                                sales: d.sales,
                            }));

                            return (
                                <Fragment key={y}>
                                    <Scatter
                                        name={`${y}年`}
                                        data={dataset[y]}
                                        fill={color}
                                        fillOpacity={0.5}
                                        isAnimationActive={false}
                                        shape={(props) => (
                                            <ScatterShape {...props} activePoint={activePoint} />
                                        )}
                                        onMouseEnter={(data) => setActivePoint(data)}
                                        onMouseLeave={() => setActivePoint(null)}
                                    />
                                    <Line
                                        type="linear"
                                        data={lineData}
                                        dataKey="sales"
                                        stroke={color}
                                        strokeWidth={2}
                                        dot={false}
                                        name={`${y}回帰直線`}
                                        tooltipType="none"
                                        activeDot={false}
                                    />
                                </Fragment>
                            );
                        })}
                    </ComposedChart>
                </ResponsiveContainer>
            </motion.div>
        </div>
    );
}