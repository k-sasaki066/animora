"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer, ReferenceLine } from "recharts";
import { StudySummary } from "./StudySummary";
import { SubjectCards } from "./SubjectCards";
import { RangeSelector } from "./RangeSelector";
import { useStudyTimeGraph } from "./useStudyTimeGraph";

export default function StudyTimeGraph() {

    const {
        range,
        setRange,
        data,
        totals,
        totalHours,
        avgHours,
        avgLabel,
        target,
        hidden,
        handleLegendClick,
    } = useStudyTimeGraph();

    return (
        <div className="w-full h-full p-2 overflow-auto no-scrollbar **:focus:outline-none bg-gray-800">
            <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-100">
                科目別 学習時間
            </h2>

            <StudySummary
                totalHours={totalHours}
                avgHours={avgHours}
                avgLabel={avgLabel}
            />

            <SubjectCards
                totals={totals}
            />

            <RangeSelector
                range={range}
                setRange={setRange}
            />

            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#e5e7eb"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="day"
                        stroke="#6b7280"
                        padding={{ left: 20, right: 0 }}
                    />

                    <YAxis
                        unit="h"
                        stroke="#6b7280"
                        domain={[0, (dataMax: number) => Math.max(dataMax, target) + 0.5]}
                    />

                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#f9fafb",
                            borderRadius: 8,
                            border: "none"
                        }}
                    />

                    <ReferenceLine
                        y={target}
                        label="目標"
                        stroke="#f59e0b"
                        strokeDasharray="4 4"
                    />

                    <Legend
                        verticalAlign="top"
                        height={60}
                        onClick={handleLegendClick}
                        wrapperStyle={{ cursor: "pointer" }}
                    />

                    <Area
                        type="monotone"
                        dataKey="math"
                        name="数学"
                        stroke="#3b82f6"
                        fill="#3b82f6"
                        fillOpacity={0.3}
                        hide={hidden.math}
                        isAnimationActive={!hidden.math}
                        animationDuration={800}
                    />

                    <Area
                        type="monotone"
                        dataKey="english"
                        name="英語"
                        stroke="#10b981"
                        fill="#10b981"
                        fillOpacity={0.3}
                        hide={hidden.english}
                        isAnimationActive={!hidden.english}
                        animationDuration={800}
                        animationBegin={200}
                    />

                    <Area
                        type="monotone"
                        dataKey="science"
                        name="科学"
                        stroke="#ef4444"
                        fill="#ef4444"
                        fillOpacity={0.3}
                        hide={hidden.science}
                        isAnimationActive={!hidden.science}
                        animationDuration={800}
                        animationBegin={400}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}