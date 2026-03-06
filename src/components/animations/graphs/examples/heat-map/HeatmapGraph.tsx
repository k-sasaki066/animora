"use client";

import { ScatterChart, Scatter, XAxis, YAxis, Tooltip } from "recharts";
import { useContainerSize } from "@/hooks/useContainerSize";
import { Data, colors } from "./heatmapUtils";
import { HeatCell } from "./HeatCell";
import { WeeklyStats } from "./WeeklyStats";
import { YearSelector } from "./YearSelector";
import { HeatmapLegend } from "./HeatmapLegend";
import { useWeeklyHeatmap, years } from "./useWeeklyHeatmap";

const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function WeeklyHeatmap() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const isMobile = width && width <= 396;
    const cellSize = isMobile ? 12 : 20;

    const { year, setYear, data, stats, monthWeekMap, maxWeek } = useWeeklyHeatmap();

    const chartHeight = isMobile ? 170 : 240;
    const chartWidth = cellSize * maxWeek + 360;

    return (
        <div ref={ref} className="w-full h-full bg-[#0d1116] **:focus:outline-none overflow-auto no-scrollbar p-4">

            <YearSelector
                years={years}
                currentYear={year}
                onChange={setYear}
            />

            <WeeklyStats stats={stats} />

            <HeatmapLegend colors={colors} />

            <div
                className={`pr-10 overflow-x-auto no-scrollbar ${isMobile ? "h-48" : "h-65"}`}
                style={{ width: width }}
            >
                <ScatterChart
                    width={chartWidth}
                    height={chartHeight}
                    margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
                >

                    <XAxis
                        type="number"
                        dataKey="week"
                        domain={[0, maxWeek]}
                        axisLine={false}
                        tickLine={false}
                        ticks={Object.values(monthWeekMap)}
                        tickFormatter={(value) => {
                            const monthEntry = Object.entries(monthWeekMap).find(
                                ([, week]) => week === value
                            );

                            if (!monthEntry) return "";
                            return months[Number(monthEntry[0])];
                        }}
                        interval={0}
                        padding={{ left: 20 }}
                    />

                    <YAxis
                        type="number"
                        dataKey="day"
                        domain={[0, 6]}
                        reversed
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(d) => weekdays[d]}
                        padding={{ bottom: 20 }}
                    />

                    <Tooltip
                        content={({ active, payload, label }) => {
                            if (!active || !payload || !payload.length) return null;

                            const dayData = payload[0].payload as Data;
                            const date = dayData.date;

                            return (
                                <div className="bg-gray-800 text-white py-2 px-4 rounded-xs text-sm md:text-base">
                                    <div>{`${date.getMonth() + 1}/${date.getDate()}`}</div>
                                    <div>{`active: ${dayData.value}`}</div>
                                </div>
                            );
                        }}
                    />

                    <Scatter
                        data={data}
                        shape={(props: any) => (
                            <HeatCell {...props} size={cellSize} />
                        )}
                    />
                </ScatterChart>
            </div>
        </div>
    );
}